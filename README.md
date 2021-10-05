# Tutorial: Running a sample application using BSP Client SDK for Node.js (Co-working Purpose)
Following this tutorial, a tester runs pre-defined sample application by connecting to a gateway of bsp-network.

This project publishes a npm package:
- bsp-network: This package gives the APIs to connect to a BSP network, submit transactions and perform queries against the edgechain ledger.

This repository contains several folders:
- fabric-ca: This folder contains `docker-compose.yaml` containing the configuration of local fabric-ca and `run.sh` to run a local fabric-ca docker container.
- organizations: This folder contains the certificates and connection profiles of each organizations in a BSP network.

# Environment
- OS: Ubuntu Linux 20.04 
- Docker version: >= 20.10.7 
- Node vesion: >= v10.24.1
- NPM version: >= 6.14.13
- Go version: >= 1.14

# Notice for testers
This repository is just a test repository for testing submitting and querying transaction from bsp-network. **Running fabric-ca server in a deployment level** and **deployment of user-defined smart contract** should be supplemented later.

# Steps to run a sample application
### 0. Clone the repository for testing
```
$ git clone https://github.com/woochang2/bsp-network-test.git
$ cd bsp-network-test
```

### 1. Install a bsp-node-sdk npm package
**Currently working version is 0.0.5**
```bash 
$ npm install bsp-network@0.0.5
```

### 2. run a local fabric-ca container to create identities for connecting bsp-network
```bash 
$ cd fabric-ca
$ ./run.sh
```

### 3. Enroll admin and register user
Open new terminal
```bash
$ cd ..
$ node enrollAdmin.js
$ node registerUser.js
```

### 4. Set up a common connection profile between network admin and client
Open new terminal
```bash
$ cd organizations/peerOrganizations/org1.example.com
$ cat connection-org1.yaml
```
The connection profile contains the information for bsp-network:
- `region`: This field is used for representing the region where the bsp-network exists.
- `client`: This field is used for setting the client information extending the format in connection profile of fabric network. url, clientid, and shardid is added to represent the information of client.
- `organizations`: This field is reused for constructing organizations following the same format as the connection profile of fabric network.
- `bsp`: This field is used for setting the url information of bsp and representing the bsp is active or not.
- `auditors`: This field is used for setting the url information and tls certificate of auditors.
- `aggregators`: This field is used for setting the url information and transaction policy of aggregator.
- `peers`: This field is used for constructing gateway for bsp-network following the same format as the connection profile of fabric network.

The connection profile contains the information for fabric-ca server:
- `certificateAuthorities`: This field is reused for representing the endpoint of fabric-ca server following the same format as the connection profile of fabric network.

### 5. Customize smallbank application - demo shows already customized smallbank application
```bash
$ cat smallbank.js
```

### 6. Run a smallbank application
```bash
$ node smallbank.js
```

# Additional Explanation
## docker-compose.yaml to describe the information of fabric-ca server
yaml file refers to the organizations folder in a repository.
```yaml
services:
  ca.org1.example.com:
    image: hyperledger/fabric-ca:1.4.7
    container_name: ca-org1
    environment:
      - FABRIC_CA_HOME=/etc/hyperledger/fabric-ca-server
      - FABRIC_CA_SERVER_CA_NAME=ca-org1
      - FABRIC_CA_SERVER_CA_CERTFILE=/etc/hyperledger/fabric-ca-server-config/ca-cert.pem
      - FABRIC_CA_SERVER_CA_KEYFILE=/etc/hyperledger/fabric-ca-server-config/msp/keystore/573ce579f341cfaba8ba864a68f22ce6460e90b14aee5de4cd0b1ef28f76b18e_sk
      - FABRIC_CA_SERVER_TLS_ENABLED=true
      - FABRIC_CA_SERVER_TLS_CERTFILE=/etc/hyperledger/fabric-ca-server-config/tls-cert.pem
      - FABRIC_CA_SERVER_TLS_KEYFILE=/etc/hyperledger/fabric-ca-server-config/msp/keystore/912f5243a173cf527d02053fb53a7371a6f47d3e27db892f5437de3640799796_sk
    ports:
      - "7054:7054"
    command: sh -c 'fabric-ca-server start -b admin:adminpw -d'
    volumes:
      - ../organizations/fabric-ca/org1:/etc/hyperledger/fabric-ca-server-config
``` 

