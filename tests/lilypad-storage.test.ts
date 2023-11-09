import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { handleDealStateChange } from "../src/lilypad-storage"
import { createDealStateChangeEvent } from "./lilypad-storage-utils"

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
      "QmUYUSt3tDCXM7AChPn7YQUVN1gJzZnXAXfeiaitYdyKL2",
      "state",
      "ResultsSubmitted"
    )
  })

  test("JobHistory entity is created with the correct values", () => {
    assert.entityCount("JobHistory", 2)
    
    let jobHistoryId = "ResultsSubmitted-0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1"

    assert.fieldEquals(
      "JobHistory",
      jobHistoryId,
      "state",
      "ResultsSubmitted"
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
