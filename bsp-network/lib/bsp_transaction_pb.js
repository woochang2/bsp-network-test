// source: bsp_transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bsp_transaction.ActiveExecutors', null, global);
goog.exportSymbol('proto.bsp_transaction.ActiveExecutorsResp', null, global);
goog.exportSymbol('proto.bsp_transaction.AggregatorResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.AggregatorSubscribeRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.AuditTransaction', null, global);
goog.exportSymbol('proto.bsp_transaction.AuditTransactionExtension', null, global);
goog.exportSymbol('proto.bsp_transaction.AuditTransactionPayload', null, global);
goog.exportSymbol('proto.bsp_transaction.AuditType', null, global);
goog.exportSymbol('proto.bsp_transaction.BFTEvent', null, global);
goog.exportSymbol('proto.bsp_transaction.BFTEventByTx', null, global);
goog.exportSymbol('proto.bsp_transaction.BspTransaction', null, global);
goog.exportSymbol('proto.bsp_transaction.BspTransactionType', null, global);
goog.exportSymbol('proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering', null, global);
goog.exportSymbol('proto.bsp_transaction.BuildParameterOfIndexBasedOrdering', null, global);
goog.exportSymbol('proto.bsp_transaction.ChangeTriggerCode', null, global);
goog.exportSymbol('proto.bsp_transaction.ChangeTriggerEvent', null, global);
goog.exportSymbol('proto.bsp_transaction.CommitEventReplyType', null, global);
goog.exportSymbol('proto.bsp_transaction.CommitEventRequestByClientID', null, global);
goog.exportSymbol('proto.bsp_transaction.CommitEventResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.ConsensusState', null, global);
goog.exportSymbol('proto.bsp_transaction.ConsensusState.Level', null, global);
goog.exportSymbol('proto.bsp_transaction.ConsensusState.Result', null, global);
goog.exportSymbol('proto.bsp_transaction.DeliverRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.ECBlock', null, global);
goog.exportSymbol('proto.bsp_transaction.ECHeader', null, global);
goog.exportSymbol('proto.bsp_transaction.EventUnit', null, global);
goog.exportSymbol('proto.bsp_transaction.HeartbeatPayload', null, global);
goog.exportSymbol('proto.bsp_transaction.HeartbeatTransaction', null, global);
goog.exportSymbol('proto.bsp_transaction.HelloRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.HelloResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.InitializeRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.InterTxResult', null, global);
goog.exportSymbol('proto.bsp_transaction.KVRead', null, global);
goog.exportSymbol('proto.bsp_transaction.KVWrite', null, global);
goog.exportSymbol('proto.bsp_transaction.MCBlock', null, global);
goog.exportSymbol('proto.bsp_transaction.MCBuildParameter', null, global);
goog.exportSymbol('proto.bsp_transaction.MCHeader', null, global);
goog.exportSymbol('proto.bsp_transaction.MCResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.MigrateRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.MigrateRequestPayload', null, global);
goog.exportSymbol('proto.bsp_transaction.MigrateRequestStatePayload', null, global);
goog.exportSymbol('proto.bsp_transaction.MigrateResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.OrderingMethod', null, global);
goog.exportSymbol('proto.bsp_transaction.Policy', null, global);
goog.exportSymbol('proto.bsp_transaction.Proposal', null, global);
goog.exportSymbol('proto.bsp_transaction.ProposalBatch', null, global);
goog.exportSymbol('proto.bsp_transaction.ProposalPayload', null, global);
goog.exportSymbol('proto.bsp_transaction.ProposalResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.ProposalResponseBatch', null, global);
goog.exportSymbol('proto.bsp_transaction.QueryRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.QueryResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.ReadPolicy', null, global);
goog.exportSymbol('proto.bsp_transaction.SignatureHeader', null, global);
goog.exportSymbol('proto.bsp_transaction.StateBatch', null, global);
goog.exportSymbol('proto.bsp_transaction.TSAEvent', null, global);
goog.exportSymbol('proto.bsp_transaction.TransactionCommitEvent', null, global);
goog.exportSymbol('proto.bsp_transaction.TxEvent', null, global);
goog.exportSymbol('proto.bsp_transaction.TxEventPayload', null, global);
goog.exportSymbol('proto.bsp_transaction.TxInput', null, global);
goog.exportSymbol('proto.bsp_transaction.TxMetadata', null, global);
goog.exportSymbol('proto.bsp_transaction.TxOutput', null, global);
goog.exportSymbol('proto.bsp_transaction.Version', null, global);
goog.exportSymbol('proto.bsp_transaction.VersionMap', null, global);
goog.exportSymbol('proto.bsp_transaction.VersionedValue', null, global);
goog.exportSymbol('proto.bsp_transaction.WaitForEventRequest', null, global);
goog.exportSymbol('proto.bsp_transaction.WaitForEventResponse', null, global);
goog.exportSymbol('proto.bsp_transaction.WorkerMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.Version = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.Version.displayName = 'proto.bsp_transaction.Version';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.VersionedValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.VersionedValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.VersionedValue.displayName = 'proto.bsp_transaction.VersionedValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.StateBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.StateBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.StateBatch.displayName = 'proto.bsp_transaction.StateBatch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.KVRead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.KVRead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.KVRead.displayName = 'proto.bsp_transaction.KVRead';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.KVWrite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.KVWrite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.KVWrite.displayName = 'proto.bsp_transaction.KVWrite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TxInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.TxInput.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.TxInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TxInput.displayName = 'proto.bsp_transaction.TxInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.VersionMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.VersionMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.VersionMap.displayName = 'proto.bsp_transaction.VersionMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TxOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.TxOutput.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.TxOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TxOutput.displayName = 'proto.bsp_transaction.TxOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ChangeTriggerEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ChangeTriggerEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ChangeTriggerEvent.displayName = 'proto.bsp_transaction.ChangeTriggerEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.BspTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.BspTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.BspTransaction.displayName = 'proto.bsp_transaction.BspTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TxMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.TxMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TxMetadata.displayName = 'proto.bsp_transaction.TxMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.CommitEventRequestByClientID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.CommitEventRequestByClientID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.CommitEventRequestByClientID.displayName = 'proto.bsp_transaction.CommitEventRequestByClientID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TxEventPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.TxEventPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TxEventPayload.displayName = 'proto.bsp_transaction.TxEventPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TxEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.TxEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TxEvent.displayName = 'proto.bsp_transaction.TxEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TransactionCommitEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.TransactionCommitEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TransactionCommitEvent.displayName = 'proto.bsp_transaction.TransactionCommitEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.BFTEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.BFTEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.BFTEvent.displayName = 'proto.bsp_transaction.BFTEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.BFTEventByTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.BFTEventByTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.BFTEventByTx.displayName = 'proto.bsp_transaction.BFTEventByTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.TSAEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.TSAEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.TSAEvent.displayName = 'proto.bsp_transaction.TSAEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.CommitEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.CommitEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.CommitEventResponse.displayName = 'proto.bsp_transaction.CommitEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.Proposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.Proposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.Proposal.displayName = 'proto.bsp_transaction.Proposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ProposalBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.ProposalBatch.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.ProposalBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ProposalBatch.displayName = 'proto.bsp_transaction.ProposalBatch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ProposalResponseBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.ProposalResponseBatch.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.ProposalResponseBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ProposalResponseBatch.displayName = 'proto.bsp_transaction.ProposalResponseBatch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ProposalPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.ProposalPayload.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.ProposalPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ProposalPayload.displayName = 'proto.bsp_transaction.ProposalPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.SignatureHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.SignatureHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.SignatureHeader.displayName = 'proto.bsp_transaction.SignatureHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ProposalResponse.displayName = 'proto.bsp_transaction.ProposalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.InitializeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.InitializeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.InitializeRequest.displayName = 'proto.bsp_transaction.InitializeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.HelloRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.HelloRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.HelloRequest.displayName = 'proto.bsp_transaction.HelloRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.HelloResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.HelloResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.HelloResponse.displayName = 'proto.bsp_transaction.HelloResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.AuditTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.AuditTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.AuditTransaction.displayName = 'proto.bsp_transaction.AuditTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.AuditTransactionPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.AuditTransactionPayload.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.AuditTransactionPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.AuditTransactionPayload.displayName = 'proto.bsp_transaction.AuditTransactionPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.AuditTransactionExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.AuditTransactionExtension.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.AuditTransactionExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.AuditTransactionExtension.displayName = 'proto.bsp_transaction.AuditTransactionExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MCBuildParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MCBuildParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MCBuildParameter.displayName = 'proto.bsp_transaction.MCBuildParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.BuildParameterOfIndexBasedOrdering, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.displayName = 'proto.bsp_transaction.BuildParameterOfIndexBasedOrdering';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.displayName = 'proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ConsensusState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ConsensusState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ConsensusState.displayName = 'proto.bsp_transaction.ConsensusState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.InterTxResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.InterTxResult.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.InterTxResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.InterTxResult.displayName = 'proto.bsp_transaction.InterTxResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MCHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.MCHeader.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.MCHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MCHeader.displayName = 'proto.bsp_transaction.MCHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MCBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.MCBlock.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.MCBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MCBlock.displayName = 'proto.bsp_transaction.MCBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ECHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ECHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ECHeader.displayName = 'proto.bsp_transaction.ECHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ECBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ECBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ECBlock.displayName = 'proto.bsp_transaction.ECBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MCResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MCResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MCResponse.displayName = 'proto.bsp_transaction.MCResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.DeliverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.DeliverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.DeliverRequest.displayName = 'proto.bsp_transaction.DeliverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MigrateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MigrateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MigrateRequest.displayName = 'proto.bsp_transaction.MigrateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MigrateRequestPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MigrateRequestPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MigrateRequestPayload.displayName = 'proto.bsp_transaction.MigrateRequestPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MigrateRequestStatePayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MigrateRequestStatePayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MigrateRequestStatePayload.displayName = 'proto.bsp_transaction.MigrateRequestStatePayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.MigrateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.MigrateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.MigrateResponse.displayName = 'proto.bsp_transaction.MigrateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.HeartbeatPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.HeartbeatPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.HeartbeatPayload.displayName = 'proto.bsp_transaction.HeartbeatPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.HeartbeatTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.HeartbeatTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.HeartbeatTransaction.displayName = 'proto.bsp_transaction.HeartbeatTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.Policy.displayName = 'proto.bsp_transaction.Policy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.AggregatorSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.AggregatorSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.AggregatorSubscribeRequest.displayName = 'proto.bsp_transaction.AggregatorSubscribeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.AggregatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.AggregatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.AggregatorResponse.displayName = 'proto.bsp_transaction.AggregatorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.WorkerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.WorkerMessage.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.WorkerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.WorkerMessage.displayName = 'proto.bsp_transaction.WorkerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.WaitForEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.WaitForEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.WaitForEventRequest.displayName = 'proto.bsp_transaction.WaitForEventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.WaitForEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.WaitForEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.WaitForEventResponse.displayName = 'proto.bsp_transaction.WaitForEventResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ActiveExecutors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp_transaction.ActiveExecutors.repeatedFields_, null);
};
goog.inherits(proto.bsp_transaction.ActiveExecutors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ActiveExecutors.displayName = 'proto.bsp_transaction.ActiveExecutors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ActiveExecutorsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ActiveExecutorsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ActiveExecutorsResp.displayName = 'proto.bsp_transaction.ActiveExecutorsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.ReadPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.ReadPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.ReadPolicy.displayName = 'proto.bsp_transaction.ReadPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.QueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.QueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.QueryRequest.displayName = 'proto.bsp_transaction.QueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp_transaction.QueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp_transaction.QueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp_transaction.QueryResponse.displayName = 'proto.bsp_transaction.QueryResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.Version.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.Version.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.Version} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Version.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocknumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txoffset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.Version}
 */
proto.bsp_transaction.Version.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.Version;
  return proto.bsp_transaction.Version.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.Version}
 */
proto.bsp_transaction.Version.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocknumber(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxoffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Version.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.Version.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.Version} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Version.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocknumber();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTxoffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 BlockNumber = 1;
 * @return {number}
 */