## connection-org1.yaml to describe the common connection profile
**(This is the very first version of connnection profile - peers field is used as a gateway of bsp-network)**
Connection profile is share between BSP client SDK and network admin to give the static network topology of BSP network. The connection profile is defined in `organizations/peerOrganizations/org1.example.com/connection-org1.yaml` and the sample connection profile is described as followed:
```yaml
---
name: test-network-org1
version: 1.0.0
region: edgechain0
client:
  organization: Org1
  connection:
    timeout:
      peer:
        endorser: '300'
  url: client0.edgechain0.com
  clientid: client0.edgechain0.com
  shardid: edgechain::0
organizations:
  Org1:
    mspid: Org1MSP
    peers:
    - peer0.org1.example.com
    certificateAuthorities:
    - ca.org1.example.com
bsp:
  bsp0.executor.edgechain0.com:
    url: grpcs://bsp0.executor.edgechain0.com:10000
    active: true
  bsp1.executor.edgechain0.com:
    url: grpcs://bsp1.executor.edgechain0.com:10000
    active: false
auditors:
  auditor1.edgechain0.com:
    url: grpcs://auditor1.edgechain0.com:10000
    tlsCACerts:
      pem: |
        -----BEGIN CERTIFICATE-----
        MIICJzCCAc2gAwIBAgIUDZ1FJ2ECeV3+dTtkpRjS/kAUulowCgYIKoZIzj0EAwIw
        cDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMQ8wDQYDVQQH
        EwZEdXJoYW0xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
        Lm9yZzEuZXhhbXBsZS5jb20wHhcNMjEwNjAyMTIzNDAwWhcNMzYwNTI5MTIzNDAw
        WjBwMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGggQ2Fyb2xpbmExDzANBgNV
        BAcTBkR1cmhhbTEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMT
        Y2Eub3JnMS5leGFtcGxlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABE+Y
        6i1bhydmcVhwFOsHPYARdLCKTq55C1Aal0k0ZeW+brYUxYA2qVGFrhhc3qb09YL0
        VdB+bWSscdsBb2cq0VSjRTBDMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAG
        AQH/AgEBMB0GA1UdDgQWBBTHesmPDLTOizufD1umli6jNpqhrTAKBggqhkjOPQQD
        AgNIADBFAiEAu9Z57V/L9Ot5Dez2UfYOZgB/YrDpW1nKHlqB7qFu3jsCICb5dPEE
        A8r8bKjs/ZXfXdUjKaJtODmDhY7xUFlOUq0P
        -----END CERTIFICATE-----
  auditor2.edgechain0.com:
    url: grpcs://auditor2.edgechain0.com:10000
    tlsCACerts:
      pem: |
        -----BEGIN CERTIFICATE-----
        MIICJzCCAc2gAwIBAgIUDZ1FJ2ECeV3+dTtkpRjS/kAUulowCgYIKoZIzj0EAwIw
        cDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMQ8wDQYDVQQH
        EwZEdXJoYW0xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
        Lm9yZzEuZXhhbXBsZS5jb20wHhcNMjEwNjAyMTIzNDAwWhcNMzYwNTI5MTIzNDAw
        WjBwMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGggQ2Fyb2xpbmExDzANBgNV
        BAcTBkR1cmhhbTEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMT
        Y2Eub3JnMS5leGFtcGxlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABE+Y
        6i1bhydmcVhwFOsHPYARdLCKTq55C1Aal0k0ZeW+brYUxYA2qVGFrhhc3qb09YL0
        VdB+bWSscdsBb2cq0VSjRTBDMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAG
        AQH/AgEBMB0GA1UdDgQWBBTHesmPDLTOizufD1umli6jNpqhrTAKBggqhkjOPQQD
        AgNIADBFAiEAu9Z57V/L9Ot5Dez2UfYOZgB/YrDpW1nKHlqB7qFu3jsCICb5dPEE
        A8r8bKjs/ZXfXdUjKaJtODmDhY7xUFlOUq0P
        -----END CERTIFICATE-----
# Policy Candidates: "EC_SPEC", "EC_ORDERED", "EC_PREPARED", "EC_COMMIT", "MC_ORDERED", "MC_COMMIT", "MC_PROGRESS"      
aggregators:
  aggregator0.edgechain0.com:
    url: 141.223.121.62:30303
    policy: EC_SPEC    
peers:
  aggregator0.edgechain0.com:
    url: grpcs://141.223.121.62:7051
    tlsCACerts:
      pem: |
        -----BEGIN CERTIFICATE-----
        MIICJzCCAc2gAwIBAgIUDZ1FJ2ECeV3+dTtkpRjS/kAUulowCgYIKoZIzj0EAwIw
        cDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMQ8wDQYDVQQH
        EwZEdXJoYW0xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
        Lm9yZzEuZXhhbXBsZS5jb20wHhcNMjEwNjAyMTIzNDAwWhcNMzYwNTI5MTIzNDAw
        WjBwMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGggQ2Fyb2xpbmExDzANBgNV
        BAcTBkR1cmhhbTEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMT
        Y2Eub3JnMS5leGFtcGxlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABE+Y
        6i1bhydmcVhwFOsHPYARdLCKTq55C1Aal0k0ZeW+brYUxYA2qVGFrhhc3qb09YL0
        VdB+bWSscdsBb2cq0VSjRTBDMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAG
        AQH/AgEBMB0GA1UdDgQWBBTHesmPDLTOizufD1umli6jNpqhrTAKBggqhkjOPQQD
        AgNIADBFAiEAu9Z57V/L9Ot5Dez2UfYOZgB/YrDpW1nKHlqB7qFu3jsCICb5dPEE
        A8r8bKjs/ZXfXdUjKaJtODmDhY7xUFlOUq0P
        -----END CERTIFICATE-----   
    grpcOptions:
      ssl-target-name-override: peer0.org1.example.com
      hostnameOverride: peer0.org1.example.com
certificateAuthorities:
  ca.org1.example.com:
    url: https://localhost:7054
    caName: ca-org1
    tlsCACerts:
      pem: |
        -----BEGIN CERTIFICATE-----
        MIICJzCCAc2gAwIBAgIUDZ1FJ2ECeV3+dTtkpRjS/kAUulowCgYIKoZIzj0EAwIw
        cDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMQ8wDQYDVQQH
        EwZEdXJoYW0xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh
        Lm9yZzEuZXhhbXBsZS5jb20wHhcNMjEwNjAyMTIzNDAwWhcNMzYwNTI5MTIzNDAw
        WjBwMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGggQ2Fyb2xpbmExDzANBgNV
        BAcTBkR1cmhhbTEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMT
        Y2Eub3JnMS5leGFtcGxlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABE+Y
        6i1bhydmcVhwFOsHPYARdLCKTq55C1Aal0k0ZeW+brYUxYA2qVGFrhhc3qb09YL0
        VdB+bWSscdsBb2cq0VSjRTBDMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAG
        AQH/AgEBMB0GA1UdDgQWBBTHesmPDLTOizufD1umli6jNpqhrTAKBggqhkjOPQQD
        AgNIADBFAiEAu9Z57V/L9Ot5Dez2UfYOZgB/YrDpW1nKHlqB7qFu3jsCICb5dPEE
        A8r8bKjs/ZXfXdUjKaJtODmDhY7xUFlOUq0P
        -----END CERTIFICATE-----
        
    httpOptions:
      verify: false
```
