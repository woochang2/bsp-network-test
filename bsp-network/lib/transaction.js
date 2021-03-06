/**
 * Copyright 2018, 2019 IBM All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';
const { QueryImpl: Query } = require('./impl/query/query');
const logger = require('./logger').getLogger('Transaction');
const util = require('util');
const noOpEventHandler = {
    startListening: async () => { },
    waitForEvents: async () => { },
    cancelListening: () => { }
};
function noOpEventHandlerStrategyFactory() {
    return noOpEventHandler;
}
function getResponsePayload(proposalResponse) {
    const validEndorsementResponse = getValidEndorsementResponse(proposalResponse.responses);
    if (!validEndorsementResponse) {
        const error = newEndorsementError(proposalResponse);
        logger.error(error);
        throw error;
    }
    return validEndorsementResponse.response.payload;
}
function getValidEndorsementResponse(endorsementResponses) {
    return endorsementResponses.find((endorsementResponse) => endorsementResponse.endorsement);
}
function newEndorsementError(proposalResponse) {
    const errorInfos = [];
    for (const error of proposalResponse.errors) {
        error.peer = error.connection.name;
        error.status = 'grpc';
        errorInfos.push(error);
    }
    for (const endorsement of proposalResponse.responses) {
        const errorInfo = {
            peer: endorsement.connection.name,
            status: endorsement.response.status,
            message: endorsement.response.message
        };
        errorInfos.push(errorInfo);
    }
    const messages = ['No valid responses from any peers. Errors:'];
    for (const errorInfo of errorInfos) {
        messages.push(util.format('peer=%s, status=%s, message=%s', errorInfo.peer, errorInfo.status, errorInfo.message));
    }
    return new Error(messages.join('\n    '));
}
/**
 * Represents a specific invocation of a transaction function, and provides
 * felxibility over how that transaction is invoked. Applications should
 * obtain instances of this class by calling
 * [Contract#createTransaction()]{@link module:fabric-network.Contract#createTransaction}.
 * <br><br>
 * Instances of this class are stateful. A new instance <strong>must</strong>
 * be created for each transaction invocation.
 * @memberof module:fabric-network
 * @hideconstructor
 */