proto.bsp_transaction.Version.prototype.getBlocknumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.Version} returns this
 */
proto.bsp_transaction.Version.prototype.setBlocknumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 TxOffset = 2;
 * @return {number}
 */
proto.bsp_transaction.Version.prototype.getTxoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.Version} returns this
 */
proto.bsp_transaction.Version.prototype.setTxoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.VersionedValue.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.VersionedValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.VersionedValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.VersionedValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64(),
    version: (f = msg.getVersion()) && proto.bsp_transaction.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.VersionedValue}
 */
proto.bsp_transaction.VersionedValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.VersionedValue;
  return proto.bsp_transaction.VersionedValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.VersionedValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.VersionedValue}
 */
proto.bsp_transaction.VersionedValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 2:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.VersionedValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.VersionedValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.VersionedValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.VersionedValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.VersionedValue.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.bsp_transaction.VersionedValue.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes Value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.VersionedValue.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.VersionedValue} returns this
 */
proto.bsp_transaction.VersionedValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Version Version = 2;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.VersionedValue.prototype.getVersion = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 2));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.VersionedValue} returns this
*/
proto.bsp_transaction.VersionedValue.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.VersionedValue} returns this
 */
proto.bsp_transaction.VersionedValue.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.VersionedValue.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.StateBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.StateBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.StateBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.StateBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vv: (f = msg.getVv()) && proto.bsp_transaction.VersionedValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.StateBatch}
 */
proto.bsp_transaction.StateBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.StateBatch;
  return proto.bsp_transaction.StateBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.StateBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.StateBatch}
 */
proto.bsp_transaction.StateBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.bsp_transaction.VersionedValue;
      reader.readMessage(value,proto.bsp_transaction.VersionedValue.deserializeBinaryFromReader);
      msg.setVv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.StateBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.StateBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.StateBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.StateBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVv();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bsp_transaction.VersionedValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Key = 1;
 * @return {string}
 */
proto.bsp_transaction.StateBatch.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.StateBatch} returns this
 */
proto.bsp_transaction.StateBatch.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional VersionedValue VV = 2;
 * @return {?proto.bsp_transaction.VersionedValue}
 */
proto.bsp_transaction.StateBatch.prototype.getVv = function() {
  return /** @type{?proto.bsp_transaction.VersionedValue} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.VersionedValue, 2));
};


/**
 * @param {?proto.bsp_transaction.VersionedValue|undefined} value
 * @return {!proto.bsp_transaction.StateBatch} returns this
*/
proto.bsp_transaction.StateBatch.prototype.setVv = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.StateBatch} returns this
 */
proto.bsp_transaction.StateBatch.prototype.clearVv = function() {
  return this.setVv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.StateBatch.prototype.hasVv = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.KVRead.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.KVRead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.KVRead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.KVRead.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64(),
    version: (f = msg.getVersion()) && proto.bsp_transaction.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.KVRead}
 */
proto.bsp_transaction.KVRead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.KVRead;
  return proto.bsp_transaction.KVRead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.KVRead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.KVRead}
 */
proto.bsp_transaction.KVRead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 3:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.KVRead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.KVRead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.KVRead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.KVRead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.bsp_transaction.KVRead.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.KVRead} returns this
 */
proto.bsp_transaction.KVRead.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.KVRead.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.bsp_transaction.KVRead.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.KVRead.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.KVRead} returns this
 */
proto.bsp_transaction.KVRead.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Version version = 3;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.KVRead.prototype.getVersion = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 3));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.KVRead} returns this
*/
proto.bsp_transaction.KVRead.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.KVRead} returns this
 */
proto.bsp_transaction.KVRead.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.KVRead.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.KVWrite.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.KVWrite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.KVWrite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.KVWrite.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.KVWrite}
 */
proto.bsp_transaction.KVWrite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.KVWrite;
  return proto.bsp_transaction.KVWrite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.KVWrite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.KVWrite}
 */
proto.bsp_transaction.KVWrite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.KVWrite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.KVWrite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.KVWrite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.KVWrite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.bsp_transaction.KVWrite.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.KVWrite} returns this
 */
proto.bsp_transaction.KVWrite.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.KVWrite.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.bsp_transaction.KVWrite.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.KVWrite.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.KVWrite} returns this
 */
proto.bsp_transaction.KVWrite.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.TxInput.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TxInput.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TxInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TxInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    chaincodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chaincodeVersion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    chaincodeArgsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    readsList: jspb.Message.toObjectList(msg.getReadsList(),
    proto.bsp_transaction.KVRead.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TxInput}
 */
proto.bsp_transaction.TxInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TxInput;
  return proto.bsp_transaction.TxInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TxInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TxInput}
 */
proto.bsp_transaction.TxInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addChaincodeArgs(value);
      break;
    case 4:
      var value = new proto.bsp_transaction.KVRead;
      reader.readMessage(value,proto.bsp_transaction.KVRead.deserializeBinaryFromReader);
      msg.addReads(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TxInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TxInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChaincodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChaincodeVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChaincodeArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getReadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bsp_transaction.KVRead.serializeBinaryToWriter
    );
  }
};


/**
 * optional string chaincode_id = 1;
 * @return {string}
 */
proto.bsp_transaction.TxInput.prototype.getChaincodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.setChaincodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chaincode_version = 2;
 * @return {string}
 */
proto.bsp_transaction.TxInput.prototype.getChaincodeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.setChaincodeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string chaincode_args = 3;
 * @return {!Array<string>}
 */
proto.bsp_transaction.TxInput.prototype.getChaincodeArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.setChaincodeArgsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.addChaincodeArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.clearChaincodeArgsList = function() {
  return this.setChaincodeArgsList([]);
};


/**
 * repeated KVRead reads = 4;
 * @return {!Array<!proto.bsp_transaction.KVRead>}
 */
proto.bsp_transaction.TxInput.prototype.getReadsList = function() {
  return /** @type{!Array<!proto.bsp_transaction.KVRead>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.KVRead, 4));
};


/**
 * @param {!Array<!proto.bsp_transaction.KVRead>} value
 * @return {!proto.bsp_transaction.TxInput} returns this
*/
proto.bsp_transaction.TxInput.prototype.setReadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bsp_transaction.KVRead=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.KVRead}
 */
proto.bsp_transaction.TxInput.prototype.addReads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bsp_transaction.KVRead, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.TxInput} returns this
 */
proto.bsp_transaction.TxInput.prototype.clearReadsList = function() {
  return this.setReadsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.VersionMap.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.VersionMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.VersionMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.VersionMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    edgechainversion: (f = msg.getEdgechainversion()) && proto.bsp_transaction.Version.toObject(includeInstance, f),
    mainchainversion: (f = msg.getMainchainversion()) && proto.bsp_transaction.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.VersionMap}
 */
proto.bsp_transaction.VersionMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.VersionMap;
  return proto.bsp_transaction.VersionMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.VersionMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.VersionMap}
 */
proto.bsp_transaction.VersionMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setEdgechainversion(value);
      break;
    case 3:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setMainchainversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.VersionMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.VersionMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.VersionMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.VersionMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEdgechainversion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
  f = message.getMainchainversion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Key = 1;
 * @return {string}
 */
proto.bsp_transaction.VersionMap.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.VersionMap} returns this
 */
proto.bsp_transaction.VersionMap.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Version EdgechainVersion = 2;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.VersionMap.prototype.getEdgechainversion = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 2));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.VersionMap} returns this
*/
proto.bsp_transaction.VersionMap.prototype.setEdgechainversion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.VersionMap} returns this
 */
proto.bsp_transaction.VersionMap.prototype.clearEdgechainversion = function() {
  return this.setEdgechainversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.VersionMap.prototype.hasEdgechainversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Version MainchainVersion = 3;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.VersionMap.prototype.getMainchainversion = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 3));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.VersionMap} returns this
*/
proto.bsp_transaction.VersionMap.prototype.setMainchainversion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.VersionMap} returns this
 */
proto.bsp_transaction.VersionMap.prototype.clearMainchainversion = function() {
  return this.setMainchainversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.VersionMap.prototype.hasMainchainversion = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.TxOutput.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TxOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TxOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TxOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    writesList: jspb.Message.toObjectList(msg.getWritesList(),
    proto.bsp_transaction.KVWrite.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TxOutput}
 */
proto.bsp_transaction.TxOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TxOutput;
  return proto.bsp_transaction.TxOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TxOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TxOutput}
 */
proto.bsp_transaction.TxOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.KVWrite;
      reader.readMessage(value,proto.bsp_transaction.KVWrite.deserializeBinaryFromReader);
      msg.addWrites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TxOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TxOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWritesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bsp_transaction.KVWrite.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KVWrite writes = 1;
 * @return {!Array<!proto.bsp_transaction.KVWrite>}
 */
proto.bsp_transaction.TxOutput.prototype.getWritesList = function() {
  return /** @type{!Array<!proto.bsp_transaction.KVWrite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.KVWrite, 1));
};


/**
 * @param {!Array<!proto.bsp_transaction.KVWrite>} value
 * @return {!proto.bsp_transaction.TxOutput} returns this
*/
proto.bsp_transaction.TxOutput.prototype.setWritesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bsp_transaction.KVWrite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.KVWrite}
 */
proto.bsp_transaction.TxOutput.prototype.addWrites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bsp_transaction.KVWrite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.TxOutput} returns this
 */
proto.bsp_transaction.TxOutput.prototype.clearWritesList = function() {
  return this.setWritesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ChangeTriggerEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ChangeTriggerEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ChangeTriggerEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64(),
    currviewnumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ChangeTriggerEvent}
 */
proto.bsp_transaction.ChangeTriggerEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ChangeTriggerEvent;
  return proto.bsp_transaction.ChangeTriggerEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ChangeTriggerEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ChangeTriggerEvent}
 */
proto.bsp_transaction.ChangeTriggerEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.ChangeTriggerCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrviewnumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ChangeTriggerEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ChangeTriggerEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ChangeTriggerEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCurrviewnumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional ChangeTriggerCode Code = 1;
 * @return {!proto.bsp_transaction.ChangeTriggerCode}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.getCode = function() {
  return /** @type {!proto.bsp_transaction.ChangeTriggerCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.ChangeTriggerCode} value
 * @return {!proto.bsp_transaction.ChangeTriggerEvent} returns this
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes Payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ChangeTriggerEvent} returns this
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 CurrViewNumber = 3;
 * @return {number}
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.getCurrviewnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.ChangeTriggerEvent} returns this
 */
proto.bsp_transaction.ChangeTriggerEvent.prototype.setCurrviewnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.BspTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.BspTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.BspTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BspTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 3, 0),
    input: (f = msg.getInput()) && proto.bsp_transaction.TxInput.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && proto.bsp_transaction.TxOutput.toObject(includeInstance, f),
    signature: msg.getSignature_asB64(),
    proposal: msg.getProposal_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 10, 0),
    region: jspb.Message.getFieldWithDefault(msg, 11, ""),
    chainid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    txmetadata: msg.getTxmetadata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.BspTransaction}
 */
proto.bsp_transaction.BspTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.BspTransaction;
  return proto.bsp_transaction.BspTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.BspTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.BspTransaction}
 */
