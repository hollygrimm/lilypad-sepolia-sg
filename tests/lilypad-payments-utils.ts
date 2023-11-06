import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Payment
} from "../generated/LilypadPayments/LilypadPayments"

export function createPaymentEvent(
  dealId: string,
  payee: Address,
  amount: BigInt,
  reason: i32,
  direction: i32
): Payment {
  let paymentEvent = changetype<Payment>(newMockEvent())

  paymentEvent.parameters = new Array()

  paymentEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromString(dealId))
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam(
      "reason",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(reason))
    )
  )
  paymentEvent.parameters.push(
    new ethereum.EventParam(
      "direction",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(direction))
    )
  )

  return paymentEvent
}
