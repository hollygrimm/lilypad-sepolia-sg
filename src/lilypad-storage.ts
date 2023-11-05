import { BigInt, Bytes, ByteArray, log, crypto } from "@graphprotocol/graph-ts"
import {
  LilypadStorage,
  DealStateChange,
  Initialized,
  OwnershipTransferred
} from "../generated/LilypadStorage/LilypadStorage"
import { Job, JobHistory } from "../generated/schema"

class JobState {
  static DEALNEGOTIATING: string = "DealNegotiating";
  static DEALAGREED: string = "DealAgreed";
  static RESULTS_SUBMITTED: string = "ResultsSubmitted";
  static RESULTS_CHECKED: string = "ResultsChecked";
  static RESULTS_ACCEPTED: string = "ResultsAccepted";
  static MEDIATION_ACCEPTED: string = "MediationAccepted";
  static MEDIATION_REJECTED: string = "MediationRejected";
  static TIMEOUT_AGREE: string = "TimeoutAgree";
  static TIMEOUT_SUBMIT_RESULTS: string = "TimeoutSubmitResults";
  static TIMEOUT_JUDGE_RESULTS: string = "TimeoutJudgeResults";
  static TIMEOUT_MEDIATE_RESULTS: string = "TimeoutMediateResults";
}

export function getJobState(jobStateInt: number): string {
  let jobstate = JobState.DEALNEGOTIATING

  if (jobStateInt == 1) {
    jobstate = JobState.DEALAGREED
  } else if (jobStateInt == 2) {
    jobstate = JobState.RESULTS_SUBMITTED
  } else if (jobStateInt == 3) {
    jobstate = JobState.RESULTS_CHECKED
  } else if (jobStateInt == 4) {
    jobstate = JobState.RESULTS_ACCEPTED
  } else if (jobStateInt == 5) {
    jobstate = JobState.MEDIATION_ACCEPTED
  } else if (jobStateInt == 6) {
    jobstate = JobState.MEDIATION_REJECTED
  } else if (jobStateInt == 7) {
    jobstate = JobState.TIMEOUT_AGREE
  } else if (jobStateInt == 8) {
    jobstate = JobState.TIMEOUT_SUBMIT_RESULTS
  } else if (jobStateInt == 9) {
    jobstate = JobState.TIMEOUT_JUDGE_RESULTS
  } else if (jobStateInt == 10) {
    jobstate = JobState.TIMEOUT_MEDIATE_RESULTS
  }
  return jobstate
}

export function handleDealStateChange(event: DealStateChange): void {
  let dealIdBytes = Bytes.fromUTF8(event.params.dealId)
  let jobIdBytes = Bytes.fromByteArray(crypto.keccak256(dealIdBytes))
  let job = Job.load(jobIdBytes)

  if (!job) {
    // create new job
    job = new Job(jobIdBytes)
    job.dealId = event.params.dealId
    job.createdAtTimestamp = event.block.timestamp
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
  } else {
    // update existing job
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
  }

  job.state = getJobState(event.params.state)

  job.save()

  let jobHistory = new JobHistory(event.transaction.hash.toHex())
  jobHistory.job = job.id
  jobHistory.timestamp = event.block.timestamp
  jobHistory.state = getJobState(event.params.state)
  jobHistory.save()
}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