proto.bsp_transaction.BspTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeq(value);
      break;
    case 4:
      var value = new proto.bsp_transaction.TxInput;
      reader.readMessage(value,proto.bsp_transaction.TxInput.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 5:
      var value = new proto.bsp_transaction.TxOutput;
      reader.readMessage(value,proto.bsp_transaction.TxOutput.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposal(value);
      break;
    case 10:
      var value = /** @type {!proto.bsp_transaction.BspTransactionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxmetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BspTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.BspTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.BspTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BspTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bsp_transaction.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bsp_transaction.TxOutput.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getProposal_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTxmetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      20,
      f
    );
  }
};


/**
 * optional string ClientId = 1;
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TxId = 2;
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 Seq = 3;
 * @return {number}
 */
proto.bsp_transaction.BspTransaction.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TxInput Input = 4;
 * @return {?proto.bsp_transaction.TxInput}
 */
proto.bsp_transaction.BspTransaction.prototype.getInput = function() {
  return /** @type{?proto.bsp_transaction.TxInput} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.TxInput, 4));
};


/**
 * @param {?proto.bsp_transaction.TxInput|undefined} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
*/
proto.bsp_transaction.BspTransaction.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.BspTransaction.prototype.hasInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TxOutput Output = 5;
 * @return {?proto.bsp_transaction.TxOutput}
 */
proto.bsp_transaction.BspTransaction.prototype.getOutput = function() {
  return /** @type{?proto.bsp_transaction.TxOutput} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.TxOutput, 5));
};


/**
 * @param {?proto.bsp_transaction.TxOutput|undefined} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
*/
proto.bsp_transaction.BspTransaction.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.BspTransaction.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes Signature = 6;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.BspTransaction.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes Signature = 6;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BspTransaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes Proposal = 7;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.BspTransaction.prototype.getProposal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes Proposal = 7;
 * This is a type-conversion wrapper around `getProposal()`
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getProposal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposal()));
};


/**
 * optional bytes Proposal = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposal()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BspTransaction.prototype.getProposal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setProposal = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional BspTransactionType type = 10;
 * @return {!proto.bsp_transaction.BspTransactionType}
 */
proto.bsp_transaction.BspTransaction.prototype.getType = function() {
  return /** @type {!proto.bsp_transaction.BspTransactionType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.bsp_transaction.BspTransactionType} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string Region = 11;
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string ChainID = 12;
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bytes TxMetadata = 20;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.BspTransaction.prototype.getTxmetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes TxMetadata = 20;
 * This is a type-conversion wrapper around `getTxmetadata()`
 * @return {string}
 */
proto.bsp_transaction.BspTransaction.prototype.getTxmetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxmetadata()));
};


/**
 * optional bytes TxMetadata = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxmetadata()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BspTransaction.prototype.getTxmetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxmetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.BspTransaction} returns this
 */
proto.bsp_transaction.BspTransaction.prototype.setTxmetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TxMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TxMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TxMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    metricsubmittedtime: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    metricmainchainarrivaltime: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    metriccommittime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TxMetadata}
 */
proto.bsp_transaction.TxMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TxMetadata;
  return proto.bsp_transaction.TxMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TxMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TxMetadata}
 */
proto.bsp_transaction.TxMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMetricsubmittedtime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMetricmainchainarrivaltime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMetriccommittime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TxMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TxMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetricsubmittedtime();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMetricmainchainarrivaltime();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMetriccommittime();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float MetricSubmittedTime = 1;
 * @return {number}
 */
proto.bsp_transaction.TxMetadata.prototype.getMetricsubmittedtime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TxMetadata} returns this
 */
proto.bsp_transaction.TxMetadata.prototype.setMetricsubmittedtime = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float MetricMainchainArrivalTime = 2;
 * @return {number}
 */
proto.bsp_transaction.TxMetadata.prototype.getMetricmainchainarrivaltime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TxMetadata} returns this
 */
proto.bsp_transaction.TxMetadata.prototype.setMetricmainchainarrivaltime = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float MetricCommitTime = 3;
 * @return {number}
 */
proto.bsp_transaction.TxMetadata.prototype.getMetriccommittime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TxMetadata} returns this
 */
proto.bsp_transaction.TxMetadata.prototype.setMetriccommittime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.CommitEventRequestByClientID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.CommitEventRequestByClientID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.CommitEventRequestByClientID.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signature: msg.getSignature_asB64(),
    peerId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID}
 */
proto.bsp_transaction.CommitEventRequestByClientID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.CommitEventRequestByClientID;
  return proto.bsp_transaction.CommitEventRequestByClientID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.CommitEventRequestByClientID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID}
 */
proto.bsp_transaction.CommitEventRequestByClientID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.CommitEventRequestByClientID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.CommitEventRequestByClientID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.CommitEventRequestByClientID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string header = 1;
 * @return {string}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID} returns this
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.setHeader = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID} returns this
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID} returns this
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string peer_id = 4;
 * @return {string}
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.CommitEventRequestByClientID} returns this
 */
proto.bsp_transaction.CommitEventRequestByClientID.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TxEventPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TxEventPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TxEventPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxEventPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    state: (f = msg.getState()) && proto.bsp_transaction.ConsensusState.toObject(includeInstance, f),
    activebspaddress: jspb.Message.getFieldWithDefault(msg, 6, ""),
    extension: msg.getExtension_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TxEventPayload}
 */
proto.bsp_transaction.TxEventPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TxEventPayload;
  return proto.bsp_transaction.TxEventPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TxEventPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TxEventPayload}
 */
proto.bsp_transaction.TxEventPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 5:
      var value = new proto.bsp_transaction.ConsensusState;
      reader.readMessage(value,proto.bsp_transaction.ConsensusState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setActivebspaddress(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEventPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TxEventPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TxEventPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxEventPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bsp_transaction.ConsensusState.serializeBinaryToWriter
    );
  }
  f = message.getActivebspaddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * optional string ClientID = 1;
 * @return {string}
 */
proto.bsp_transaction.TxEventPayload.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TxId = 2;
 * @return {string}
 */
proto.bsp_transaction.TxEventPayload.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 Number = 3;
 * @return {number}
 */
proto.bsp_transaction.TxEventPayload.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 Offset = 4;
 * @return {number}
 */
proto.bsp_transaction.TxEventPayload.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional ConsensusState State = 5;
 * @return {?proto.bsp_transaction.ConsensusState}
 */
proto.bsp_transaction.TxEventPayload.prototype.getState = function() {
  return /** @type{?proto.bsp_transaction.ConsensusState} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.ConsensusState, 5));
};


/**
 * @param {?proto.bsp_transaction.ConsensusState|undefined} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
*/
proto.bsp_transaction.TxEventPayload.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.TxEventPayload.prototype.hasState = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ActiveBSPAddress = 6;
 * @return {string}
 */
proto.bsp_transaction.TxEventPayload.prototype.getActivebspaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setActivebspaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bytes Extension = 10;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TxEventPayload.prototype.getExtension$ = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes Extension = 10;
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {string}
 */
proto.bsp_transaction.TxEventPayload.prototype.getExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtension$()));
};


/**
 * optional bytes Extension = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEventPayload.prototype.getExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtension$()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TxEventPayload} returns this
 */
proto.bsp_transaction.TxEventPayload.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TxEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TxEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TxEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureheader: msg.getSignatureheader_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TxEvent}
 */
proto.bsp_transaction.TxEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TxEvent;
  return proto.bsp_transaction.TxEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TxEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TxEvent}
 */
proto.bsp_transaction.TxEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureheader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TxEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TxEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TxEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureheader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes Payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TxEvent.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.TxEvent.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEvent.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TxEvent} returns this
 */
proto.bsp_transaction.TxEvent.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TxEvent.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.TxEvent.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEvent.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TxEvent} returns this
 */
proto.bsp_transaction.TxEvent.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes SignatureHeader = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TxEvent.prototype.getSignatureheader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes SignatureHeader = 3;
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {string}
 */
proto.bsp_transaction.TxEvent.prototype.getSignatureheader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureheader()));
};


/**
 * optional bytes SignatureHeader = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TxEvent.prototype.getSignatureheader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureheader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TxEvent} returns this
 */
proto.bsp_transaction.TxEvent.prototype.setSignatureheader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TransactionCommitEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TransactionCommitEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TransactionCommitEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    indexInBlock: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validationCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    chaincodeId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    chaincodeVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    peerId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    number: jspb.Message.getFieldWithDefault(msg, 8, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TransactionCommitEvent}
 */
proto.bsp_transaction.TransactionCommitEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TransactionCommitEvent;
  return proto.bsp_transaction.TransactionCommitEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TransactionCommitEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TransactionCommitEvent}
 */
proto.bsp_transaction.TransactionCommitEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexInBlock(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValidationCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumber(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TransactionCommitEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TransactionCommitEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TransactionCommitEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndexInBlock();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidationCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getChaincodeId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChaincodeVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 index_in_block = 2;
 * @return {number}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getIndexInBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setIndexInBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string txid = 3;
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 validation_code = 4;
 * @return {number}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getValidationCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setValidationCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string chaincode_id = 5;
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getChaincodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setChaincodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string chaincode_version = 6;
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getChaincodeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setChaincodeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string peer_id = 7;
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 number = 8;
 * @return {number}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bytes signature = 9;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes signature = 9;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TransactionCommitEvent} returns this
 */
proto.bsp_transaction.TransactionCommitEvent.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.BFTEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.BFTEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.BFTEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BFTEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    prepareHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    commitHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    latestHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    peerId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.BFTEvent}
 */
proto.bsp_transaction.BFTEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.BFTEvent;
  return proto.bsp_transaction.BFTEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.BFTEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.BFTEvent}
 */
proto.bsp_transaction.BFTEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrepareHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommitHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatestHeight(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BFTEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.BFTEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.BFTEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BFTEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrepareHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCommitHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLatestHeight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional uint64 prepare_height = 2;
 * @return {number}
 */
proto.bsp_transaction.BFTEvent.prototype.getPrepareHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.BFTEvent} returns this
 */
proto.bsp_transaction.BFTEvent.prototype.setPrepareHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 commit_height = 3;
 * @return {number}
 */
proto.bsp_transaction.BFTEvent.prototype.getCommitHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.BFTEvent} returns this
 */
proto.bsp_transaction.BFTEvent.prototype.setCommitHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 latest_height = 4;
 * @return {number}
 */
proto.bsp_transaction.BFTEvent.prototype.getLatestHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.BFTEvent} returns this
 */
proto.bsp_transaction.BFTEvent.prototype.setLatestHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string peer_id = 5;
 * @return {string}
 */
proto.bsp_transaction.BFTEvent.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BFTEvent} returns this
 */
proto.bsp_transaction.BFTEvent.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes signature = 6;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.BFTEvent.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes signature = 6;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.BFTEvent.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BFTEvent.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.BFTEvent} returns this
 */
proto.bsp_transaction.BFTEvent.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.BFTEventByTx.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.BFTEventByTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.BFTEventByTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BFTEventByTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    peerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.BFTEventByTx}
 */
proto.bsp_transaction.BFTEventByTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.BFTEventByTx;
  return proto.bsp_transaction.BFTEventByTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.BFTEventByTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.BFTEventByTx}
 */
proto.bsp_transaction.BFTEventByTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerId(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BFTEventByTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.BFTEventByTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.BFTEventByTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BFTEventByTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string txid = 1;
 * @return {string}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BFTEventByTx} returns this
 */
proto.bsp_transaction.BFTEventByTx.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BFTEventByTx} returns this
 */
proto.bsp_transaction.BFTEventByTx.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string peer_id = 3;
 * @return {string}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getPeerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BFTEventByTx} returns this
 */
proto.bsp_transaction.BFTEventByTx.prototype.setPeerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes signature = 4;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes signature = 4;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BFTEventByTx.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.BFTEventByTx} returns this
 */
proto.bsp_transaction.BFTEventByTx.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.TSAEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.TSAEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.TSAEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TSAEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    tsaIdentity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.TSAEvent}
 */
proto.bsp_transaction.TSAEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.TSAEvent;
  return proto.bsp_transaction.TSAEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.TSAEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.TSAEvent}
 */
proto.bsp_transaction.TSAEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTsaIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TSAEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.TSAEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.TSAEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.TSAEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTsaIdentity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string tsa_identity = 1;
 * @return {string}
 */
proto.bsp_transaction.TSAEvent.prototype.getTsaIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.TSAEvent} returns this
 */
proto.bsp_transaction.TSAEvent.prototype.setTsaIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 height = 2;
 * @return {number}
 */
proto.bsp_transaction.TSAEvent.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.TSAEvent} returns this
 */
proto.bsp_transaction.TSAEvent.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.TSAEvent.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.TSAEvent.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.TSAEvent.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.TSAEvent} returns this
 */
proto.bsp_transaction.TSAEvent.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.CommitEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.CommitEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.CommitEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.CommitEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    replyType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.CommitEventResponse}
 */
