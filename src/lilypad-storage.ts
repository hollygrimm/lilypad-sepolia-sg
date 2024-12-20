import {
  DealStateChange,
  Initialized,
  OwnershipTransferred
} from "../generated/LilypadStorage/LilypadStorage"
import { Job, JobHistory } from "../generated/schema"

export enum JobState {
  DEALNEGOTIATING = 0,
  DEALAGREED = 1,
  RESULTS_SUBMITTED = 2,
  RESULTS_CHECKED = 3,
  RESULTS_ACCEPTED = 4,
  MEDIATION_ACCEPTED = 5,
  MEDIATION_REJECTED = 6,
  TIMEOUT_AGREE = 7,
  TIMEOUT_SUBMIT_RESULTS = 8,
  TIMEOUT_JUDGE_RESULTS = 9,
  TIMEOUT_MEDIATE_RESULTS = 10,
}

const jobStateToString = new Map<JobState, string>();
jobStateToString.set(JobState.DEALNEGOTIATING, "DealNegotiating");
jobStateToString.set(JobState.DEALAGREED, "DealAgreed");
jobStateToString.set(JobState.RESULTS_SUBMITTED, "ResultsSubmitted");
jobStateToString.set(JobState.RESULTS_CHECKED, "ResultsChecked");
jobStateToString.set(JobState.RESULTS_ACCEPTED, "ResultsAccepted");
jobStateToString.set(JobState.MEDIATION_ACCEPTED, "MediationAccepted");
jobStateToString.set(JobState.MEDIATION_REJECTED, "MediationRejected");
jobStateToString.set(JobState.TIMEOUT_AGREE, "TimeoutAgree");
jobStateToString.set(JobState.TIMEOUT_SUBMIT_RESULTS, "TimeoutSubmitResults");
jobStateToString.set(JobState.TIMEOUT_JUDGE_RESULTS, "TimeoutJudgeResults");
jobStateToString.set(JobState.TIMEOUT_MEDIATE_RESULTS, "TimeoutMediateResults");

export function getJobState(jobStateInt: JobState): string {
  return jobStateToString.get(jobStateInt) || "DealNegotiating"; // Default to "DealNegotiating" if not found
}

export function handleDealStateChange(event: DealStateChange): void {
  let job = Job.load(event.params.dealId)

  if (!job) {
    // create new job
    job = new Job(event.params.dealId)
    job.createdAtTimestamp = event.block.timestamp
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
    // Initialize state for new job
    job.state = getJobState(event.params.state)
  } else {
    // update existing job
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
    job.state = getJobState(event.params.state)
  }

  job.save()

  // Create a JobHistory entity with explicit type conversion
  const jobHistoryId = job.state + "-" + event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  let jobHistory = new JobHistory(jobHistoryId)
  jobHistory.job = job.id
  jobHistory.timestamp = event.block.timestamp
  jobHistory.state = getJobState(event.params.state)
  jobHistory.save()
}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
