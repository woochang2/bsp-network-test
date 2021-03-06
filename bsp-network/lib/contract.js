/**
 * Copyright 2018, 2019 IBM All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';
const Transaction = require('./transaction');
const { ContractListenerSession } = require('./impl/event/contractlistenersession');
const ListenerSession = require('./impl/event/listenersession');
const logger = require('./logger').getLogger('Contract');
const util = require('util');
/**
 * Ensure transaction name is a non-empty string.
 * @private
 * @param {*} name Transaction name.
 * @throws {Error} if the name is invalid.
 */
function verifyTransactionName(name) {
    if (typeof name !== 'string' || name.length === 0) {
        const msg = util.format('Transaction name must be a non-empty string: %j', name);
        logger.error('verifyTransactionName:', msg);
        throw new Error(msg);
    }
}
/**
 * Ensure that, if a namespace is defined, it is a non-empty string
 * @private
 * @param {*} namespace Transaction namespace.
 * @throws {Error} if the namespace is invalid.
 */
function verifyNamespace(namespace) {
    if (namespace && typeof namespace !== 'string') {
        const msg = util.format('Namespace must be a non-empty string: %j', namespace);
        logger.error('verifyNamespace:', msg);
        throw new Error(msg);
    }
}
/**
 * <p>Represents a smart contract (chaincode) instance in a network.
 * Applications should get a Contract instance using the
 * networks's [getContract]{@link module:fabric-network.Network#getContract} method.</p>
 *
 * <p>The Contract allows applications to:</p>
 * <ul>
 *   <li>Submit transactions that store state to the ledger using
 *       [submitTransaction]{@link module:fabric-network.Contract#submitTransaction}.</li>
 *   <li>Evaluate transactions that query state from the ledger using
 *       [evaluateTransaction]{@link module:fabric-network.Contract#evaluateTransaction}.</li>
 *   <li>Listen for new events and replay previous events emitted by the smart contract using
 *       [addContractListener]{@link module:fabric-network.Contract#addContractListener}.</li>
 * </ul>
 *
 * <p>If more control over transaction invocation is required, such as including transient data,
 * [createTransaction]{@link module:fabric-network.Contract#createTransaction} can be used to build a transaction
 * request that is submitted to or evaluated by the smart contract.</p>
 * @memberof module:fabric-network
 * @hideconstructor
 */