proto.bsp_transaction.CommitEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.CommitEventResponse;
  return proto.bsp_transaction.CommitEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.CommitEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.CommitEventResponse}
 */
proto.bsp_transaction.CommitEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.CommitEventReplyType} */ (reader.readEnum());
      msg.setReplyType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.CommitEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.CommitEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.CommitEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.CommitEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReplyType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional CommitEventReplyType reply_type = 1;
 * @return {!proto.bsp_transaction.CommitEventReplyType}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getReplyType = function() {
  return /** @type {!proto.bsp_transaction.CommitEventReplyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.CommitEventReplyType} value
 * @return {!proto.bsp_transaction.CommitEventResponse} returns this
 */
proto.bsp_transaction.CommitEventResponse.prototype.setReplyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.CommitEventResponse} returns this
 */
proto.bsp_transaction.CommitEventResponse.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.CommitEventResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.CommitEventResponse} returns this
 */
proto.bsp_transaction.CommitEventResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.Proposal.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.Proposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.Proposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Proposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureheader: msg.getSignatureheader_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.Proposal}
 */
proto.bsp_transaction.Proposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.Proposal;
  return proto.bsp_transaction.Proposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.Proposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.Proposal}
 */
proto.bsp_transaction.Proposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureheader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Proposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.Proposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Proposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureheader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes Payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.Proposal.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.Proposal.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Proposal.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.Proposal} returns this
 */
proto.bsp_transaction.Proposal.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.Proposal.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.Proposal.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Proposal.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.Proposal} returns this
 */
proto.bsp_transaction.Proposal.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes SignatureHeader = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.Proposal.prototype.getSignatureheader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes SignatureHeader = 3;
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {string}
 */
proto.bsp_transaction.Proposal.prototype.getSignatureheader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureheader()));
};


/**
 * optional bytes SignatureHeader = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Proposal.prototype.getSignatureheader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureheader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.Proposal} returns this
 */
proto.bsp_transaction.Proposal.prototype.setSignatureheader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.ProposalBatch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ProposalBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ProposalBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ProposalBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchesList: jspb.Message.toObjectList(msg.getBatchesList(),
    proto.bsp_transaction.Proposal.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ProposalBatch}
 */
proto.bsp_transaction.ProposalBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ProposalBatch;
  return proto.bsp_transaction.ProposalBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ProposalBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ProposalBatch}
 */
proto.bsp_transaction.ProposalBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.Proposal;
      reader.readMessage(value,proto.bsp_transaction.Proposal.deserializeBinaryFromReader);
      msg.addBatches(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ProposalBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ProposalBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bsp_transaction.Proposal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Proposal Batches = 1;
 * @return {!Array<!proto.bsp_transaction.Proposal>}
 */
proto.bsp_transaction.ProposalBatch.prototype.getBatchesList = function() {
  return /** @type{!Array<!proto.bsp_transaction.Proposal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.Proposal, 1));
};


/**
 * @param {!Array<!proto.bsp_transaction.Proposal>} value
 * @return {!proto.bsp_transaction.ProposalBatch} returns this
*/
proto.bsp_transaction.ProposalBatch.prototype.setBatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bsp_transaction.Proposal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.Proposal}
 */
proto.bsp_transaction.ProposalBatch.prototype.addBatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bsp_transaction.Proposal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.ProposalBatch} returns this
 */
proto.bsp_transaction.ProposalBatch.prototype.clearBatchesList = function() {
  return this.setBatchesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.ProposalResponseBatch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ProposalResponseBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ProposalResponseBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ProposalResponseBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalResponseBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchesList: jspb.Message.toObjectList(msg.getBatchesList(),
    proto.bsp_transaction.ProposalResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ProposalResponseBatch}
 */
proto.bsp_transaction.ProposalResponseBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ProposalResponseBatch;
  return proto.bsp_transaction.ProposalResponseBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ProposalResponseBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ProposalResponseBatch}
 */
proto.bsp_transaction.ProposalResponseBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.ProposalResponse;
      reader.readMessage(value,proto.bsp_transaction.ProposalResponse.deserializeBinaryFromReader);
      msg.addBatches(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalResponseBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ProposalResponseBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ProposalResponseBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalResponseBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bsp_transaction.ProposalResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProposalResponse Batches = 1;
 * @return {!Array<!proto.bsp_transaction.ProposalResponse>}
 */
proto.bsp_transaction.ProposalResponseBatch.prototype.getBatchesList = function() {
  return /** @type{!Array<!proto.bsp_transaction.ProposalResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.ProposalResponse, 1));
};


/**
 * @param {!Array<!proto.bsp_transaction.ProposalResponse>} value
 * @return {!proto.bsp_transaction.ProposalResponseBatch} returns this
*/
proto.bsp_transaction.ProposalResponseBatch.prototype.setBatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bsp_transaction.ProposalResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ProposalResponse}
 */
proto.bsp_transaction.ProposalResponseBatch.prototype.addBatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bsp_transaction.ProposalResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.ProposalResponseBatch} returns this
 */
proto.bsp_transaction.ProposalResponseBatch.prototype.clearBatchesList = function() {
  return this.setBatchesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.ProposalPayload.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ProposalPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ProposalPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ProposalPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    chaincodeid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chaincodeargsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    extensionpaylod: msg.getExtensionpaylod_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ProposalPayload}
 */
proto.bsp_transaction.ProposalPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ProposalPayload;
  return proto.bsp_transaction.ProposalPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ProposalPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ProposalPayload}
 */
proto.bsp_transaction.ProposalPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addChaincodeargs(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtensionpaylod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ProposalPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ProposalPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChaincodeid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChaincodeargsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getExtensionpaylod_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string ClientId = 1;
 * @return {string}
 */
proto.bsp_transaction.ProposalPayload.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TxId = 2;
 * @return {string}
 */
proto.bsp_transaction.ProposalPayload.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ChaincodeId = 3;
 * @return {string}
 */
proto.bsp_transaction.ProposalPayload.prototype.getChaincodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.setChaincodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string ChaincodeArgs = 4;
 * @return {!Array<string>}
 */
proto.bsp_transaction.ProposalPayload.prototype.getChaincodeargsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.setChaincodeargsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.addChaincodeargs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.clearChaincodeargsList = function() {
  return this.setChaincodeargsList([]);
};


/**
 * optional bytes ExtensionPaylod = 5;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ProposalPayload.prototype.getExtensionpaylod = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes ExtensionPaylod = 5;
 * This is a type-conversion wrapper around `getExtensionpaylod()`
 * @return {string}
 */
proto.bsp_transaction.ProposalPayload.prototype.getExtensionpaylod_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtensionpaylod()));
};


/**
 * optional bytes ExtensionPaylod = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtensionpaylod()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalPayload.prototype.getExtensionpaylod_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtensionpaylod()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ProposalPayload} returns this
 */
proto.bsp_transaction.ProposalPayload.prototype.setExtensionpaylod = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.SignatureHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.SignatureHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.SignatureHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.SignatureHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    creator: msg.getCreator_asB64(),
    nonce: msg.getNonce_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.SignatureHeader}
 */
proto.bsp_transaction.SignatureHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.SignatureHeader;
  return proto.bsp_transaction.SignatureHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.SignatureHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.SignatureHeader}
 */
proto.bsp_transaction.SignatureHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCreator(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.SignatureHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.SignatureHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.SignatureHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.SignatureHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreator_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes creator = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.SignatureHeader.prototype.getCreator = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes creator = 1;
 * This is a type-conversion wrapper around `getCreator()`
 * @return {string}
 */
proto.bsp_transaction.SignatureHeader.prototype.getCreator_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCreator()));
};


/**
 * optional bytes creator = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCreator()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.SignatureHeader.prototype.getCreator_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCreator()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.SignatureHeader} returns this
 */
proto.bsp_transaction.SignatureHeader.prototype.setCreator = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes nonce = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.SignatureHeader.prototype.getNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes nonce = 2;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.bsp_transaction.SignatureHeader.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.SignatureHeader.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.SignatureHeader} returns this
 */
proto.bsp_transaction.SignatureHeader.prototype.setNonce = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureHeader: msg.getSignatureHeader_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ProposalResponse}
 */
proto.bsp_transaction.ProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ProposalResponse;
  return proto.bsp_transaction.ProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ProposalResponse}
 */
proto.bsp_transaction.ProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureHeader(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ProposalResponse.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.ProposalResponse.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalResponse.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ProposalResponse} returns this
 */
proto.bsp_transaction.ProposalResponse.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ProposalResponse} returns this
 */
proto.bsp_transaction.ProposalResponse.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes signature_header = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignatureHeader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature_header = 3;
 * This is a type-conversion wrapper around `getSignatureHeader()`
 * @return {string}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignatureHeader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureHeader()));
};


/**
 * optional bytes signature_header = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureHeader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ProposalResponse.prototype.getSignatureHeader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureHeader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ProposalResponse} returns this
 */
proto.bsp_transaction.ProposalResponse.prototype.setSignatureHeader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.bsp_transaction.ProposalResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ProposalResponse} returns this
 */
proto.bsp_transaction.ProposalResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.InitializeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.InitializeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.InitializeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.InitializeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.InitializeRequest}
 */
proto.bsp_transaction.InitializeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.InitializeRequest;
  return proto.bsp_transaction.InitializeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.InitializeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.InitializeRequest}
 */
proto.bsp_transaction.InitializeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.InitializeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.InitializeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.InitializeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.InitializeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.HelloRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.HelloRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.HelloRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HelloRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.HelloRequest}
 */
proto.bsp_transaction.HelloRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.HelloRequest;
  return proto.bsp_transaction.HelloRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.HelloRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.HelloRequest}
 */
proto.bsp_transaction.HelloRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HelloRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.HelloRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.HelloRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HelloRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.bsp_transaction.HelloRequest.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.HelloRequest} returns this
 */
proto.bsp_transaction.HelloRequest.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.HelloResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.HelloResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.HelloResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HelloResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.HelloResponse}
 */
proto.bsp_transaction.HelloResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.HelloResponse;
  return proto.bsp_transaction.HelloResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.HelloResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.HelloResponse}
 */
proto.bsp_transaction.HelloResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HelloResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.HelloResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.HelloResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HelloResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.bsp_transaction.HelloResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.HelloResponse} returns this
 */
proto.bsp_transaction.HelloResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.AuditTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.AuditTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.AuditTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureHeader: msg.getSignatureHeader_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.AuditTransaction}
 */
proto.bsp_transaction.AuditTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.AuditTransaction;
  return proto.bsp_transaction.AuditTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.AuditTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.AuditTransaction}
 */
proto.bsp_transaction.AuditTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.AuditTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.AuditTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransaction.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransaction.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransaction.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransaction} returns this
 */
proto.bsp_transaction.AuditTransaction.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransaction} returns this
 */
proto.bsp_transaction.AuditTransaction.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes signature_header = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignatureHeader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature_header = 3;
 * This is a type-conversion wrapper around `getSignatureHeader()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignatureHeader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureHeader()));
};


/**
 * optional bytes signature_header = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureHeader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransaction.prototype.getSignatureHeader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureHeader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransaction} returns this
 */
proto.bsp_transaction.AuditTransaction.prototype.setSignatureHeader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.AuditTransactionPayload.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.AuditTransactionPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.AuditTransactionPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransactionPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chainid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    regionid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    activeid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stanbyidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    number: jspb.Message.getFieldWithDefault(msg, 10, 0),
    hash: msg.getHash_asB64(),
    prevhash: msg.getPrevhash_asB64(),
    member: jspb.Message.getFieldWithDefault(msg, 13, ""),
    merkleroothash: msg.getMerkleroothash_asB64(),
    creatorsignature: msg.getCreatorsignature_asB64(),
    extension: msg.getExtension_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.AuditTransactionPayload}
 */
proto.bsp_transaction.AuditTransactionPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.AuditTransactionPayload;
  return proto.bsp_transaction.AuditTransactionPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.AuditTransactionPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.AuditTransactionPayload}
 */
proto.bsp_transaction.AuditTransactionPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.AuditType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActiveid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addStanbyids(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumber(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrevhash(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMember(value);
      break;
    case 14:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMerkleroothash(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCreatorsignature(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.AuditTransactionPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.AuditTransactionPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransactionPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegionid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActiveid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStanbyidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getPrevhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getMember();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMerkleroothash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      14,
      f
    );
  }
  f = message.getCreatorsignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      20,
      f
    );
  }
};


/**
 * optional AuditType type = 1;
 * @return {!proto.bsp_transaction.AuditType}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getType = function() {
  return /** @type {!proto.bsp_transaction.AuditType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.AuditType} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string ChainID = 2;
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string RegionID = 3;
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getRegionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setRegionid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ActiveID = 4;
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getActiveid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setActiveid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string StanbyIDs = 5;
 * @return {!Array<string>}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getStanbyidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setStanbyidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.addStanbyids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.clearStanbyidsList = function() {
  return this.setStanbyidsList([]);
};


/**
 * optional uint64 Number = 10;
 * @return {number}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bytes Hash = 11;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes Hash = 11;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes Hash = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 11, value);
};


/**
 * optional bytes PrevHash = 12;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getPrevhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes PrevHash = 12;
 * This is a type-conversion wrapper around `getPrevhash()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getPrevhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrevhash()));
};


