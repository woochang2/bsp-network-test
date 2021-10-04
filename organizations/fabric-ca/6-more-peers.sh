#!/usr/bin/bash
peers=(bsp-server-1:7051 bsp-auditor-1:7151 bsp-auditor-2:7251 bsp-auditor-3:7351 bps-auditor-4:7451)
binDir="/home/jyr/go/src/github.com/hyperledger/fabric/speculator/production/fabric-samples/bin"
workingDir="/home/jyr/go/src/github.com/hyperledger/fabric/speculator/production/fabric-samples/test-network/"

export PATH=${binDir}:${PATH}

AddMorePeers() {
    echo
    echo "Enroll the CA admin"
    echo
    export FABRIC_CA_CLIENT_HOME=${workingDir}/organizations/peerOrganizations/org1.example.com/

    set -x
    fabric-ca-client enroll -u https://admin:adminpw@localhost:7054 --caname ca-org1 --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

    peerStartId=5
    peerEndId=13
    # Register peers
    for (( i = ${peerStartId}; i < ${peerEndId}; i++ )); do
        #statements
        idx=$(($i))
        echo "Register peer$idx with secret peer\"$idx\"pw"
        echo
        set -x
        fabric-ca-client register --caname ca-org1 --id.name peer$idx --id.secret peer${idx}pw --id.type peer --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
        set +x
    done

    i=$((0))
    for (( i = ${peerStartId}; i < ${peerEndId}; i++ )); do
        idx=$(($i))
        mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer${idx}.org1.example.com
        echo
        echo "## Generate the peer$idx msp"
        echo
        set -x
        fabric-ca-client enroll -u https://peer$idx:peer${idx}pw@localhost:7054 --caname ca-org1 -M ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp --csr.hosts peer$idx.org1.example.com --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem --csr.names O=Org1,OU=admin
        set +x

        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/msp/config.yaml ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp/config.yaml

        echo
        echo "## Generate the peer$idx-tls certificates"
        echo
        set -x
        fabric-ca-client enroll -u https://peer$idx:peer${idx}pw@localhost:7054 --caname ca-org1 -M ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls --enrollment.profile tls --csr.hosts peer$idx.org1.example.com --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem --csr.names O=Org1,OU=admin
        set +x


        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/ca.crt
        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/signcerts/* ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/server.crt
        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/keystore/* ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/server.key

        mkdir ${workingDir}/organizations/peerOrganizations/org1.example.com/msp/tlscacerts
        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org1.example.com/msp/tlscacerts/ca.crt

        mkdir ${workingDir}/organizations/peerOrganizations/org1.example.com/tlsca
        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org1.example.com/tlsca/tlsca.org1.example.com-cert.pem

        mkdir ${workingDir}/organizations/peerOrganizations/org1.example.com/ca
        cp ${workingDir}/organizations/peerOrganizations/org1.example.com/peers/peer$idx.org1.example.com/msp/cacerts/* ${workingDir}/organizations/peerOrganizations/org1.example.com/ca/ca.org1.example.com-cert.pem
    done

    mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/users
    mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com
}






# follow this order, correctly
AddMorePeers

# sudo chown $USER ${workingDir}/organizations -R


