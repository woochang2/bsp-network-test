#!/usr/bin/bash
peers=(bsp-server-1:7051 bsp-auditor-1:7151 bsp-auditor-2:7251 bsp-auditor-3:7351 bps-auditor-4:7451)
binDir="/home/jyr/go/src/github.com/hyperledger/fabric/speculator/production/fabric-samples/bin"
workingDir="/home/jyr/go/src/github.com/hyperledger/fabric/speculator/production/fabric-samples/test-network/"

export PATH=${binDir}:${PATH}

createOrg1() {
    echo
    echo "Enroll the CA admin"
    echo
    export FABRIC_CA_CLIENT_HOME=${workingDir}/organizations/peerOrganizations/org1.example.com/

    # mkdir -p ${FABRIC_CA_CLI}/organizations/peerOrganizations/org1.example.com/
    mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/

    #  rm -rf $FABRIC_CA_CLIENT_HOME/fabric-ca-client-config.yaml
    #  rm -rf $FABRIC_CA_CLIENT_HOME/msp

    set -x
    fabric-ca-client enroll -u https://admin:adminpw@localhost:7054 --caname ca-org1 --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

  echo 'NodeOUs:
  Enable: true
  ClientOUIdentifier:
    Certificate: cacerts/localhost-7054-ca-org1.pem
    OrganizationalUnitIdentifier: client
  PeerOUIdentifier:
    Certificate: cacerts/localhost-7054-ca-org1.pem
    OrganizationalUnitIdentifier: peer
  AdminOUIdentifier:
    Certificate: cacerts/localhost-7054-ca-org1.pem
    OrganizationalUnitIdentifier: admin
  OrdererOUIdentifier:
    Certificate: cacerts/localhost-7054-ca-org1.pem
    OrganizationalUnitIdentifier: orderer' > ${workingDir}/organizations/peerOrganizations/org1.example.com/msp/config.yaml

    echo

    # Register peers
    for (( i = 0; i < ${#peers[@]}; i++ )); do
        #statements
        idx=$(($i))
        echo "Register peer$idx with secret peer\"$idx\"pw"
        echo
        set -x
        fabric-ca-client register --caname ca-org1 --id.name peer$idx --id.secret peer${idx}pw --id.type peer --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
        set +x
    done

    echo
    echo "Register user"
    echo
    set -x
    fabric-ca-client register --caname ca-org1 --id.name user1 --id.secret user1pw --id.type client --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

    echo
    echo "Register the org admin"
    echo
    set -x
    fabric-ca-client register --caname ca-org1 --id.name org1admin --id.secret org1adminpw --id.type admin --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

    mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/peers

    i=$((0))
    for (( i = 0; i < ${#peers[@]}; i++ )); do
        #statements
        idx=$(($i))
        # idx=$(($i+1))
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

    echo
    echo "## Generate the user msp"
    echo
    set -x
    fabric-ca-client enroll -u https://user1:user1pw@localhost:7054 --caname ca-org1 -M ${workingDir}/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

    mkdir -p ${workingDir}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com

    echo
    echo "## Generate the org admin msp"
    echo
    set -x
    fabric-ca-client enroll -u https://org1admin:org1adminpw@localhost:7054 --caname ca-org1 -M ${workingDir}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp --tls.certfiles ${workingDir}/organizations/fabric-ca/org1/tls-cert.pem
    set +x

    cp ${workingDir}/organizations/peerOrganizations/org1.example.com/msp/config.yaml ${workingDir}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/config.yaml
}


createOrg2() {

  echo
	echo "Enroll the CA admin"
  echo
	mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/

	export FABRIC_CA_CLIENT_HOME=${workingDir}/organizations/peerOrganizations/org2.example.com/
#  rm -rf $FABRIC_CA_CLIENT_HOME/fabric-ca-client-config.yaml
#  rm -rf $FABRIC_CA_CLIENT_HOME/msp

  set -x
  fabric-ca-client enroll -u https://admin:adminpw@localhost:8054 --caname ca-org2 --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  echo 'NodeOUs:
  Enable: true
  ClientOUIdentifier:
    Certificate: cacerts/localhost-8054-ca-org2.pem
    OrganizationalUnitIdentifier: client
  PeerOUIdentifier:
    Certificate: cacerts/localhost-8054-ca-org2.pem
    OrganizationalUnitIdentifier: peer
  AdminOUIdentifier:
    Certificate: cacerts/localhost-8054-ca-org2.pem
    OrganizationalUnitIdentifier: admin
  OrdererOUIdentifier:
    Certificate: cacerts/localhost-8054-ca-org2.pem
    OrganizationalUnitIdentifier: orderer' > ${workingDir}/organizations/peerOrganizations/org2.example.com/msp/config.yaml

  echo
	echo "Register peer0"
  echo
  set -x
	fabric-ca-client register --caname ca-org2 --id.name peer0 --id.secret peer0pw --id.type peer --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  echo
  echo "Register user"
  echo
  set -x
  fabric-ca-client register --caname ca-org2 --id.name user1 --id.secret user1pw --id.type client --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  echo
  echo "Register the org admin"
  echo
  set -x
  fabric-ca-client register --caname ca-org2 --id.name org2admin --id.secret org2adminpw --id.type admin --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

	mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/peers
  mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com

  echo
  echo "## Generate the peer0 msp"
  echo
  set -x
	fabric-ca-client enroll -u https://peer0:peer0pw@localhost:8054 --caname ca-org2 -M ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/msp --csr.hosts peer0.org2.example.com --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/msp/config.yaml ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/msp/config.yaml

  echo
  echo "## Generate the peer0-tls certificates"
  echo
  set -x
  fabric-ca-client enroll -u https://peer0:peer0pw@localhost:8054 --caname ca-org2 -M ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls --enrollment.profile tls --csr.hosts peer0.org2.example.com --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x


  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/signcerts/* ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/server.crt
  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/keystore/* ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/server.key

  mkdir ${workingDir}/organizations/peerOrganizations/org2.example.com/msp/tlscacerts
  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org2.example.com/msp/tlscacerts/ca.crt

  mkdir ${workingDir}/organizations/peerOrganizations/org2.example.com/tlsca
  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/tlscacerts/* ${workingDir}/organizations/peerOrganizations/org2.example.com/tlsca/tlsca.org2.example.com-cert.pem

  mkdir ${workingDir}/organizations/peerOrganizations/org2.example.com/ca
  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/msp/cacerts/* ${workingDir}/organizations/peerOrganizations/org2.example.com/ca/ca.org2.example.com-cert.pem

  mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/users
  mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/users/User1@org2.example.com

  echo
  echo "## Generate the user msp"
  echo
  set -x
	fabric-ca-client enroll -u https://user1:user1pw@localhost:8054 --caname ca-org2 -M ${workingDir}/organizations/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  mkdir -p ${workingDir}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com

  echo
  echo "## Generate the org admin msp"
  echo
  set -x
	fabric-ca-client enroll -u https://org2admin:org2adminpw@localhost:8054 --caname ca-org2 -M ${workingDir}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp --tls.certfiles ${workingDir}/organizations/fabric-ca/org2/tls-cert.pem
  set +x

  cp ${workingDir}/organizations/peerOrganizations/org2.example.com/msp/config.yaml ${workingDir}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp/config.yaml
}

createOrderer() {
    echo
    echo "Enroll the CA admin"
    echo
    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com

    export FABRIC_CA_CLIENT_HOME=${workingDir}/organizations/ordererOrganizations/example.com
    #  rm -rf $FABRIC_CA_CLIENT_HOME/fabric-ca-client-config.yaml
    #  rm -rf $FABRIC_CA_CLIENT_HOME/msp

    set -x
    fabric-ca-client enroll -u https://admin:adminpw@localhost:9054 --caname ca-orderer --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem
    set +x

    echo 'NodeOUs:
    Enable: true
    ClientOUIdentifier:
    Certificate: cacerts/localhost-9054-ca-orderer.pem
    OrganizationalUnitIdentifier: client
    PeerOUIdentifier:
    Certificate: cacerts/localhost-9054-ca-orderer.pem
    OrganizationalUnitIdentifier: peer
    AdminOUIdentifier:
    Certificate: cacerts/localhost-9054-ca-orderer.pem
    OrganizationalUnitIdentifier: admin
    OrdererOUIdentifier:
    Certificate: cacerts/localhost-9054-ca-orderer.pem
    OrganizationalUnitIdentifier: orderer' > ${workingDir}/organizations/ordererOrganizations/example.com/msp/config.yaml


    echo
    echo "Register orderer"
    echo
    set -x
    fabric-ca-client register --caname ca-orderer --id.name orderer --id.secret ordererpw --id.type orderer --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem
    set +x

    echo
    echo "Register the orderer admin"
    echo
    set -x
    fabric-ca-client register --caname ca-orderer --id.name ordererAdmin --id.secret ordererAdminpw --id.type admin --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem
    set +x

    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com/orderers
    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com/orderers/example.com

    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com

    echo
    echo "## Generate the orderer msp"
    echo
    set -x
    fabric-ca-client enroll -u https://orderer:ordererpw@localhost:9054 --caname ca-orderer -M ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp --csr.hosts orderer.example.com  --csr.hosts localhost --csr.hosts bsp-server-1 --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem

    set +x

    cp ${workingDir}/organizations/ordererOrganizations/example.com/msp/config.yaml ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/config.yaml

    echo
    echo "## Generate the orderer-tls certificates"
    echo
    set -x
    fabric-ca-client enroll -u https://orderer:ordererpw@localhost:9054 --caname ca-orderer -M ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls --enrollment.profile tls --csr.hosts orderer.example.com --csr.hosts localhost --csr.hosts bsp-server-1 --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem
    set +x

    cp ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/tlscacerts/* ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/ca.crt
    cp ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/signcerts/* ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/server.crt
    cp ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/keystore/* ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/server.key

    mkdir ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts
    cp ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/tlscacerts/* ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

    mkdir ${workingDir}/organizations/ordererOrganizations/example.com/msp/tlscacerts
    cp ${workingDir}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/tls/tlscacerts/* ${workingDir}/organizations/ordererOrganizations/example.com/msp/tlscacerts/tlsca.example.com-cert.pem

    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com/users
    mkdir -p ${workingDir}/organizations/ordererOrganizations/example.com/users/Admin@example.com

    echo
    echo "## Generate the admin msp"
    echo
    set -x
    fabric-ca-client enroll -u https://ordererAdmin:ordererAdminpw@localhost:9054 --caname ca-orderer -M ${workingDir}/organizations/ordererOrganizations/example.com/users/Admin@example.com/msp --tls.certfiles ${workingDir}/organizations/fabric-ca/ordererOrg/tls-cert.pem
    set +x

    cp ${workingDir}/organizations/ordererOrganizations/example.com/msp/config.yaml ${workingDir}/organizations/ordererOrganizations/example.com/users/Admin@example.com/msp/config.yaml
}

createConsortium() {
  which configtxgen
  export FABRIC_CFG_PATH=${workingDir}/configtx
  if [ "$?" -ne 0 ]; then
    echo "configtxgen tool not found. exiting"
    exit 1
  fi

  echo "#########  Generating Orderer Genesis block ##############"

  # Note: For some unknown reason (at least for now) the block file can't be
  # named orderer.genesis.block or the orderer will fail to launch!
  set -x
  configtxgen -profile TwoOrgsOrdererGenesis -channelID system-channel -outputBlock ${workingDir}/system-genesis-block/genesis.block
  res=$?
  set +x
  if [ $res -ne 0 ]; then
    echo "Failed to generate orderer genesis block..."
    exit 1
  fi
}


# follow this order, correctly
createOrderer
createOrg1
createOrg2
createConsortium


sudo chown $USER ${workingDir}/organizations -R