/**
 * optional bytes PrevHash = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrevhash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getPrevhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrevhash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setPrevhash = function(value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};


/**
 * optional string Member = 13;
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getMember = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setMember = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bytes MerkleRootHash = 14;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getMerkleroothash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * optional bytes MerkleRootHash = 14;
 * This is a type-conversion wrapper around `getMerkleroothash()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getMerkleroothash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMerkleroothash()));
};


/**
 * optional bytes MerkleRootHash = 14;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMerkleroothash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getMerkleroothash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMerkleroothash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setMerkleroothash = function(value) {
  return jspb.Message.setProto3BytesField(this, 14, value);
};


/**
 * optional bytes CreatorSignature = 15;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getCreatorsignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes CreatorSignature = 15;
 * This is a type-conversion wrapper around `getCreatorsignature()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getCreatorsignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCreatorsignature()));
};


/**
 * optional bytes CreatorSignature = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCreatorsignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getCreatorsignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCreatorsignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setCreatorsignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional bytes extension = 20;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getExtension$ = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes extension = 20;
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {string}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtension$()));
};


/**
 * optional bytes extension = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.getExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtension$()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.AuditTransactionPayload} returns this
 */
proto.bsp_transaction.AuditTransactionPayload.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3BytesField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.AuditTransactionExtension.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.AuditTransactionExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.AuditTransactionExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransactionExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    intertxresultsList: jspb.Message.toObjectList(msg.getIntertxresultsList(),
    proto.bsp_transaction.InterTxResult.toObject, includeInstance),
    mcparameters: (f = msg.getMcparameters()) && proto.bsp_transaction.MCBuildParameter.toObject(includeInstance, f),
    mainchainheader: (f = msg.getMainchainheader()) && proto.bsp_transaction.MCHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.AuditTransactionExtension}
 */
proto.bsp_transaction.AuditTransactionExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.AuditTransactionExtension;
  return proto.bsp_transaction.AuditTransactionExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.AuditTransactionExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.AuditTransactionExtension}
 */
proto.bsp_transaction.AuditTransactionExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bsp_transaction.InterTxResult;
      reader.readMessage(value,proto.bsp_transaction.InterTxResult.deserializeBinaryFromReader);
      msg.addIntertxresults(value);
      break;
    case 4:
      var value = new proto.bsp_transaction.MCBuildParameter;
      reader.readMessage(value,proto.bsp_transaction.MCBuildParameter.deserializeBinaryFromReader);
      msg.setMcparameters(value);
      break;
    case 5:
      var value = new proto.bsp_transaction.MCHeader;
      reader.readMessage(value,proto.bsp_transaction.MCHeader.deserializeBinaryFromReader);
      msg.setMainchainheader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.AuditTransactionExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.AuditTransactionExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AuditTransactionExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntertxresultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bsp_transaction.InterTxResult.serializeBinaryToWriter
    );
  }
  f = message.getMcparameters();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bsp_transaction.MCBuildParameter.serializeBinaryToWriter
    );
  }
  f = message.getMainchainheader();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bsp_transaction.MCHeader.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InterTxResult interTxResults = 3;
 * @return {!Array<!proto.bsp_transaction.InterTxResult>}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.getIntertxresultsList = function() {
  return /** @type{!Array<!proto.bsp_transaction.InterTxResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.InterTxResult, 3));
};


/**
 * @param {!Array<!proto.bsp_transaction.InterTxResult>} value
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
*/
proto.bsp_transaction.AuditTransactionExtension.prototype.setIntertxresultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bsp_transaction.InterTxResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.InterTxResult}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.addIntertxresults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bsp_transaction.InterTxResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.clearIntertxresultsList = function() {
  return this.setIntertxresultsList([]);
};


/**
 * optional MCBuildParameter MCparameters = 4;
 * @return {?proto.bsp_transaction.MCBuildParameter}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.getMcparameters = function() {
  return /** @type{?proto.bsp_transaction.MCBuildParameter} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.MCBuildParameter, 4));
};


/**
 * @param {?proto.bsp_transaction.MCBuildParameter|undefined} value
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
*/
proto.bsp_transaction.AuditTransactionExtension.prototype.setMcparameters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.clearMcparameters = function() {
  return this.setMcparameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.hasMcparameters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MCHeader MainchainHeader = 5;
 * @return {?proto.bsp_transaction.MCHeader}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.getMainchainheader = function() {
  return /** @type{?proto.bsp_transaction.MCHeader} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.MCHeader, 5));
};


/**
 * @param {?proto.bsp_transaction.MCHeader|undefined} value
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
*/
proto.bsp_transaction.AuditTransactionExtension.prototype.setMainchainheader = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.AuditTransactionExtension} returns this
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.clearMainchainheader = function() {
  return this.setMainchainheader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.AuditTransactionExtension.prototype.hasMainchainheader = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MCBuildParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MCBuildParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MCBuildParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCBuildParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderingmethod: jspb.Message.getFieldWithDefault(msg, 1, 0),
    buildparameter: msg.getBuildparameter_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MCBuildParameter}
 */
proto.bsp_transaction.MCBuildParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MCBuildParameter;
  return proto.bsp_transaction.MCBuildParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MCBuildParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MCBuildParameter}
 */
proto.bsp_transaction.MCBuildParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.OrderingMethod} */ (reader.readEnum());
      msg.setOrderingmethod(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBuildparameter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCBuildParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MCBuildParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MCBuildParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCBuildParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderingmethod();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBuildparameter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional OrderingMethod OrderingMethod = 1;
 * @return {!proto.bsp_transaction.OrderingMethod}
 */
proto.bsp_transaction.MCBuildParameter.prototype.getOrderingmethod = function() {
  return /** @type {!proto.bsp_transaction.OrderingMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.OrderingMethod} value
 * @return {!proto.bsp_transaction.MCBuildParameter} returns this
 */
proto.bsp_transaction.MCBuildParameter.prototype.setOrderingmethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes BuildParameter = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MCBuildParameter.prototype.getBuildparameter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes BuildParameter = 2;
 * This is a type-conversion wrapper around `getBuildparameter()`
 * @return {string}
 */
proto.bsp_transaction.MCBuildParameter.prototype.getBuildparameter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBuildparameter()));
};


/**
 * optional bytes BuildParameter = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBuildparameter()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCBuildParameter.prototype.getBuildparameter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBuildparameter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MCBuildParameter} returns this
 */
proto.bsp_transaction.MCBuildParameter.prototype.setBuildparameter = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketsize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mctimeout: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.BuildParameterOfIndexBasedOrdering;
  return proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBucketsize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMctimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketsize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMctimeout();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 BucketSize = 1;
 * @return {number}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.getBucketsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering} returns this
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.setBucketsize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string MCTimeout = 3;
 * @return {string}
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.getMctimeout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BuildParameterOfIndexBasedOrdering} returns this
 */
proto.bsp_transaction.BuildParameterOfIndexBasedOrdering.prototype.setMctimeout = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.toObject = function(includeInstance, msg) {
  var f, obj = {
    reorderingmethod: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering}
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering;
  return proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering}
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReorderingmethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReorderingmethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ReOrderingMethod = 1;
 * @return {string}
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.prototype.getReorderingmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering} returns this
 */
proto.bsp_transaction.BuildParameterOfDependencyGraphBasedReOrdering.prototype.setReorderingmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ConsensusState.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ConsensusState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ConsensusState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ConsensusState.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ConsensusState}
 */
proto.bsp_transaction.ConsensusState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ConsensusState;
  return proto.bsp_transaction.ConsensusState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ConsensusState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ConsensusState}
 */