class Transaction {
    /*
     * @param {Contract} contract Contract to which this transaction belongs.
     * @param {String} name Fully qualified transaction name.
     * @param {function} eventStrategyFactory - A factory function that will return
     * an EventStrategy.
     */
    constructor(contract, name) {
        const method = `constructor[${name}]`;
        logger.debug('%s - start', method);
        this.contract = contract;
        this._name = name;
        this._transientMap = null;
        this._options = contract.gateway.getOptions();
        this._eventHandlerStrategyFactory = this._options.eventHandlerOptions.strategy || noOpEventHandlerStrategyFactory;
        this._isInvoked = false;
        this.queryHandler = contract.network.queryHandler;
        this._endorsingPeers = null; // for user assigned endorsements
        this._commitingOrderers = null; // for user assigned orderers
        // the signer of the outbound requests to the fabric network
        this.identityContext = this.contract.gateway.identityContext;
        // the transaction ID will be generated during the submit
        this._transactionId = null;
    }
    /**
     * Get the fully qualified name of the transaction function.
     * @returns {string} Transaction name.
     */
    getName() {
        return this._name;
    }
    /**
     * Set transient data that will be passed to the transaction function
     * but will not be stored on the ledger. This can be used to pass
     * private data to a transaction function.
     * @param {Object} transientMap Object with String property names and
     * Buffer property values.
     * @returns {module:fabric-network.Transaction} This object, to allow function chaining.
     */
    setTransient(transientMap) {
        const method = `setTranssient[${this._name}]`;
        logger.debug('%s - start', method);
        this._transientMap = transientMap;
        return this;
    }
    /**
     * Get the ID that will be used for this transaction invocation.
     * This value will be null until the submit is executed.
     * @returns {string} Transaction ID that is generated during the submit.
     */
    getTransactionId() {
        return this._transactionId;
    }
    /**
     * Set the peers that should be used for endorsement when this transaction
     * is submitted to the ledger.
     * Setting the peers will override the use of discovery and the submit will
     * send the proposal to these peers.
     * This will override the setEndorsingOrganizations if previously called.
     * @param {Endorser[]} peers - Endorsing peers.
     * @returns {module:fabric-network.Transaction} This object, to allow function chaining.
     */
    setEndorsingPeers(peers) {
        const method = `setEndorsingPeers[${this._name}]`;
        logger.debug('%s - start', method);
        this._endorsingPeers = peers;
        this._endorsingOrgs = null;
        return this;
    }
    /**
     * Set the organizations that should be used for endorsement when this
     * transaction is submitted to the ledger.
     * Peers that are in the organizations will be used for the endorsement.
     * This will override the setEndorsingPeers if previously called. Setting
     * the endorsing organizations will not override discovery, however it will
     * filter the peers provided by discovery to be those in these organizatons.
     * @param {string[]} orgs - Endorsing organizations.
     * @returns {module:fabric-network.Transaction} This object, to allow function chaining.
     */
    setEndorsingOrganizations(...orgs) {
        const method = `setEndorsingOrganizations[${this._name}]`;
        logger.debug('%s - start', method);
        this._endorsingOrgs = orgs;
        this._endorsingPeers = null;
        return this;
    }
    /**
     * Submit a transaction to the ledger. The transaction function <code>name</code>
     * will be evaluated on the endorsing peers and then submitted to the ordering service
     * for committing to the ledger.
     * @async
     * @param {...string} [args] Transaction function arguments.
     * @returns {Buffer} Payload response from the transaction function.
     * @throws {module:fabric-network.TimeoutError} If the transaction was successfully submitted to the orderer but
     * timed out before a commit event was received from peers.
     */
    async submit(...args) {

        
        /////////////////////////////////////////////////////////////////////////////
        ////////////////////////////// BSP FLOW /////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////

        const method = `submit[${this._name}]`;
        logger.debug('%s - start', method);
        const channel = this.contract.network.channel;

        // pass aggregator the function name to resolve the function
        args.unshift(this._name);

        // Instance generated in gateway
        var BspTransactionApiPb = this.contract.gateway.BspTransactionApiPb;
        var aggCli = this.contract.gateway.aggCli;
        var policy = this.contract.gateway.policy;
        var cid = this.contract.gateway.cid;
        
        var PolicyPb = new BspTransactionApiPb.Policy();
        
        var level = BspTransactionApiPb.ConsensusState.Level[policy];
        PolicyPb.setLevel(level);
        PolicyPb.setQuorumsize(1);

        var PolicyMessage = PolicyPb.serializeBinary();

        const endorsement = channel.newEndorsement(this.contract.chaincodeId);
        const endorsementOptions = this._buildEndorsementOptions(args);
        endorsement.build(this.identityContext, endorsementOptions);
        // // get the transaction ID generated by the endorsement build
        this._transactionId = endorsement.getTransactionId();
        endorsement.sign(this.identityContext);

        var id = this.identityContext;
        // return

        var ProposalPayloadPb = new BspTransactionApiPb.ProposalPayload();
        ProposalPayloadPb.setClientid(cid);
        ProposalPayloadPb.setTxid(this._transactionId);
        ProposalPayloadPb.setChaincodeid(this.contract.chaincodeId);
        args.forEach(arg => {
            ProposalPayloadPb.addChaincodeargs(arg);
        })
        ProposalPayloadPb.setExtensionpaylod(PolicyMessage);

        var ProposalPayloadMessage = ProposalPayloadPb.serializeBinary();

        var SignaturePb = Buffer.from(id.sign(ProposalPayloadMessage));

        var SignautreHeaderPb = new BspTransactionApiPb.SignatureHeader();

        SignautreHeaderPb.setCreator(this.identityContext.serializeIdentity());
        SignautreHeaderPb.setNonce(this.identityContext.nonce);

        var SignautreHeaderMessage = SignautreHeaderPb.serializeBinary();

        var ProposalPb = new BspTransactionApiPb.Proposal();

        ProposalPb.setPayload(ProposalPayloadMessage);
        ProposalPb.setSignature(SignaturePb);
        ProposalPb.setSignatureheader(SignautreHeaderMessage);

        var WaitForEventRequestPb = new BspTransactionApiPb.WaitForEventRequest();

        WaitForEventRequestPb.setTxid(this._transactionId);
        WaitForEventRequestPb.setClientid(cid);
        WaitForEventRequestPb.setPolicy(PolicyPb);

        var bspChangeOngoing;

        var ProposalResponsePb = await new Promise ((resolve, reject) => {
            aggCli.processProposal(ProposalPb, (err, ProposalResponsePb) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    // Getting Status of Tx Event
                    var status = ProposalResponsePb.getStatus();
                    var payload = ProposalResponsePb.getPayload();

                    if(status == "triggered"){
                        bspChangeOngoing = true;
                        resolve(bspChangeOngoing);
                    }
                    else if(status == "success"){
                        bspChangeOngoing = false;
                        resolve(bspChangeOngoing);
                    }
                }
            })
        });

         try {
                var isSuccess = await new Promise ((resolve, reject) => {
                    aggCli.waitForEvent(WaitForEventRequestPb, (err, WaitForEventRequestResponsePb) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        else {
                            
                            // Getting Status of Tx Event
                            var status = WaitForEventRequestResponsePb.getStatus();
                            
                            if(status == "triggered"){
                                bspChangeOngoing = true;
                                resolve(bspChangeOngoing);
                            }
                            else if(status == "success"){
                                bspChangeOngoing = false;
                                resolve(bspChangeOngoing);
                            }
                        }
                    })
                });
        
                if (!isSuccess) {
                    return isSuccess;
                }
                else {
                    const msg = 'failed to commit transaction';
                    throw new Error(msg);
                } 
            
            } catch (err){
                throw err;
            }

        /////////////////////////////////////////////////////////////////////////////
        //////////////////////////// FABRIC FLOW ////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////

        /*
        const method = `submit[${this._name}]`;
        logger.debug('%s - start', method);
        const channel = this.contract.network.channel;
        const transactionOptions = this._options.eventHandlerOptions;
        const endorsementOptions = this._buildEndorsementOptions(args);
        console.log(args);
        if (Number.isInteger(transactionOptions.endorseTimeout)) {
            endorsementOptions.requestTimeout = transactionOptions.endorseTimeout * 1000; // in ms;
        }
        // This is the object that will centralize this endorsement activities
        // with the fabric network
        const endorsement = channel.newEndorsement(this.contract.chaincodeId);
        if (this._endorsingPeers) {
            logger.debug('%s - user has assigned targets', method);
            endorsementOptions.targets = this._endorsingPeers;
        }
        else if (this.contract.network.discoveryService) {
            logger.debug('%s - discovery handler will be used for endorsing', method);
            endorsementOptions.handler = await this.contract.getDiscoveryHandler(endorsement);
            if (this._endorsingOrgs) {
                logger.debug('%s - using discovery and user has assigned endorsing orgs %s', method, this._endorsingOrgs);
                endorsementOptions.requiredOrgs = this._endorsingOrgs;
            }
        }
        else if (this._endorsingOrgs) {
            logger.debug('%s - user has assigned endorsing orgs %s', method, this._endorsingOrgs);
            const flatten = (accumulator, value) => {
                accumulator.push(...value);
                return accumulator;
            };
            endorsementOptions.targets = this._endorsingOrgs.map(channel.getEndorsers).reduce(flatten, []);
        }
        else {
            logger.debug('%s - targets will default to all that are assigned to this channel', method);
            endorsementOptions.targets = channel.getEndorsers();
        }
        // by now we should have targets or a discovery handler to be used
        // by the send() of the proposal instance
        logger.debug('%s - build and send the endorsement', method);
        // build the outbound request along with getting a new transactionId
        // from the identity context
        endorsement.build(this.identityContext, endorsementOptions);
        // get the transaction ID generated by the endorsement build
        this._transactionId = endorsement.getTransactionId();
        endorsement.sign(this.identityContext);
        // ------- S E N D   P R O P O S A L
        // This is where the request gets sent to the peers
        const proposalResponse = await endorsement.send(endorsementOptions);
        try {
            const result = getResponsePayload(proposalResponse);
            // ------- E V E N T   M O N I T O R
            const eventHandler = this._eventHandlerStrategyFactory(endorsement.getTransactionId(), this.contract.network);
            await eventHandler.startListening();
            const commitOptions = {};
            if (Number.isInteger(transactionOptions.commitTimeout)) {
                commitOptions.requestTimeout = transactionOptions.commitTimeout * 1000; // in ms;
            }
            if (endorsementOptions.handler) {
                logger.debug('%s - use discovery to commit', method);
                commitOptions.handler = endorsementOptions.handler;
            }
            else {
                logger.debug('%s - use the orderers assigned to the channel', method);
                commitOptions.targets = channel.getCommitters();
            }
            // by now we should have a discovery handler or use the target orderers
            // that have been assigned from the channel to perform the commit
            const commit = endorsement.newCommit();
            commit.build(this.identityContext, commitOptions);
            commit.sign(this.identityContext);
            // -----  C O M M I T   E N D O R S E M E N T
            // this is where the endorsement results are sent to the orderer
            const commitResponse = await commit.send(commitOptions);
            logger.debug('%s - commit response %j', method, commitResponse);
            if (commitResponse.status !== 'SUCCESS') {
                const msg = `Failed to commit transaction %${endorsement.transactionId}, orderer response status: ${commitResponse.status}`;
                logger.error('%s - %s', method, msg);
                eventHandler.cancelListening();
                throw new Error(msg);
            }
            else {
                logger.debug('%s - successful commit', method);
            }
            logger.debug('%s - wait for the transaction to be committed on the peer', method);
            await eventHandler.waitForEvents();
            return result;
        }
        catch (err) {
            err.responses = proposalResponse.responses;
            err.errors = proposalResponse.errors;
            throw err;
        }
        */
    }
    _buildEndorsementOptions(args) {
        const request = {
            fcn: this._name,
            args: args
        };
        if (this._transientMap) {
            request.transientMap = this._transientMap;
        }
        return request;
    }
    /**
     * Evaluate a transaction function and return its results.
     * The transaction function will be evaluated on the endorsing peers but
     * the responses will not be sent to the ordering service and hence will
     * not be committed to the ledger.
     * This is used for querying the world state.
     * @async
     * @param {...string} [args] Transaction function arguments.
     * @returns {Buffer} Payload response from the transaction function.
     */
    async evaluate(...args) {
        /////////////////////////////////////////////////////////////////////////////
        ////////////////////////////// BSP FLOW /////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////

        const method = `evaluate[${this._name}]`;
        logger.debug('%s - start', method);
        const queryOptions = this._options.queryHandlerOptions;
        const request = this._buildEndorsementOptions(args);

        const queryProposal = this.contract.network.channel.newQuery(this.contract.chaincodeId);
        logger.debug('%s - build and sign the query', method);
        queryProposal.build(this.identityContext, request);
        // get the transaction ID generated by the endorsement build
        this._transactionId = queryProposal.getTransactionId();

        var BspTransactionApiPb = this.contract.gateway.BspTransactionApiPb;
        var queryCli = this.contract.gateway.queryCli;
        var readpolicy = this.contract.gateway.readpolicy;
        var QueryRequestPb = new BspTransactionApiPb.QueryRequest();
        var ReadPolicyPb = new BspTransactionApiPb.ReadPolicy();

        // setting Read Policy
        // e.g., 0 for BSP, 1 for 1 Auditor, 2 for 2 auditors
        // should set read policy dynamically

        
        ReadPolicyPb.setGatheredfrom(readpolicy);
        var ReadPolicyMessage = ReadPolicyPb.serializeBinary();
        

        const channel = this.contract.network.channel;
        

        QueryRequestPb.setChannelid(channel.name);
        QueryRequestPb.setChaincodeid(this.contract.chaincodeId);
        
        QueryRequestPb.setKey(args[0]);
        
        QueryRequestPb.setExtension(ReadPolicyMessage);
        console.log("Extension: ", ReadPolicyMessage);

        

        try {
            var value = await new Promise ((resolve, reject) => {
                queryCli.query(QueryRequestPb, (err, QueryResponsePb) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else {
                        // Getting Status of Tx Event
                        var key = QueryResponsePb.getKey();
                        var value = QueryResponsePb.getValue();
                        
                        if(key){
                            console.log("Query Result: ", key, value);
                            resolve(value);
                        }
                    }
                })
            });
            if (value) {
                return value;
            }
        } catch (err){
            throw err;
        }
            

        /////////////////////////////////////////////////////////////////////////////
        //////////////////////////// FABRIC FLOW ////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////
        // const method = `evaluate[${this._name}]`;
        // logger.debug('%s - start', method);
        // const queryOptions = this._options.queryHandlerOptions;
        // const request = this._buildEndorsementOptions(args);
        // if (Number.isInteger(queryOptions.timeout)) {
        //     request.requestTimeout = queryOptions.timeout * 1000; // in ms;
        // }
        // const queryProposal = this.contract.network.channel.newQuery(this.contract.chaincodeId);
        // logger.debug('%s - build and sign the query', method);
        // queryProposal.build(this.identityContext, request);
        // // get the transaction ID generated by the endorsement build
        // this._transactionId = queryProposal.getTransactionId();
        // queryProposal.sign(this.identityContext);
        // const query = new Query(queryProposal, queryOptions);
        // logger.debug('%s - handler will send', method);
        // const results = await this.queryHandler.evaluate(query);
        // logger.debug('%s - queryHandler completed %j', method, results);
        // return results;
    }
}
module.exports = Transaction;
//# sourceMappingURL=transaction.js.map