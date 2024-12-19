// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Payment extends ethereum.Event {
  get params(): Payment__Params {
    return new Payment__Params(this);
  }
}

export class Payment__Params {
  _event: Payment;

  constructor(event: Payment) {
    this._event = event;
  }

  get dealId(): string {
    return this._event.parameters[0].value.toString();
  }

  get payee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reason(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get direction(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class LilypadPayments extends ethereum.SmartContract {
  static bind(address: Address): LilypadPayments {
    return new LilypadPayments("LilypadPayments", address);
  }

  getControllerAddress(): Address {
    let result = super.call(
      "getControllerAddress",
      "getControllerAddress():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getControllerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getControllerAddress",
      "getControllerAddress():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenAddress(): Address {
    let result = super.call(
      "getTokenAddress",
      "getTokenAddress():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenAddress",
      "getTokenAddress():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AcceptResultCall extends ethereum.Call {
  get inputs(): AcceptResultCall__Inputs {
    return new AcceptResultCall__Inputs(this);
  }

  get outputs(): AcceptResultCall__Outputs {
    return new AcceptResultCall__Outputs(this);
  }
}

export class AcceptResultCall__Inputs {
  _call: AcceptResultCall;

  constructor(call: AcceptResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get jobCost(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class AcceptResultCall__Outputs {
  _call: AcceptResultCall;

  constructor(call: AcceptResultCall) {
    this._call = call;
  }
}

export class AddResultCall extends ethereum.Call {
  get inputs(): AddResultCall__Inputs {
    return new AddResultCall__Inputs(this);
  }

  get outputs(): AddResultCall__Outputs {
    return new AddResultCall__Outputs(this);
  }
}

export class AddResultCall__Inputs {
  _call: AddResultCall;

  constructor(call: AddResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AddResultCall__Outputs {
  _call: AddResultCall;

  constructor(call: AddResultCall) {
    this._call = call;
  }
}

export class AgreeJobCreatorCall extends ethereum.Call {
  get inputs(): AgreeJobCreatorCall__Inputs {
    return new AgreeJobCreatorCall__Inputs(this);
  }

  get outputs(): AgreeJobCreatorCall__Outputs {
    return new AgreeJobCreatorCall__Outputs(this);
  }
}

export class AgreeJobCreatorCall__Inputs {
  _call: AgreeJobCreatorCall;

  constructor(call: AgreeJobCreatorCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jobCreator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AgreeJobCreatorCall__Outputs {
  _call: AgreeJobCreatorCall;

  constructor(call: AgreeJobCreatorCall) {
    this._call = call;
  }
}

export class AgreeResourceProviderCall extends ethereum.Call {
  get inputs(): AgreeResourceProviderCall__Inputs {
    return new AgreeResourceProviderCall__Inputs(this);
  }

  get outputs(): AgreeResourceProviderCall__Outputs {
    return new AgreeResourceProviderCall__Outputs(this);
  }
}

export class AgreeResourceProviderCall__Inputs {
  _call: AgreeResourceProviderCall;

  constructor(call: AgreeResourceProviderCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AgreeResourceProviderCall__Outputs {
  _call: AgreeResourceProviderCall;

  constructor(call: AgreeResourceProviderCall) {
    this._call = call;
  }
}

export class CheckResultCall extends ethereum.Call {
  get inputs(): CheckResultCall__Inputs {
    return new CheckResultCall__Inputs(this);
  }

  get outputs(): CheckResultCall__Outputs {
    return new CheckResultCall__Outputs(this);
  }
}

export class CheckResultCall__Inputs {
  _call: CheckResultCall;

  constructor(call: CheckResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jobCreator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get mediationFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CheckResultCall__Outputs {
  _call: CheckResultCall;

  constructor(call: CheckResultCall) {
    this._call = call;
  }
}

export class DisableChangeControllerAddressCall extends ethereum.Call {
  get inputs(): DisableChangeControllerAddressCall__Inputs {
    return new DisableChangeControllerAddressCall__Inputs(this);
  }

  get outputs(): DisableChangeControllerAddressCall__Outputs {
    return new DisableChangeControllerAddressCall__Outputs(this);
  }
}

export class DisableChangeControllerAddressCall__Inputs {
  _call: DisableChangeControllerAddressCall;

  constructor(call: DisableChangeControllerAddressCall) {
    this._call = call;
  }
}

export class DisableChangeControllerAddressCall__Outputs {
  _call: DisableChangeControllerAddressCall;

  constructor(call: DisableChangeControllerAddressCall) {
    this._call = call;
  }
}

export class DisableChangeTokenAddressCall extends ethereum.Call {
  get inputs(): DisableChangeTokenAddressCall__Inputs {
    return new DisableChangeTokenAddressCall__Inputs(this);
  }

  get outputs(): DisableChangeTokenAddressCall__Outputs {
    return new DisableChangeTokenAddressCall__Outputs(this);
  }
}

export class DisableChangeTokenAddressCall__Inputs {
  _call: DisableChangeTokenAddressCall;

  constructor(call: DisableChangeTokenAddressCall) {
    this._call = call;
  }
}

export class DisableChangeTokenAddressCall__Outputs {
  _call: DisableChangeTokenAddressCall;

  constructor(call: DisableChangeTokenAddressCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MediationAcceptResultCall extends ethereum.Call {
  get inputs(): MediationAcceptResultCall__Inputs {
    return new MediationAcceptResultCall__Inputs(this);
  }

  get outputs(): MediationAcceptResultCall__Outputs {
    return new MediationAcceptResultCall__Outputs(this);
  }
}

export class MediationAcceptResultCall__Inputs {
  _call: MediationAcceptResultCall;

  constructor(call: MediationAcceptResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get jobCost(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get mediationFee(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class MediationAcceptResultCall__Outputs {
  _call: MediationAcceptResultCall;

  constructor(call: MediationAcceptResultCall) {
    this._call = call;
  }
}

export class MediationRejectResultCall extends ethereum.Call {
  get inputs(): MediationRejectResultCall__Inputs {
    return new MediationRejectResultCall__Inputs(this);
  }

  get outputs(): MediationRejectResultCall__Outputs {
    return new MediationRejectResultCall__Outputs(this);
  }
}

export class MediationRejectResultCall__Inputs {
  _call: MediationRejectResultCall;

  constructor(call: MediationRejectResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get mediationFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class MediationRejectResultCall__Outputs {
  _call: MediationRejectResultCall;

  constructor(call: MediationRejectResultCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetControllerAddressCall extends ethereum.Call {
  get inputs(): SetControllerAddressCall__Inputs {
    return new SetControllerAddressCall__Inputs(this);
  }

  get outputs(): SetControllerAddressCall__Outputs {
    return new SetControllerAddressCall__Outputs(this);
  }
}

export class SetControllerAddressCall__Inputs {
  _call: SetControllerAddressCall;

  constructor(call: SetControllerAddressCall) {
    this._call = call;
  }

  get _controllerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetControllerAddressCall__Outputs {
  _call: SetControllerAddressCall;

  constructor(call: SetControllerAddressCall) {
    this._call = call;
  }
}

export class SetTokenAddressCall extends ethereum.Call {
  get inputs(): SetTokenAddressCall__Inputs {
    return new SetTokenAddressCall__Inputs(this);
  }

  get outputs(): SetTokenAddressCall__Outputs {
    return new SetTokenAddressCall__Outputs(this);
  }
}

export class SetTokenAddressCall__Inputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenAddressCall__Outputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }
}

export class TimeoutAgreeRefundJobCreatorCall extends ethereum.Call {
  get inputs(): TimeoutAgreeRefundJobCreatorCall__Inputs {
    return new TimeoutAgreeRefundJobCreatorCall__Inputs(this);
  }

  get outputs(): TimeoutAgreeRefundJobCreatorCall__Outputs {
    return new TimeoutAgreeRefundJobCreatorCall__Outputs(this);
  }
}

export class TimeoutAgreeRefundJobCreatorCall__Inputs {
  _call: TimeoutAgreeRefundJobCreatorCall;

  constructor(call: TimeoutAgreeRefundJobCreatorCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get jobCreator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TimeoutAgreeRefundJobCreatorCall__Outputs {
  _call: TimeoutAgreeRefundJobCreatorCall;

  constructor(call: TimeoutAgreeRefundJobCreatorCall) {
    this._call = call;
  }
}

export class TimeoutAgreeRefundResourceProviderCall extends ethereum.Call {
  get inputs(): TimeoutAgreeRefundResourceProviderCall__Inputs {
    return new TimeoutAgreeRefundResourceProviderCall__Inputs(this);
  }

  get outputs(): TimeoutAgreeRefundResourceProviderCall__Outputs {
    return new TimeoutAgreeRefundResourceProviderCall__Outputs(this);
  }
}

export class TimeoutAgreeRefundResourceProviderCall__Inputs {
  _call: TimeoutAgreeRefundResourceProviderCall;

  constructor(call: TimeoutAgreeRefundResourceProviderCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TimeoutAgreeRefundResourceProviderCall__Outputs {
  _call: TimeoutAgreeRefundResourceProviderCall;

  constructor(call: TimeoutAgreeRefundResourceProviderCall) {
    this._call = call;
  }
}

export class TimeoutJudgeResultsCall extends ethereum.Call {
  get inputs(): TimeoutJudgeResultsCall__Inputs {
    return new TimeoutJudgeResultsCall__Inputs(this);
  }

  get outputs(): TimeoutJudgeResultsCall__Outputs {
    return new TimeoutJudgeResultsCall__Outputs(this);
  }
}

export class TimeoutJudgeResultsCall__Inputs {
  _call: TimeoutJudgeResultsCall;

  constructor(call: TimeoutJudgeResultsCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class TimeoutJudgeResultsCall__Outputs {
  _call: TimeoutJudgeResultsCall;

  constructor(call: TimeoutJudgeResultsCall) {
    this._call = call;
  }
}

export class TimeoutMediateResultCall extends ethereum.Call {
  get inputs(): TimeoutMediateResultCall__Inputs {
    return new TimeoutMediateResultCall__Inputs(this);
  }

  get outputs(): TimeoutMediateResultCall__Outputs {
    return new TimeoutMediateResultCall__Outputs(this);
  }
}

export class TimeoutMediateResultCall__Inputs {
  _call: TimeoutMediateResultCall;

  constructor(call: TimeoutMediateResultCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get resultsCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get mediationFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class TimeoutMediateResultCall__Outputs {
  _call: TimeoutMediateResultCall;

  constructor(call: TimeoutMediateResultCall) {
    this._call = call;
  }
}

export class TimeoutSubmitResultsCall extends ethereum.Call {
  get inputs(): TimeoutSubmitResultsCall__Inputs {
    return new TimeoutSubmitResultsCall__Inputs(this);
  }

  get outputs(): TimeoutSubmitResultsCall__Outputs {
    return new TimeoutSubmitResultsCall__Outputs(this);
  }
}

export class TimeoutSubmitResultsCall__Inputs {
  _call: TimeoutSubmitResultsCall;

  constructor(call: TimeoutSubmitResultsCall) {
    this._call = call;
  }

  get dealId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resourceProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get jobCreator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get paymentCollateral(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get timeoutCollateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class TimeoutSubmitResultsCall__Outputs {
  _call: TimeoutSubmitResultsCall;

  constructor(call: TimeoutSubmitResultsCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
