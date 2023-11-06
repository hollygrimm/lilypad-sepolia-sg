import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { createPaymentEvent } from "./lilypad-payments-utils"
import { handlePayment } from "../src/lilypad-payments"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dealId = "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2"
    let payee = Address.fromString("0x7a6b066d2022cf1d975a60b9c144d4b1dc9949e7")
    let amount = BigInt.fromI32(100)
    let reason = 1
    let direction = 1
    let paymentEvent = createPaymentEvent(dealId, payee,
      amount,
      reason,
      direction)
      handlePayment(paymentEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Initialized created and stored", () => {
    assert.entityCount("Job", 1)


  })
})
