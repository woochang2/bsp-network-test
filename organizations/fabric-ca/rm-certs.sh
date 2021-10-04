#/usr/bin/bash

workingDir="/home/jyr/go/src/github.com/hyperledger/fabric/speculator/production/fabric-samples/test-network/"
distributedRm() {
    rm -rf ${workingDir}/organizations/peerOrganizations 
    rm -rf ${workingDir}/organizations/ordererOrganizations

    ## remove fabric ca artifacts
    rm -rf ${workingDir}/organizations/fabric-ca/org1/msp 
    rm -rf ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/org1/ca-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/org1/IssuerPublicKey 
    rm -rf ${workingDir}/organizations/fabric-ca/org1/IssuerRevocationPublicKey 
    rm -rf ${workingDir}/organizations/fabric-ca/org1/fabric-ca-server.db

    rm -rf ${workingDir}/organizations/fabric-ca/org2/msp 
    rm -rf ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/org2/ca-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/org2/IssuerPublicKey 
    rm -rf ${workingDir}/organizations/fabric-ca/org2/IssuerRevocationPublicKey
    rm -rf ${workingDir}/organizations/fabric-ca/org2/fabric-ca-server.db

    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/msp 
    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/ca-cert.pem 
    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/IssuerPublicKey 
    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/IssuerRevocationPublicKey 
    rm -rf ${workingDir}/organizations/fabric-ca/ordererOrg/fabric-ca-server.db
}

distributedRm
