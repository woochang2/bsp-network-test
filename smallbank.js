/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('bsp-network');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.yaml');
        const ccp = yaml.load(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('admin');
        if (!identity) {
            console.log('An identity for the user "admin" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        // First Try: Setting Discovery false - static 
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'admin', discovery: { enabled: false, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('smallbank');

        // Submit the specified transaction.
        await contract.submitTransaction('create_account', 'edgechain::0:::client0.edgechain0.com001036', '100000000');
        console.log('Transaction has been submitted');
        
        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();