class Contract {
    constructor(network, chaincodeId, namespace) {
        const method = `constructor[${namespace}]`;
        logger.debug('%s - start', method);
        verifyNamespace(namespace);
        this.network = network;
        this.chaincodeId = chaincodeId;
        this.gateway = network.gateway;
        this.namespace = namespace;
        this.discoveryService = null;
        this.contractListeners = new Map();
        this.discoveryInterests = [{ name: chaincodeId }];
    }
    /**
     * Create an object representing a specific invocation of a transaction
     * function implemented by this contract, and provides more control over
     * the transaction invocation. A new transaction object <strong>must</strong>
     * be created for each transaction invocation.
     * @param {String} name Transaction function name.
     * @returns {module:fabric-network.Transaction} A transaction object.
     */
    createTransaction(name) {
        verifyTransactionName(name);
        const qualifiedName = this._getQualifiedName(name);
        const transaction = new Transaction(this, qualifiedName);
        return transaction;
    }
    _getQualifiedName(name) {
        return (this.namespace ? `${this.namespace}:${name}` : name);
    }
    /**
     * Submit a transaction to the ledger. The transaction function <code>name</code>
     * will be evaluated on the endorsing peers and then submitted to the ordering service
     * for committing to the ledger.
     * This function is equivalent to calling <code>createTransaction(name).submit()</code>.
     * @param {string} name Transaction function name.
     * @param {...string} [args] Transaction function arguments.
     * @returns {Buffer} Payload response from the transaction function.
     * @throws {module:fabric-network.TimeoutError} If the transaction was successfully submitted to the orderer but
     * timed out before a commit event was received from peers.
     */
    async submitTransaction(name, ...args) {
        return this.createTransaction(name).submit(...args);
    }
    /**
     * Evaluate a transaction function and return its results.
     * The transaction function <code>name</code>
     * will be evaluated on the endorsing peers but the responses will not be sent to
     * the ordering service and hence will not be committed to the ledger.
     * This is used for querying the world state.
     * This function is equivalent to calling <code>createTransaction(name).evaluate()</code>.
     * @param {string} name Transaction function name.
     * @param {...string} [args] Transaction function arguments.
     * @returns {Buffer} Payload response from the transaction function.
     */
    async evaluateTransaction(name, ...args) {
        return this.createTransaction(name).evaluate(...args);
    }
    /**
     * Add a listener to receive all contract events emitted by the smart contract as part of successfully committed
     * transactions. The default is to listen for full contract events from the current block position.
     * @param {module:fabric-network.ContractListener} listener A contract listener callback function.
     * @param {module:fabric-network.ListenerOptions} [options] Listener options.
     * @returns {Promise<module:fabric-network.ContractListener>} The added listener.
     * @example
     * const listener: ContractListener = async (event) => {
     *     if (event.eventName === 'newOrder') {
     *         const details = event.payload.toString('utf8');
     *         // Run business process to handle orders
     *     }
     * };
     * contract.addContractListener(listener);
     */
    async addContractListener(listener, options) {
        const sessionSupplier = () => new ContractListenerSession(listener, this.chaincodeId, this.network, options);
        const contractListener = await ListenerSession.addListener(listener, this.contractListeners, sessionSupplier);
        return contractListener;
    }
    /**
     * Remove a previously added contract listener.
     * @param {module:fabric-network.ContractListener} listener A contract listener callback function.
     */
    removeContractListener(listener) {
        ListenerSession.removeListener(listener, this.contractListeners);
    }
    /**
     * Internal use
     * Use this method to get the DiscoveryHandler to get the endorsements
     * needed to commit a transaction.
     * The first time this method is called, this contract's DiscoveryService
     * instance will be setup.
     * The service will make a discovery request to the same
     * target as that used by the Network. The request will include this contract's
     * discovery interests. This will enable the peer's discovery
     * service to generate an endorsement plan based on the chaincode's
     * endorsement policy, the collection configuration, and the current active
     * peers.
     * Note: It is assumed that the discovery interests will not
     * change on successive calls. The handler's DiscoveryService will use the
     * "refreshAge" discovery option after the first call to determine if the
     * endorsement plan should be refreshed by a new call to the peer's
     * discovery service.
     * @private
     * @return {DiscoveryHandler} The handler that will work with the discovery
     * endorsement plan to send a proposal to be endorsed to the peers as described
     * in the plan.
     */
    async getDiscoveryHandler() {
        const method = `getDiscoveryHandler[${this.chaincodeId}]`;
        logger.debug('%s - start', method);
        // if the network is using discovery, then this contract will too
        if (this.network.discoveryService) {
            // check if we have initialized this contract's discovery
            if (!this.discoveryService) {
                logger.debug('%s - setting up contract discovery', method);
                this.discoveryService = this.network.channel.newDiscoveryService(this.chaincodeId);
                const targets = this.network.discoveryService.targets;
                const idx = this.network.gateway.identityContext;
                const asLocalhost = this.network.gateway.getOptions().discovery.asLocalhost;
                logger.debug('%s - using discovery interest %j', method, this.discoveryInterests);
                this.discoveryService.build(idx, { interest: this.discoveryInterests });
                this.discoveryService.sign(idx);
                // go get the endorsement plan from the peer's discovery service
                // to be ready to be used by the transaction's submit
                await this.discoveryService.send({ asLocalhost, targets });
                logger.debug('%s - endorsement plan retrieved', method);
            }
            // The handler will have access to the endorsement plan fetched
            // by the parent DiscoveryService instance.
            logger.debug('%s - returning a new discovery service handler', method);
            return this.discoveryService.newHandler();
        }
        else {
            logger.debug('%s - not using discovery - return null handler', method);
            return null;
        }
    }
    /**
     * Provide a Discovery Interest settings to help the peer's discovery service
     * build an endorsement plan. This chaincode Id will be include by default in
     * the list of discovery interests. If this contract's chaincode is in one or
     * more collections then use this method with this chaincode Id to change the
     * default discovery interest to include those collection names.
     * @param {DiscoveryInterest} interest - These will be added to the
     * existing discovery interests and used when the
     * @link module:fabric-network.Transaction#submit} is called.
     * @return {Contract} This Contract instance
     */
    addDiscoveryInterest(interest) {
        const method = `addDiscoveryInterest[${this._name}]`;
        if (!(typeof interest === 'object')) {
            throw Error('"interest" parameter must be a DiscoveryInterest object');
        }
        logger.debug('%s - adding %s', method, interest);
        const existingIndex = this.discoveryInterests.findIndex((entry) => entry.name === interest.name);
        if (existingIndex >= 0) {
            this.discoveryInterests[existingIndex] = interest;
        }
        else {
            this.discoveryInterests.push(interest);
        }
        return this;
    }
    /**
     * reset Discovery interest to default of this contracts chaincode name
     * and no collection names and no other chaincode names.
     *
     * @return {Contract} This Contract instance
     */
    resetDiscoveryInterests() {
        const method = `resetDiscoveryInterest[${this._name}]`;
        logger.debug('%s - start', method);
        this.discoveryInterests = [{ name: this.chaincodeId }];
        this.discoveryService = null;
        return this;
    }
    /**
     * Retrieve the Discovery Interest settings that will help the peer's
     * discovery service build an endorsement plan.
     * @return {DiscoveryInterest[]} - An array of DiscoveryInterest
     */
    getDiscoveryInterests() {
        return this.discoveryInterests;
    }
}
module.exports = Contract;
//# sourceMappingURL=contract.js.map