proto.bsp_transaction.ConsensusState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.ConsensusState.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {!proto.bsp_transaction.ConsensusState.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ConsensusState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ConsensusState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ConsensusState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ConsensusState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bsp_transaction.ConsensusState.Result = {
  COMMIT: 0,
  ABORT: 1
};

/**
 * @enum {number}
 */
proto.bsp_transaction.ConsensusState.Level = {
  EC_SPEC: 0,
  EC_ORDERED: 1,
  EC_PREPARED: 2,
  EC_COMMIT: 3,
  MC_ORDERED: 4,
  MC_COMMIT: 5,
  MC_PROGRESS: 6,
  TSA: 10,
  EC_VIEWCHANGETRIGGERED: 21,
  EC_VIEWCHANGEFINISHED: 22
};

/**
 * optional Level level = 1;
 * @return {!proto.bsp_transaction.ConsensusState.Level}
 */
proto.bsp_transaction.ConsensusState.prototype.getLevel = function() {
  return /** @type {!proto.bsp_transaction.ConsensusState.Level} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.ConsensusState.Level} value
 * @return {!proto.bsp_transaction.ConsensusState} returns this
 */
proto.bsp_transaction.ConsensusState.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Result result = 2;
 * @return {!proto.bsp_transaction.ConsensusState.Result}
 */
proto.bsp_transaction.ConsensusState.prototype.getResult = function() {
  return /** @type {!proto.bsp_transaction.ConsensusState.Result} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bsp_transaction.ConsensusState.Result} value
 * @return {!proto.bsp_transaction.ConsensusState} returns this
 */
proto.bsp_transaction.ConsensusState.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.InterTxResult.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.InterTxResult.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.InterTxResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.InterTxResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.InterTxResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.bsp_transaction.ConsensusState.toObject(includeInstance, f),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    readsList: jspb.Message.toObjectList(msg.getReadsList(),
    proto.bsp_transaction.KVRead.toObject, includeInstance),
    writesList: jspb.Message.toObjectList(msg.getWritesList(),
    proto.bsp_transaction.KVWrite.toObject, includeInstance),
    chainid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    regionid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    activeid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mcversion: (f = msg.getMcversion()) && proto.bsp_transaction.Version.toObject(includeInstance, f),
    metadata: msg.getMetadata_asB64(),
    echeight: (f = msg.getEcheight()) && proto.bsp_transaction.Version.toObject(includeInstance, f),
    clientid: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.InterTxResult}
 */
proto.bsp_transaction.InterTxResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.InterTxResult;
  return proto.bsp_transaction.InterTxResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.InterTxResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.InterTxResult}
 */
proto.bsp_transaction.InterTxResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.ConsensusState;
      reader.readMessage(value,proto.bsp_transaction.ConsensusState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = new proto.bsp_transaction.KVRead;
      reader.readMessage(value,proto.bsp_transaction.KVRead.deserializeBinaryFromReader);
      msg.addReads(value);
      break;
    case 4:
      var value = new proto.bsp_transaction.KVWrite;
      reader.readMessage(value,proto.bsp_transaction.KVWrite.deserializeBinaryFromReader);
      msg.addWrites(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActiveid(value);
      break;
    case 8:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setMcversion(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadata(value);
      break;
    case 10:
      var value = new proto.bsp_transaction.Version;
      reader.readMessage(value,proto.bsp_transaction.Version.deserializeBinaryFromReader);
      msg.setEcheight(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.InterTxResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.InterTxResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.InterTxResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.InterTxResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bsp_transaction.ConsensusState.serializeBinaryToWriter
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bsp_transaction.KVRead.serializeBinaryToWriter
    );
  }
  f = message.getWritesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bsp_transaction.KVWrite.serializeBinaryToWriter
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRegionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getActiveid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMcversion();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
  f = message.getMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getEcheight();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bsp_transaction.Version.serializeBinaryToWriter
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional ConsensusState State = 1;
 * @return {?proto.bsp_transaction.ConsensusState}
 */
proto.bsp_transaction.InterTxResult.prototype.getState = function() {
  return /** @type{?proto.bsp_transaction.ConsensusState} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.ConsensusState, 1));
};


/**
 * @param {?proto.bsp_transaction.ConsensusState|undefined} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
*/
proto.bsp_transaction.InterTxResult.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.InterTxResult.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TxID = 2;
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KVRead reads = 3;
 * @return {!Array<!proto.bsp_transaction.KVRead>}
 */
proto.bsp_transaction.InterTxResult.prototype.getReadsList = function() {
  return /** @type{!Array<!proto.bsp_transaction.KVRead>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.KVRead, 3));
};


/**
 * @param {!Array<!proto.bsp_transaction.KVRead>} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
*/
proto.bsp_transaction.InterTxResult.prototype.setReadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bsp_transaction.KVRead=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.KVRead}
 */
proto.bsp_transaction.InterTxResult.prototype.addReads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bsp_transaction.KVRead, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.clearReadsList = function() {
  return this.setReadsList([]);
};


/**
 * repeated KVWrite writes = 4;
 * @return {!Array<!proto.bsp_transaction.KVWrite>}
 */
proto.bsp_transaction.InterTxResult.prototype.getWritesList = function() {
  return /** @type{!Array<!proto.bsp_transaction.KVWrite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.KVWrite, 4));
};


/**
 * @param {!Array<!proto.bsp_transaction.KVWrite>} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
*/
proto.bsp_transaction.InterTxResult.prototype.setWritesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bsp_transaction.KVWrite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.KVWrite}
 */
proto.bsp_transaction.InterTxResult.prototype.addWrites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bsp_transaction.KVWrite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.clearWritesList = function() {
  return this.setWritesList([]);
};


/**
 * optional string ChainID = 5;
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string RegionID = 6;
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getRegionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setRegionid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string ActiveID = 7;
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getActiveid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setActiveid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Version MCVersion = 8;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.InterTxResult.prototype.getMcversion = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 8));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
*/
proto.bsp_transaction.InterTxResult.prototype.setMcversion = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.clearMcversion = function() {
  return this.setMcversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.InterTxResult.prototype.hasMcversion = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes metadata = 9;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.InterTxResult.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes metadata = 9;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadata()));
};


/**
 * optional bytes metadata = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.InterTxResult.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional Version ECHeight = 10;
 * @return {?proto.bsp_transaction.Version}
 */
proto.bsp_transaction.InterTxResult.prototype.getEcheight = function() {
  return /** @type{?proto.bsp_transaction.Version} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Version, 10));
};


/**
 * @param {?proto.bsp_transaction.Version|undefined} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
*/
proto.bsp_transaction.InterTxResult.prototype.setEcheight = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.clearEcheight = function() {
  return this.setEcheight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.InterTxResult.prototype.hasEcheight = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string ClientID = 11;
 * @return {string}
 */
proto.bsp_transaction.InterTxResult.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.InterTxResult} returns this
 */
proto.bsp_transaction.InterTxResult.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.MCHeader.repeatedFields_ = [7,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MCHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MCHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MCHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    round: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hash: msg.getHash_asB64(),
    prevhash: msg.getPrevhash_asB64(),
    merkleroothash: msg.getMerkleroothash_asB64(),
    mcbuildparameter: msg.getMcbuildparameter_asB64(),
    echeadersList: jspb.Message.toObjectList(msg.getEcheadersList(),
    proto.bsp_transaction.ECHeader.toObject, includeInstance),
    noncommitblockheadersList: jspb.Message.toObjectList(msg.getNoncommitblockheadersList(),
    proto.bsp_transaction.ECHeader.toObject, includeInstance),
    activegroupList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    standbygroupList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MCHeader}
 */
proto.bsp_transaction.MCHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MCHeader;
  return proto.bsp_transaction.MCHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MCHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MCHeader}
 */
proto.bsp_transaction.MCHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRound(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumber(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrevhash(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMerkleroothash(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMcbuildparameter(value);
      break;
    case 7:
      var value = new proto.bsp_transaction.ECHeader;
      reader.readMessage(value,proto.bsp_transaction.ECHeader.deserializeBinaryFromReader);
      msg.addEcheaders(value);
      break;
    case 8:
      var value = new proto.bsp_transaction.ECHeader;
      reader.readMessage(value,proto.bsp_transaction.ECHeader.deserializeBinaryFromReader);
      msg.addNoncommitblockheaders(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addActivegroup(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addStandbygroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MCHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MCHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRound();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPrevhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getMerkleroothash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getMcbuildparameter_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getEcheadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.bsp_transaction.ECHeader.serializeBinaryToWriter
    );
  }
  f = message.getNoncommitblockheadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bsp_transaction.ECHeader.serializeBinaryToWriter
    );
  }
  f = message.getActivegroupList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getStandbygroupList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional uint64 Round = 1;
 * @return {number}
 */
proto.bsp_transaction.MCHeader.prototype.getRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setRound = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 Number = 2;
 * @return {number}
 */
proto.bsp_transaction.MCHeader.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes Hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MCHeader.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Hash = 3;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.bsp_transaction.MCHeader.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes Hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCHeader.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes PrevHash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MCHeader.prototype.getPrevhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes PrevHash = 4;
 * This is a type-conversion wrapper around `getPrevhash()`
 * @return {string}
 */
proto.bsp_transaction.MCHeader.prototype.getPrevhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrevhash()));
};


/**
 * optional bytes PrevHash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrevhash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCHeader.prototype.getPrevhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrevhash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setPrevhash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes MerkleRootHash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MCHeader.prototype.getMerkleroothash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes MerkleRootHash = 5;
 * This is a type-conversion wrapper around `getMerkleroothash()`
 * @return {string}
 */
proto.bsp_transaction.MCHeader.prototype.getMerkleroothash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMerkleroothash()));
};


/**
 * optional bytes MerkleRootHash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMerkleroothash()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCHeader.prototype.getMerkleroothash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMerkleroothash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setMerkleroothash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes MCBuildParameter = 6;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MCHeader.prototype.getMcbuildparameter = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes MCBuildParameter = 6;
 * This is a type-conversion wrapper around `getMcbuildparameter()`
 * @return {string}
 */
proto.bsp_transaction.MCHeader.prototype.getMcbuildparameter_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMcbuildparameter()));
};


/**
 * optional bytes MCBuildParameter = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMcbuildparameter()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCHeader.prototype.getMcbuildparameter_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMcbuildparameter()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setMcbuildparameter = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * repeated ECHeader ECHeaders = 7;
 * @return {!Array<!proto.bsp_transaction.ECHeader>}
 */
proto.bsp_transaction.MCHeader.prototype.getEcheadersList = function() {
  return /** @type{!Array<!proto.bsp_transaction.ECHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.ECHeader, 7));
};


/**
 * @param {!Array<!proto.bsp_transaction.ECHeader>} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
*/
proto.bsp_transaction.MCHeader.prototype.setEcheadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bsp_transaction.ECHeader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ECHeader}
 */
proto.bsp_transaction.MCHeader.prototype.addEcheaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bsp_transaction.ECHeader, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.clearEcheadersList = function() {
  return this.setEcheadersList([]);
};


/**
 * repeated ECHeader NonCommitBlockHeaders = 8;
 * @return {!Array<!proto.bsp_transaction.ECHeader>}
 */
proto.bsp_transaction.MCHeader.prototype.getNoncommitblockheadersList = function() {
  return /** @type{!Array<!proto.bsp_transaction.ECHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.ECHeader, 8));
};


/**
 * @param {!Array<!proto.bsp_transaction.ECHeader>} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
*/
proto.bsp_transaction.MCHeader.prototype.setNoncommitblockheadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bsp_transaction.ECHeader=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ECHeader}
 */
proto.bsp_transaction.MCHeader.prototype.addNoncommitblockheaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bsp_transaction.ECHeader, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.clearNoncommitblockheadersList = function() {
  return this.setNoncommitblockheadersList([]);
};


/**
 * repeated string ActiveGroup = 9;
 * @return {!Array<string>}
 */
proto.bsp_transaction.MCHeader.prototype.getActivegroupList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setActivegroupList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.addActivegroup = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.clearActivegroupList = function() {
  return this.setActivegroupList([]);
};


/**
 * repeated string StandbyGroup = 10;
 * @return {!Array<string>}
 */
proto.bsp_transaction.MCHeader.prototype.getStandbygroupList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.setStandbygroupList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.addStandbygroup = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.MCHeader} returns this
 */
proto.bsp_transaction.MCHeader.prototype.clearStandbygroupList = function() {
  return this.setStandbygroupList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.MCBlock.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MCBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MCBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MCBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.bsp_transaction.MCHeader.toObject(includeInstance, f),
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.bsp_transaction.ECBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MCBlock}
 */
proto.bsp_transaction.MCBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MCBlock;
  return proto.bsp_transaction.MCBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MCBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MCBlock}
 */
proto.bsp_transaction.MCBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.MCHeader;
      reader.readMessage(value,proto.bsp_transaction.MCHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.bsp_transaction.ECBlock;
      reader.readMessage(value,proto.bsp_transaction.ECBlock.deserializeBinaryFromReader);
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MCBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MCBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bsp_transaction.MCHeader.serializeBinaryToWriter
    );
  }
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bsp_transaction.ECBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional MCHeader Header = 1;
 * @return {?proto.bsp_transaction.MCHeader}
 */
proto.bsp_transaction.MCBlock.prototype.getHeader = function() {
  return /** @type{?proto.bsp_transaction.MCHeader} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.MCHeader, 1));
};


/**
 * @param {?proto.bsp_transaction.MCHeader|undefined} value
 * @return {!proto.bsp_transaction.MCBlock} returns this
*/
proto.bsp_transaction.MCBlock.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.MCBlock} returns this
 */
proto.bsp_transaction.MCBlock.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.MCBlock.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ECBlock blocks = 2;
 * @return {!Array<!proto.bsp_transaction.ECBlock>}
 */
proto.bsp_transaction.MCBlock.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.bsp_transaction.ECBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bsp_transaction.ECBlock, 2));
};


/**
 * @param {!Array<!proto.bsp_transaction.ECBlock>} value
 * @return {!proto.bsp_transaction.MCBlock} returns this
*/
proto.bsp_transaction.MCBlock.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bsp_transaction.ECBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ECBlock}
 */
proto.bsp_transaction.MCBlock.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bsp_transaction.ECBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.MCBlock} returns this
 */
proto.bsp_transaction.MCBlock.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ECHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ECHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ECHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ECHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: msg.getHeader_asB64(),
    region: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ECHeader}
 */
proto.bsp_transaction.ECHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ECHeader;
  return proto.bsp_transaction.ECHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ECHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ECHeader}
 */
proto.bsp_transaction.ECHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ECHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ECHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ECHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ECHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes Header = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ECHeader.prototype.getHeader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Header = 1;
 * This is a type-conversion wrapper around `getHeader()`
 * @return {string}
 */
proto.bsp_transaction.ECHeader.prototype.getHeader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHeader()));
};


/**
 * optional bytes Header = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHeader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ECHeader.prototype.getHeader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHeader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ECHeader} returns this
 */
proto.bsp_transaction.ECHeader.prototype.setHeader = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Region = 2;
 * @return {string}
 */
proto.bsp_transaction.ECHeader.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ECHeader} returns this
 */
proto.bsp_transaction.ECHeader.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ECBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ECBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ECBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ECBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: msg.getBlock_asB64(),
    region: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ECBlock}
 */
