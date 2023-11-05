import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { Job } from "../generated/schema"
import { DealStateChange } from "../generated/LilypadStorage/LilypadStorage"
import { handleDealStateChange } from "../src/lilypad-storage"
import { createDealStateChangeEvent } from "./lilypad-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dealId = "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2"
    let state = 1
    let dealStateChangeEvent = createDealStateChangeEvent(dealId, state)
    handleDealStateChange(dealStateChangeEvent)
    let state2 = 2
    let dealStateChangeEvent2 = createDealStateChangeEvent(dealId, state2)
    handleDealStateChange(dealStateChangeEvent2)
  })

  afterAll(() => {
    clearStore()
  })

  test("Job created and stored", () => {
    assert.entityCount("Job", 1)

    assert.fieldEquals(
      "Job",
      "0x7a6b066d2022cf1d975a60b9c144d4b1dc9949e7d7f5dd7e88c7ab45adeb5d69",
      "dealId",
      "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2",
    )
    assert.fieldEquals(
      "Job",
      "0x7a6b066d2022cf1d975a60b9c144d4b1dc9949e7d7f5dd7e88c7ab45adeb5d69",
      "state",
      "ResultsSubmitted"
    )
  })

  test("JobHistory entity is created with the correct values", () => {
    assert.entityCount("JobHistory", 1)
    
    // Here we need to fetch the ID of the created JobHistory entity
    // Assuming the ID is created the same way as in the `handleDealStateChange` example provided earlier
    let jobHistoryId = "0xa16081f360e3847006db660bae1c6d1b2e17ec2a" // Replace with actual values used in entity creation

    assert.fieldEquals(
      "JobHistory",
      jobHistoryId,
      "state",
      "ResultsSubmitted"
    )
    
    // If your JobHistory stores a reference to the Job entity, you can assert that as well
    let jobEntityId = "0x7a6b066d2022cf1d975a60b9c144d4b1dc9949e7d7f5dd7e88c7ab45adeb5d69" // Replace with the actual job id expected
    assert.fieldEquals(
      "JobHistory",
      jobHistoryId,
      "job",
      jobEntityId
    )
  })
})
