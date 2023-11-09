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

  test("Initialized created and stored", () => {
    assert.entityCount("Job", 1)

    assert.fieldEquals(
      "Job",
      "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2",
      "state",
      "ResultsAccepted"
    )
  })

  test("JobHistory entity is created with the correct values", () => {
    assert.entityCount("JobHistory", 1)
    
    let jobHistoryId = "ResultsAccepted-0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1"

    assert.fieldEquals(
      "JobHistory",
      jobHistoryId,
      "state",
      "ResultsAccepted"
    )
    
    let jobEntityId = "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2"
    assert.fieldEquals(
      "JobHistory",
      jobHistoryId,
      "job",
      jobEntityId
    )
  })
})
