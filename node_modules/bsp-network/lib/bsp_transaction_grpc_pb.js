// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bsp_transaction_pb = require('./bsp_transaction_pb.js');

function serialize_bsp_transaction_ActiveExecutors(arg) {
  if (!(arg instanceof bsp_transaction_pb.ActiveExecutors)) {
    throw new Error('Expected argument of type bsp_transaction.ActiveExecutors');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ActiveExecutors(buffer_arg) {
  return bsp_transaction_pb.ActiveExecutors.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_ActiveExecutorsResp(arg) {
  if (!(arg instanceof bsp_transaction_pb.ActiveExecutorsResp)) {
    throw new Error('Expected argument of type bsp_transaction.ActiveExecutorsResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ActiveExecutorsResp(buffer_arg) {
  return bsp_transaction_pb.ActiveExecutorsResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_AggregatorResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.AggregatorResponse)) {
    throw new Error('Expected argument of type bsp_transaction.AggregatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_AggregatorResponse(buffer_arg) {
  return bsp_transaction_pb.AggregatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_AggregatorSubscribeRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.AggregatorSubscribeRequest)) {
    throw new Error('Expected argument of type bsp_transaction.AggregatorSubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_AggregatorSubscribeRequest(buffer_arg) {
  return bsp_transaction_pb.AggregatorSubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_CommitEventRequestByClientID(arg) {
  if (!(arg instanceof bsp_transaction_pb.CommitEventRequestByClientID)) {
    throw new Error('Expected argument of type bsp_transaction.CommitEventRequestByClientID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_CommitEventRequestByClientID(buffer_arg) {
  return bsp_transaction_pb.CommitEventRequestByClientID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_DeliverRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.DeliverRequest)) {
    throw new Error('Expected argument of type bsp_transaction.DeliverRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_DeliverRequest(buffer_arg) {
  return bsp_transaction_pb.DeliverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_ECBlock(arg) {
  if (!(arg instanceof bsp_transaction_pb.ECBlock)) {
    throw new Error('Expected argument of type bsp_transaction.ECBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ECBlock(buffer_arg) {
  return bsp_transaction_pb.ECBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_HelloRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.HelloRequest)) {
    throw new Error('Expected argument of type bsp_transaction.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_HelloRequest(buffer_arg) {
  return bsp_transaction_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_HelloResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.HelloResponse)) {
    throw new Error('Expected argument of type bsp_transaction.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_HelloResponse(buffer_arg) {
  return bsp_transaction_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_MCBlock(arg) {
  if (!(arg instanceof bsp_transaction_pb.MCBlock)) {
    throw new Error('Expected argument of type bsp_transaction.MCBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_MCBlock(buffer_arg) {
  return bsp_transaction_pb.MCBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_MCResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.MCResponse)) {
    throw new Error('Expected argument of type bsp_transaction.MCResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_MCResponse(buffer_arg) {
  return bsp_transaction_pb.MCResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_MigrateRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.MigrateRequest)) {
    throw new Error('Expected argument of type bsp_transaction.MigrateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_MigrateRequest(buffer_arg) {
  return bsp_transaction_pb.MigrateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_MigrateResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.MigrateResponse)) {
    throw new Error('Expected argument of type bsp_transaction.MigrateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_MigrateResponse(buffer_arg) {
  return bsp_transaction_pb.MigrateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_Proposal(arg) {
  if (!(arg instanceof bsp_transaction_pb.Proposal)) {
    throw new Error('Expected argument of type bsp_transaction.Proposal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_Proposal(buffer_arg) {
  return bsp_transaction_pb.Proposal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_ProposalBatch(arg) {
  if (!(arg instanceof bsp_transaction_pb.ProposalBatch)) {
    throw new Error('Expected argument of type bsp_transaction.ProposalBatch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ProposalBatch(buffer_arg) {
  return bsp_transaction_pb.ProposalBatch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_ProposalResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.ProposalResponse)) {
    throw new Error('Expected argument of type bsp_transaction.ProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ProposalResponse(buffer_arg) {
  return bsp_transaction_pb.ProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_ProposalResponseBatch(arg) {
  if (!(arg instanceof bsp_transaction_pb.ProposalResponseBatch)) {
    throw new Error('Expected argument of type bsp_transaction.ProposalResponseBatch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_ProposalResponseBatch(buffer_arg) {
  return bsp_transaction_pb.ProposalResponseBatch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_QueryRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.QueryRequest)) {
    throw new Error('Expected argument of type bsp_transaction.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_QueryRequest(buffer_arg) {
  return bsp_transaction_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_QueryResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.QueryResponse)) {
    throw new Error('Expected argument of type bsp_transaction.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_QueryResponse(buffer_arg) {
  return bsp_transaction_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_TxEvent(arg) {
  if (!(arg instanceof bsp_transaction_pb.TxEvent)) {
    throw new Error('Expected argument of type bsp_transaction.TxEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_TxEvent(buffer_arg) {
  return bsp_transaction_pb.TxEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_WaitForEventRequest(arg) {
  if (!(arg instanceof bsp_transaction_pb.WaitForEventRequest)) {
    throw new Error('Expected argument of type bsp_transaction.WaitForEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_WaitForEventRequest(buffer_arg) {
  return bsp_transaction_pb.WaitForEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_WaitForEventResponse(arg) {
  if (!(arg instanceof bsp_transaction_pb.WaitForEventResponse)) {
    throw new Error('Expected argument of type bsp_transaction.WaitForEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_WaitForEventResponse(buffer_arg) {
  return bsp_transaction_pb.WaitForEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bsp_transaction_WorkerMessage(arg) {
  if (!(arg instanceof bsp_transaction_pb.WorkerMessage)) {
    throw new Error('Expected argument of type bsp_transaction.WorkerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bsp_transaction_WorkerMessage(buffer_arg) {
  return bsp_transaction_pb.WorkerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Defines communication interface of BSP blockchain nodes, including BSP Orderer, BSP Executor, BSP Auditor
// For dev-only purpose, those interfaces are not separated for now.
var CommitNotifierService = exports.CommitNotifierService = {
  // auditor
subscribeTxCommitEventByClientID: {
    path: '/bsp_transaction.CommitNotifier/SubscribeTxCommitEventByClientID',
    requestStream: false,
    responseStream: true,
    requestType: bsp_transaction_pb.CommitEventRequestByClientID,
    responseType: bsp_transaction_pb.TxEvent,
    requestSerialize: serialize_bsp_transaction_CommitEventRequestByClientID,
    requestDeserialize: deserialize_bsp_transaction_CommitEventRequestByClientID,
    responseSerialize: serialize_bsp_transaction_TxEvent,
    responseDeserialize: deserialize_bsp_transaction_TxEvent,
  },
  migrateState: {
    path: '/bsp_transaction.CommitNotifier/MigrateState',
    requestStream: true,
    responseStream: false,
    requestType: bsp_transaction_pb.MigrateRequest,
    responseType: bsp_transaction_pb.MigrateResponse,
    requestSerialize: serialize_bsp_transaction_MigrateRequest,
    requestDeserialize: deserialize_bsp_transaction_MigrateRequest,
    responseSerialize: serialize_bsp_transaction_MigrateResponse,
    responseDeserialize: deserialize_bsp_transaction_MigrateResponse,
  },
  // orderer
deliver: {
    path: '/bsp_transaction.CommitNotifier/Deliver',
    requestStream: false,
    responseStream: true,
    requestType: bsp_transaction_pb.DeliverRequest,
    responseType: bsp_transaction_pb.ECBlock,
    requestSerialize: serialize_bsp_transaction_DeliverRequest,
    requestDeserialize: deserialize_bsp_transaction_DeliverRequest,
    responseSerialize: serialize_bsp_transaction_ECBlock,
    responseDeserialize: deserialize_bsp_transaction_ECBlock,
  },
  migrateBlocks: {
    path: '/bsp_transaction.CommitNotifier/MigrateBlocks',
    requestStream: true,
    responseStream: false,
    requestType: bsp_transaction_pb.MigrateRequest,
    responseType: bsp_transaction_pb.MigrateResponse,
    requestSerialize: serialize_bsp_transaction_MigrateRequest,
    requestDeserialize: deserialize_bsp_transaction_MigrateRequest,
    responseSerialize: serialize_bsp_transaction_MigrateResponse,
    responseDeserialize: deserialize_bsp_transaction_MigrateResponse,
  },
  // executor
processMCBlock: {
    path: '/bsp_transaction.CommitNotifier/ProcessMCBlock',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.MCBlock,
    responseType: bsp_transaction_pb.MCResponse,
    requestSerialize: serialize_bsp_transaction_MCBlock,
    requestDeserialize: deserialize_bsp_transaction_MCBlock,
    responseSerialize: serialize_bsp_transaction_MCResponse,
    responseDeserialize: deserialize_bsp_transaction_MCResponse,
  },
  updateActiveExecutors: {
    path: '/bsp_transaction.CommitNotifier/UpdateActiveExecutors',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.ActiveExecutors,
    responseType: bsp_transaction_pb.ActiveExecutorsResp,
    requestSerialize: serialize_bsp_transaction_ActiveExecutors,
    requestDeserialize: deserialize_bsp_transaction_ActiveExecutors,
    responseSerialize: serialize_bsp_transaction_ActiveExecutorsResp,
    responseDeserialize: deserialize_bsp_transaction_ActiveExecutorsResp,
  },
  execute: {
    path: '/bsp_transaction.CommitNotifier/Execute',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.Proposal,
    responseType: bsp_transaction_pb.ProposalResponse,
    requestSerialize: serialize_bsp_transaction_Proposal,
    requestDeserialize: deserialize_bsp_transaction_Proposal,
    responseSerialize: serialize_bsp_transaction_ProposalResponse,
    responseDeserialize: deserialize_bsp_transaction_ProposalResponse,
  },
  executeBatch: {
    path: '/bsp_transaction.CommitNotifier/ExecuteBatch',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.ProposalBatch,
    responseType: bsp_transaction_pb.ProposalResponseBatch,
    requestSerialize: serialize_bsp_transaction_ProposalBatch,
    requestDeserialize: deserialize_bsp_transaction_ProposalBatch,
    responseSerialize: serialize_bsp_transaction_ProposalResponseBatch,
    responseDeserialize: deserialize_bsp_transaction_ProposalResponseBatch,
  },
  ping: {
    path: '/bsp_transaction.CommitNotifier/Ping',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.HelloRequest,
    responseType: bsp_transaction_pb.HelloResponse,
    requestSerialize: serialize_bsp_transaction_HelloRequest,
    requestDeserialize: deserialize_bsp_transaction_HelloRequest,
    responseSerialize: serialize_bsp_transaction_HelloResponse,
    responseDeserialize: deserialize_bsp_transaction_HelloResponse,
  },
};

exports.CommitNotifierClient = grpc.makeGenericClientConstructor(CommitNotifierService);
var QueryExecutorService = exports.QueryExecutorService = {
  query: {
    path: '/bsp_transaction.QueryExecutor/Query',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.QueryRequest,
    responseType: bsp_transaction_pb.QueryResponse,
    requestSerialize: serialize_bsp_transaction_QueryRequest,
    requestDeserialize: deserialize_bsp_transaction_QueryRequest,
    responseSerialize: serialize_bsp_transaction_QueryResponse,
    responseDeserialize: deserialize_bsp_transaction_QueryResponse,
  },
};

exports.QueryExecutorClient = grpc.makeGenericClientConstructor(QueryExecutorService);
var AggregatorService = exports.AggregatorService = {
  registerClientWithPolicy: {
    path: '/bsp_transaction.Aggregator/RegisterClientWithPolicy',
    requestStream: false,
    responseStream: true,
    requestType: bsp_transaction_pb.AggregatorSubscribeRequest,
    responseType: bsp_transaction_pb.AggregatorResponse,
    requestSerialize: serialize_bsp_transaction_AggregatorSubscribeRequest,
    requestDeserialize: deserialize_bsp_transaction_AggregatorSubscribeRequest,
    responseSerialize: serialize_bsp_transaction_AggregatorResponse,
    responseDeserialize: deserialize_bsp_transaction_AggregatorResponse,
  },
  processProposal: {
    path: '/bsp_transaction.Aggregator/ProcessProposal',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.Proposal,
    responseType: bsp_transaction_pb.ProposalResponse,
    requestSerialize: serialize_bsp_transaction_Proposal,
    requestDeserialize: deserialize_bsp_transaction_Proposal,
    responseSerialize: serialize_bsp_transaction_ProposalResponse,
    responseDeserialize: deserialize_bsp_transaction_ProposalResponse,
  },
  waitForEvent: {
    path: '/bsp_transaction.Aggregator/WaitForEvent',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.WaitForEventRequest,
    responseType: bsp_transaction_pb.WaitForEventResponse,
    requestSerialize: serialize_bsp_transaction_WaitForEventRequest,
    requestDeserialize: deserialize_bsp_transaction_WaitForEventRequest,
    responseSerialize: serialize_bsp_transaction_WaitForEventResponse,
    responseDeserialize: deserialize_bsp_transaction_WaitForEventResponse,
  },
  startWorkload: {
    path: '/bsp_transaction.Aggregator/StartWorkload',
    requestStream: false,
    responseStream: false,
    requestType: bsp_transaction_pb.WorkerMessage,
    responseType: bsp_transaction_pb.WorkerMessage,
    requestSerialize: serialize_bsp_transaction_WorkerMessage,
    requestDeserialize: deserialize_bsp_transaction_WorkerMessage,
    responseSerialize: serialize_bsp_transaction_WorkerMessage,
    responseDeserialize: deserialize_bsp_transaction_WorkerMessage,
  },
};

exports.AggregatorClient = grpc.makeGenericClientConstructor(AggregatorService);
