import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  DealStateChange,
  Initialized,
  OwnershipTransferred
} from "../generated/LilypadStorage/LilypadStorage"

export function createDealStateChangeEvent(
  dealId: string,
  state: i32
): DealStateChange {
  let dealStateChangeEvent = changetype<DealStateChange>(newMockEvent())

  dealStateChangeEvent.parameters = new Array()

  dealStateChangeEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromString(dealId))
  )
  dealStateChangeEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )

  return dealStateChangeEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