proto.bsp_transaction.ECBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ECBlock;
  return proto.bsp_transaction.ECBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ECBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ECBlock}
 */
proto.bsp_transaction.ECBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlock(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ECBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ECBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ECBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ECBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes Block = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.ECBlock.prototype.getBlock = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Block = 1;
 * This is a type-conversion wrapper around `getBlock()`
 * @return {string}
 */
proto.bsp_transaction.ECBlock.prototype.getBlock_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlock()));
};


/**
 * optional bytes Block = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlock()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ECBlock.prototype.getBlock_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlock()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.ECBlock} returns this
 */
proto.bsp_transaction.ECBlock.prototype.setBlock = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string Region = 2;
 * @return {string}
 */
proto.bsp_transaction.ECBlock.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ECBlock} returns this
 */
proto.bsp_transaction.ECBlock.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MCResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MCResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MCResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MCResponse}
 */
proto.bsp_transaction.MCResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MCResponse;
  return proto.bsp_transaction.MCResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MCResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MCResponse}
 */
proto.bsp_transaction.MCResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MCResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MCResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MCResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MCResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msg = 1;
 * @return {string}
 */
proto.bsp_transaction.MCResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.MCResponse} returns this
 */
proto.bsp_transaction.MCResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.DeliverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.DeliverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.DeliverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.DeliverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: msg.getRequest_asB64(),
    from: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.DeliverRequest}
 */
proto.bsp_transaction.DeliverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.DeliverRequest;
  return proto.bsp_transaction.DeliverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.DeliverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.DeliverRequest}
 */
proto.bsp_transaction.DeliverRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.DeliverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.DeliverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.DeliverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.DeliverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes Request = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.DeliverRequest.prototype.getRequest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Request = 1;
 * This is a type-conversion wrapper around `getRequest()`
 * @return {string}
 */
proto.bsp_transaction.DeliverRequest.prototype.getRequest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRequest()));
};


/**
 * optional bytes Request = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRequest()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.DeliverRequest.prototype.getRequest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRequest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.DeliverRequest} returns this
 */
proto.bsp_transaction.DeliverRequest.prototype.setRequest = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string From = 2;
 * @return {string}
 */
proto.bsp_transaction.DeliverRequest.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.DeliverRequest} returns this
 */
proto.bsp_transaction.DeliverRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MigrateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MigrateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MigrateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureheader: msg.getSignatureheader_asB64(),
    streamfinal: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MigrateRequest}
 */
proto.bsp_transaction.MigrateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MigrateRequest;
  return proto.bsp_transaction.MigrateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MigrateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MigrateRequest}
 */
proto.bsp_transaction.MigrateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureheader(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStreamfinal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MigrateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MigrateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureheader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStreamfinal();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional bytes Payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MigrateRequest.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.MigrateRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MigrateRequest} returns this
 */
proto.bsp_transaction.MigrateRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MigrateRequest} returns this
 */
proto.bsp_transaction.MigrateRequest.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes SignatureHeader = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignatureheader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes SignatureHeader = 3;
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {string}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignatureheader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureheader()));
};


/**
 * optional bytes SignatureHeader = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequest.prototype.getSignatureheader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureheader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MigrateRequest} returns this
 */
proto.bsp_transaction.MigrateRequest.prototype.setSignatureheader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 StreamFinal = 10;
 * @return {number}
 */
proto.bsp_transaction.MigrateRequest.prototype.getStreamfinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MigrateRequest} returns this
 */
proto.bsp_transaction.MigrateRequest.prototype.setStreamfinal = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MigrateRequestPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MigrateRequestPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequestPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    startblknum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    highestpreparedheight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    currentblocknum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    block: (f = msg.getBlock()) && proto.bsp_transaction.ECBlock.toObject(includeInstance, f),
    newviewtxbytes: msg.getNewviewtxbytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MigrateRequestPayload}
 */
proto.bsp_transaction.MigrateRequestPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MigrateRequestPayload;
  return proto.bsp_transaction.MigrateRequestPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MigrateRequestPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MigrateRequestPayload}
 */
proto.bsp_transaction.MigrateRequestPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartblknum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighestpreparedheight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentblocknum(value);
      break;
    case 4:
      var value = new proto.bsp_transaction.ECBlock;
      reader.readMessage(value,proto.bsp_transaction.ECBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNewviewtxbytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MigrateRequestPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MigrateRequestPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequestPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartblknum();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHighestpreparedheight();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCurrentblocknum();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bsp_transaction.ECBlock.serializeBinaryToWriter
    );
  }
  f = message.getNewviewtxbytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional uint64 StartBlkNum = 1;
 * @return {number}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getStartblknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.setStartblknum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 HighestPreparedHeight = 2;
 * @return {number}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getHighestpreparedheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.setHighestpreparedheight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 CurrentBlockNum = 3;
 * @return {number}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getCurrentblocknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.setCurrentblocknum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ECBlock Block = 4;
 * @return {?proto.bsp_transaction.ECBlock}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getBlock = function() {
  return /** @type{?proto.bsp_transaction.ECBlock} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.ECBlock, 4));
};


/**
 * @param {?proto.bsp_transaction.ECBlock|undefined} value
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
*/
proto.bsp_transaction.MigrateRequestPayload.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes NewViewTxBytes = 5;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getNewviewtxbytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes NewViewTxBytes = 5;
 * This is a type-conversion wrapper around `getNewviewtxbytes()`
 * @return {string}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getNewviewtxbytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNewviewtxbytes()));
};


/**
 * optional bytes NewViewTxBytes = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNewviewtxbytes()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.getNewviewtxbytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNewviewtxbytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.MigrateRequestPayload} returns this
 */
proto.bsp_transaction.MigrateRequestPayload.prototype.setNewviewtxbytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MigrateRequestStatePayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MigrateRequestStatePayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MigrateRequestStatePayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequestStatePayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.bsp_transaction.TxOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MigrateRequestStatePayload}
 */
proto.bsp_transaction.MigrateRequestStatePayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MigrateRequestStatePayload;
  return proto.bsp_transaction.MigrateRequestStatePayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MigrateRequestStatePayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MigrateRequestStatePayload}
 */
proto.bsp_transaction.MigrateRequestStatePayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bsp_transaction.TxOutput;
      reader.readMessage(value,proto.bsp_transaction.TxOutput.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateRequestStatePayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MigrateRequestStatePayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MigrateRequestStatePayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateRequestStatePayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bsp_transaction.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxOutput state = 1;
 * @return {?proto.bsp_transaction.TxOutput}
 */
proto.bsp_transaction.MigrateRequestStatePayload.prototype.getState = function() {
  return /** @type{?proto.bsp_transaction.TxOutput} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.TxOutput, 1));
};


/**
 * @param {?proto.bsp_transaction.TxOutput|undefined} value
 * @return {!proto.bsp_transaction.MigrateRequestStatePayload} returns this
*/
proto.bsp_transaction.MigrateRequestStatePayload.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.MigrateRequestStatePayload} returns this
 */
proto.bsp_transaction.MigrateRequestStatePayload.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.MigrateRequestStatePayload.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.MigrateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.MigrateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.MigrateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.MigrateResponse}
 */
proto.bsp_transaction.MigrateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.MigrateResponse;
  return proto.bsp_transaction.MigrateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.MigrateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.MigrateResponse}
 */
proto.bsp_transaction.MigrateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.MigrateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.MigrateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.MigrateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.MigrateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Msg = 1;
 * @return {string}
 */
proto.bsp_transaction.MigrateResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.MigrateResponse} returns this
 */
proto.bsp_transaction.MigrateResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.HeartbeatPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.HeartbeatPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.HeartbeatPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HeartbeatPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeout: jspb.Message.getFieldWithDefault(msg, 1, ""),
    region: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.HeartbeatPayload}
 */
proto.bsp_transaction.HeartbeatPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.HeartbeatPayload;
  return proto.bsp_transaction.HeartbeatPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.HeartbeatPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.HeartbeatPayload}
 */
proto.bsp_transaction.HeartbeatPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeout(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HeartbeatPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.HeartbeatPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.HeartbeatPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HeartbeatPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeout();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Timeout = 1;
 * @return {string}
 */
proto.bsp_transaction.HeartbeatPayload.prototype.getTimeout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.HeartbeatPayload} returns this
 */
proto.bsp_transaction.HeartbeatPayload.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Region = 2;
 * @return {string}
 */
proto.bsp_transaction.HeartbeatPayload.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.HeartbeatPayload} returns this
 */
proto.bsp_transaction.HeartbeatPayload.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.HeartbeatTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.HeartbeatTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HeartbeatTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    signature: msg.getSignature_asB64(),
    signatureheader: msg.getSignatureheader_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.HeartbeatTransaction}
 */
proto.bsp_transaction.HeartbeatTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.HeartbeatTransaction;
  return proto.bsp_transaction.HeartbeatTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.HeartbeatTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.HeartbeatTransaction}
 */
proto.bsp_transaction.HeartbeatTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignatureheader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.HeartbeatTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.HeartbeatTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.HeartbeatTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignatureheader_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes Payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes Payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.HeartbeatTransaction} returns this
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.HeartbeatTransaction} returns this
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes SignatureHeader = 3;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignatureheader = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes SignatureHeader = 3;
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {string}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignatureheader_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignatureheader()));
};


/**
 * optional bytes SignatureHeader = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignatureheader()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.getSignatureheader_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignatureheader()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.HeartbeatTransaction} returns this
 */
proto.bsp_transaction.HeartbeatTransaction.prototype.setSignatureheader = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quorumsize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.Policy}
 */
proto.bsp_transaction.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.Policy;
  return proto.bsp_transaction.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.Policy}
 */
proto.bsp_transaction.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp_transaction.ConsensusState.Level} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuorumsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getQuorumsize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional ConsensusState.Level level = 1;
 * @return {!proto.bsp_transaction.ConsensusState.Level}
 */
proto.bsp_transaction.Policy.prototype.getLevel = function() {
  return /** @type {!proto.bsp_transaction.ConsensusState.Level} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp_transaction.ConsensusState.Level} value
 * @return {!proto.bsp_transaction.Policy} returns this
 */
proto.bsp_transaction.Policy.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 QuorumSize = 2;
 * @return {number}
 */
proto.bsp_transaction.Policy.prototype.getQuorumsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.Policy} returns this
 */
proto.bsp_transaction.Policy.prototype.setQuorumsize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.AggregatorSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.AggregatorSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AggregatorSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscriberid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventsourceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    policy: (f = msg.getPolicy()) && proto.bsp_transaction.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.AggregatorSubscribeRequest;
  return proto.bsp_transaction.AggregatorSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.AggregatorSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscriberid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventsourceid(value);
      break;
    case 3:
      var value = new proto.bsp_transaction.Policy;
      reader.readMessage(value,proto.bsp_transaction.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.AggregatorSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.AggregatorSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AggregatorSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscriberid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventsourceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bsp_transaction.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string SubscriberId = 1;
 * @return {string}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.getSubscriberid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest} returns this
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.setSubscriberid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string EventSourceId = 2;
 * @return {string}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.getEventsourceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest} returns this
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.setEventsourceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Policy Policy = 3;
 * @return {?proto.bsp_transaction.Policy}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.getPolicy = function() {
  return /** @type{?proto.bsp_transaction.Policy} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Policy, 3));
};


/**
 * @param {?proto.bsp_transaction.Policy|undefined} value
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest} returns this
*/
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.AggregatorSubscribeRequest} returns this
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.AggregatorSubscribeRequest.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.AggregatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.AggregatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.AggregatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AggregatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.AggregatorResponse}
 */
proto.bsp_transaction.AggregatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.AggregatorResponse;
  return proto.bsp_transaction.AggregatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.AggregatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.AggregatorResponse}
 */
proto.bsp_transaction.AggregatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.AggregatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.AggregatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.AggregatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.AggregatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string TxId = 1;
 * @return {string}
 */
proto.bsp_transaction.AggregatorResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AggregatorResponse} returns this
 */
