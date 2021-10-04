#!/bin/bash

# each corresponds with peer1, peer2, peer3, peer4
peers=("localhost:7151" "localhost:7251" "localhost:7351" "localhost:7451")
peer_names=("peer1" "peer2" "peer3" "peer4")

export PATH=${PWD}/../bin:${PWD}:$PATH
export FABRIC_CA_CLIENT_HOME=${PWD}/organizations/peerOrganizations/org1.example.com/
echo FABRIC_CA_CLIENT_HOME: $FABRIC_CA_CLIENT_HOME

# export CORE_PEER_TLS_ENABLED=true
# export CORE_PEER_LOCALMSPID="Org1MSP"
# export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp

fabric-ca-client enroll -u https://admin:adminpw@localhost:7054 --caname ca-org1 --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

for (( i = 0 ; i < ${#peers[@]} ; i++ )) ; do

    peer=${peers[$i]}
    # echo 
    idx=$(($i+1))

    # export PEER_ORG1_CA=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/ca.crt
    # export CORE_PEER_TLS_ROOTCERT_FILE=$PEER_ORG1_CA
    # export CORE_PEER_ADDRESS=$peer

    # 1. register peer$(($i+1)) (Note that secret value is the same across all the peers)
    # set -x
    fabric-ca-client register --caname ca-org1 --id.name peer$idx --id.secret peerpw --id.type peer --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem
    # set +x


    mkdir -p ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com

    # 2. generate peer$idx msp
    fabric-ca-client enroll -u https://peer$idx:peerpw@$peer --caname ca-org1 -M ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp --csr.hosts peer$idx.org1.example.com --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem

    cp ${PWD}/organizations/peerOrganizations/org1.example.com/msp/config.yaml ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp/config.yaml


    # 3. generate the peer $idx tls-certificates
    fabric-ca-client enroll -u https://peer$idx:peerpw@$peer --caname ca-org1 -M ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls --enrollment.profile tls --csr.hosts peer$idx.org1.example.com --csr.hosts localhost --tls.certfiles ${PWD}/organizations/fabric-ca/org1/tls-cert.pem


    # # it looks like changing its name to consistent format, i.e., ca.crt, server.crt, server.key
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/ca.crt
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/signcerts/* ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/server.crt
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/keystore/* ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/server.key

    mkdir ${PWD}/organizations/peerOrganizations/org1.example.com/msp/tlscacerts
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${PWD}/organizations/peerOrganizations/org1.example.com/msp/tlscacerts/ca.crt

    mkdir ${PWD}/organizations/peerOrganizations/org1.example.com/tlsca
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${PWD}/organizations/peerOrganizations/org1.example.com/tlsca/tlsca.org1.example.com-cert.pem

    mkdir ${PWD}/organizations/peerOrganizations/org1.example.com/ca
    cp ${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp/cacerts/* ${PWD}/organizations/peerOrganizations/org1.example.com/ca/ca.org1.example.com-cert.pem
done