proto.bsp_transaction.AggregatorResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ClientId = 2;
 * @return {string}
 */
proto.bsp_transaction.AggregatorResponse.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AggregatorResponse} returns this
 */
proto.bsp_transaction.AggregatorResponse.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Status = 3;
 * @return {string}
 */
proto.bsp_transaction.AggregatorResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.AggregatorResponse} returns this
 */
proto.bsp_transaction.AggregatorResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.WorkerMessage.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.WorkerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.WorkerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.WorkerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WorkerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    after: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    submitterthreads: jspb.Message.getFieldWithDefault(msg, 3, 0),
    receiverthreads: jspb.Message.getFieldWithDefault(msg, 4, 0),
    batchsize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    workloadsize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    submitdelay: jspb.Message.getFieldWithDefault(msg, 7, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.WorkerMessage}
 */
proto.bsp_transaction.WorkerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.WorkerMessage;
  return proto.bsp_transaction.WorkerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.WorkerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.WorkerMessage}
 */
proto.bsp_transaction.WorkerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAfter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubmitterthreads(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceiverthreads(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchsize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkloadsize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitdelay(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.WorkerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.WorkerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.WorkerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WorkerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAfter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubmitterthreads();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getReceiverthreads();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBatchsize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getWorkloadsize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSubmitdelay();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string After = 1;
 * @return {string}
 */
proto.bsp_transaction.WorkerMessage.prototype.getAfter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setAfter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Status = 2;
 * @return {string}
 */
proto.bsp_transaction.WorkerMessage.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 SubmitterThreads = 3;
 * @return {number}
 */
proto.bsp_transaction.WorkerMessage.prototype.getSubmitterthreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setSubmitterthreads = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 ReceiverThreads = 4;
 * @return {number}
 */
proto.bsp_transaction.WorkerMessage.prototype.getReceiverthreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setReceiverthreads = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 BatchSize = 5;
 * @return {number}
 */
proto.bsp_transaction.WorkerMessage.prototype.getBatchsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setBatchsize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 WorkloadSize = 6;
 * @return {number}
 */
proto.bsp_transaction.WorkerMessage.prototype.getWorkloadsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setWorkloadsize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string SubmitDelay = 7;
 * @return {string}
 */
proto.bsp_transaction.WorkerMessage.prototype.getSubmitdelay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setSubmitdelay = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string Args = 10;
 * @return {!Array<string>}
 */
proto.bsp_transaction.WorkerMessage.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.WorkerMessage} returns this
 */
proto.bsp_transaction.WorkerMessage.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.WaitForEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.WaitForEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WaitForEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    policy: (f = msg.getPolicy()) && proto.bsp_transaction.Policy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.WaitForEventRequest}
 */
proto.bsp_transaction.WaitForEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.WaitForEventRequest;
  return proto.bsp_transaction.WaitForEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.WaitForEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.WaitForEventRequest}
 */
proto.bsp_transaction.WaitForEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 3:
      var value = new proto.bsp_transaction.Policy;
      reader.readMessage(value,proto.bsp_transaction.Policy.deserializeBinaryFromReader);
      msg.setPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.WaitForEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.WaitForEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WaitForEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPolicy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bsp_transaction.Policy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string TxId = 1;
 * @return {string}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WaitForEventRequest} returns this
 */
proto.bsp_transaction.WaitForEventRequest.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ClientId = 2;
 * @return {string}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WaitForEventRequest} returns this
 */
proto.bsp_transaction.WaitForEventRequest.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Policy Policy = 3;
 * @return {?proto.bsp_transaction.Policy}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.getPolicy = function() {
  return /** @type{?proto.bsp_transaction.Policy} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.Policy, 3));
};


/**
 * @param {?proto.bsp_transaction.Policy|undefined} value
 * @return {!proto.bsp_transaction.WaitForEventRequest} returns this
*/
proto.bsp_transaction.WaitForEventRequest.prototype.setPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.WaitForEventRequest} returns this
 */
proto.bsp_transaction.WaitForEventRequest.prototype.clearPolicy = function() {
  return this.setPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.WaitForEventRequest.prototype.hasPolicy = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.WaitForEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.WaitForEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.WaitForEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WaitForEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: (f = msg.getState()) && proto.bsp_transaction.ConsensusState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.WaitForEventResponse}
 */
proto.bsp_transaction.WaitForEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.WaitForEventResponse;
  return proto.bsp_transaction.WaitForEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.WaitForEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.WaitForEventResponse}
 */
proto.bsp_transaction.WaitForEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.bsp_transaction.ConsensusState;
      reader.readMessage(value,proto.bsp_transaction.ConsensusState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.WaitForEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.WaitForEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.WaitForEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.WaitForEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bsp_transaction.ConsensusState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string Status = 1;
 * @return {string}
 */
proto.bsp_transaction.WaitForEventResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.WaitForEventResponse} returns this
 */
proto.bsp_transaction.WaitForEventResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ConsensusState State = 2;
 * @return {?proto.bsp_transaction.ConsensusState}
 */
proto.bsp_transaction.WaitForEventResponse.prototype.getState = function() {
  return /** @type{?proto.bsp_transaction.ConsensusState} */ (
    jspb.Message.getWrapperField(this, proto.bsp_transaction.ConsensusState, 2));
};


/**
 * @param {?proto.bsp_transaction.ConsensusState|undefined} value
 * @return {!proto.bsp_transaction.WaitForEventResponse} returns this
*/
proto.bsp_transaction.WaitForEventResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp_transaction.WaitForEventResponse} returns this
 */
proto.bsp_transaction.WaitForEventResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp_transaction.WaitForEventResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp_transaction.ActiveExecutors.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ActiveExecutors.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ActiveExecutors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ActiveExecutors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ActiveExecutors.toObject = function(includeInstance, msg) {
  var f, obj = {
    executoraddressList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    removedaddress: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ActiveExecutors}
 */
proto.bsp_transaction.ActiveExecutors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ActiveExecutors;
  return proto.bsp_transaction.ActiveExecutors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ActiveExecutors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ActiveExecutors}
 */
proto.bsp_transaction.ActiveExecutors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addExecutoraddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemovedaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ActiveExecutors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ActiveExecutors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ActiveExecutors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ActiveExecutors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutoraddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRemovedaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string ExecutorAddress = 1;
 * @return {!Array<string>}
 */
proto.bsp_transaction.ActiveExecutors.prototype.getExecutoraddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bsp_transaction.ActiveExecutors} returns this
 */
proto.bsp_transaction.ActiveExecutors.prototype.setExecutoraddressList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bsp_transaction.ActiveExecutors} returns this
 */
proto.bsp_transaction.ActiveExecutors.prototype.addExecutoraddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp_transaction.ActiveExecutors} returns this
 */
proto.bsp_transaction.ActiveExecutors.prototype.clearExecutoraddressList = function() {
  return this.setExecutoraddressList([]);
};


/**
 * optional string RemovedAddress = 2;
 * @return {string}
 */
proto.bsp_transaction.ActiveExecutors.prototype.getRemovedaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ActiveExecutors} returns this
 */
proto.bsp_transaction.ActiveExecutors.prototype.setRemovedaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ActiveExecutorsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ActiveExecutorsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ActiveExecutorsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ActiveExecutorsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    resp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ActiveExecutorsResp}
 */
proto.bsp_transaction.ActiveExecutorsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ActiveExecutorsResp;
  return proto.bsp_transaction.ActiveExecutorsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ActiveExecutorsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ActiveExecutorsResp}
 */
proto.bsp_transaction.ActiveExecutorsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ActiveExecutorsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ActiveExecutorsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ActiveExecutorsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ActiveExecutorsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Resp = 1;
 * @return {string}
 */
proto.bsp_transaction.ActiveExecutorsResp.prototype.getResp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.ActiveExecutorsResp} returns this
 */
proto.bsp_transaction.ActiveExecutorsResp.prototype.setResp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.ReadPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.ReadPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.ReadPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ReadPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatheredfrom: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.ReadPolicy}
 */
proto.bsp_transaction.ReadPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.ReadPolicy;
  return proto.bsp_transaction.ReadPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.ReadPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.ReadPolicy}
 */
proto.bsp_transaction.ReadPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGatheredfrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.ReadPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.ReadPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.ReadPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.ReadPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGatheredfrom();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 GatheredFrom = 1;
 * @return {number}
 */
proto.bsp_transaction.ReadPolicy.prototype.getGatheredfrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bsp_transaction.ReadPolicy} returns this
 */
proto.bsp_transaction.ReadPolicy.prototype.setGatheredfrom = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.QueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.QueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.QueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.QueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chaincodeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    extension: msg.getExtension_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.QueryRequest}
 */
proto.bsp_transaction.QueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.QueryRequest;
  return proto.bsp_transaction.QueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.QueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.QueryRequest}
 */
proto.bsp_transaction.QueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChaincodeid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExtension$(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.QueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.QueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.QueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.QueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChaincodeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExtension_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional string ChannelID = 1;
 * @return {string}
 */
proto.bsp_transaction.QueryRequest.prototype.getChannelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.QueryRequest} returns this
 */
proto.bsp_transaction.QueryRequest.prototype.setChannelid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ChaincodeID = 2;
 * @return {string}
 */
proto.bsp_transaction.QueryRequest.prototype.getChaincodeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.QueryRequest} returns this
 */
proto.bsp_transaction.QueryRequest.prototype.setChaincodeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Key = 3;
 * @return {string}
 */
proto.bsp_transaction.QueryRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.QueryRequest} returns this
 */
proto.bsp_transaction.QueryRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes Extension = 4;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.QueryRequest.prototype.getExtension$ = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes Extension = 4;
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {string}
 */
proto.bsp_transaction.QueryRequest.prototype.getExtension_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExtension$()));
};


/**
 * optional bytes Extension = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExtension$()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.QueryRequest.prototype.getExtension_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExtension$()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.QueryRequest} returns this
 */
proto.bsp_transaction.QueryRequest.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp_transaction.QueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp_transaction.QueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp_transaction.QueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.QueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp_transaction.QueryResponse}
 */
proto.bsp_transaction.QueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp_transaction.QueryResponse;
  return proto.bsp_transaction.QueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp_transaction.QueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp_transaction.QueryResponse}
 */
proto.bsp_transaction.QueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp_transaction.QueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp_transaction.QueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp_transaction.QueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp_transaction.QueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string Key = 1;
 * @return {string}
 */
proto.bsp_transaction.QueryResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp_transaction.QueryResponse} returns this
 */
proto.bsp_transaction.QueryResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes Value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.bsp_transaction.QueryResponse.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.bsp_transaction.QueryResponse.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes Value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.bsp_transaction.QueryResponse.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.bsp_transaction.QueryResponse} returns this
 */
proto.bsp_transaction.QueryResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.bsp_transaction.ChangeTriggerCode = {
  INVALID_SIGNATURE: 0,
  EDGECHAINSAFETY: 1,
  EDGECHAINLIVENESS: 2,
  MAINCHAINSAFETY: 4,
  MAINCHAINLIVENESS: 3
};

/**
 * @enum {number}
 */
proto.bsp_transaction.BspTransactionType = {
  INTRATX: 0,
  INTERTX: 2,
  INTERTX_SHOULDLOCK: 3,
  INTERTX_NOLOCK: 4,
  MCAUDITTX: 10,
  ECAUDITTX: 11,
  NEWVIEW: 20,
  SYNCTX: 30,
  NONE: 100
};

/**
 * @enum {number}
 */
proto.bsp_transaction.CommitEventReplyType = {
  SPECULATIVE: 0,
  UP_TO_DATE: 1,
  BFT: 2,
  BFT_TX: 3,
  TSA: 4,
  EARLY: 5
};

/**
 * @enum {number}
 */
proto.bsp_transaction.EventUnit = {
  BLOCK: 0,
  TX: 1
};

/**
 * @enum {number}
 */
proto.bsp_transaction.AuditType = {
  EC: 0,
  MC: 1,
  UNKNOWN: 99
};

/**
 * @enum {number}
 */
proto.bsp_transaction.OrderingMethod = {
  INDEXBASEDORDERING: 0,
  DEPENDENCYGRAPHBASEDORDERING: 1
};

goog.object.extend(exports, proto.bsp_transaction);
