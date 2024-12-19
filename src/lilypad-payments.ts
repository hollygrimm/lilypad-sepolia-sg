import { log } from "@graphprotocol/graph-ts"
import {
  Payment as PaymentEvent,
  Initialized,
  OwnershipTransferred
} from "../generated/LilypadPayments/LilypadPayments"
import { Job, JobHistory } from "../generated/schema"
import { getJobState, JobState } from "./lilypad-storage"

enum PaymentReason {
  // the money the JC puts up to pay for the job
  PAYMENTCOLLATERAL = 0,

  // the money the RP puts up to attest it's results are correct
  RESULTSCOLLATERAL = 1,

  // the money the RP, JC and Mediator all put up to prevent timeouts
  TIMEOUTCOLLATERAL = 2,

  // the money the RP gets paid for the job for running it successfully
  JOBPAYMENT = 3,

  // the money the JC pays the mediator for resolving a dispute
  MEDIATIONFEE = 4,
}

const paymentReasonToString = new Map<PaymentReason, string>();
paymentReasonToString.set(PaymentReason.PAYMENTCOLLATERAL, "PaymentCollateral");
paymentReasonToString.set(PaymentReason.RESULTSCOLLATERAL, "ResultsCollateral");
paymentReasonToString.set(PaymentReason.TIMEOUTCOLLATERAL, "TimeoutCollateral");
paymentReasonToString.set(PaymentReason.JOBPAYMENT, "JobPayment");
paymentReasonToString.set(PaymentReason.MEDIATIONFEE, "MediationFee");

export function getPaymentReason(paymentReasonInt: PaymentReason): string {
  return paymentReasonToString.get(paymentReasonInt) || "PaidIn"; // Default to "PaidIn" if not found
}

enum PaymentDirection {
  PAID_IN = 0,
  PAID_OUT = 1,
  REFUNDED = 2,
  SLASHED = 3,
}

const paymentDirectionToString = new Map<PaymentDirection, string>();
paymentDirectionToString.set(PaymentDirection.PAID_IN, "PaidIn");
paymentDirectionToString.set(PaymentDirection.PAID_OUT, "PaidOut");
paymentDirectionToString.set(PaymentDirection.REFUNDED, "Refunded");
paymentDirectionToString.set(PaymentDirection.SLASHED, "Slashed");

export function getPaymentDirection(paymentDirectionInt: PaymentDirection): string {
  return paymentDirectionToString.get(paymentDirectionInt) || "PaidIn"; // Default to "PaidIn" if not found
}

export function handlePayment(event: PaymentEvent): void {
  let job = Job.load(event.params.dealId)

  if (!job) {
    // create new job
    job = new Job(event.params.dealId)
    job.createdAtTimestamp = event.block.timestamp
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
    // Initialize state for new job
    job.state = getJobState(JobState.DEALNEGOTIATING)
  } else {
    // update existing job
    job.lastModifiedTimestamp = event.block.timestamp
    job.durationSeconds = job.lastModifiedTimestamp.minus(job.createdAtTimestamp)
  }

  // Update state based on payment direction
  if (event.params.direction == PaymentDirection.PAID_IN) {
    job.state = getJobState(JobState.DEALNEGOTIATING)
  } else if (event.params.direction == PaymentDirection.PAID_OUT || 
             event.params.direction == PaymentDirection.REFUNDED || 
             event.params.direction == PaymentDirection.SLASHED) {
    job.state = getJobState(JobState.RESULTS_ACCEPTED)
  }

  job.save()

  // Create a JobHistory entity with explicit type conversion
  const jobHistoryId = job.state + "-" + event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  let jobHistory = new JobHistory(jobHistoryId)
  jobHistory.job = job.id
  jobHistory.timestamp = event.block.timestamp
  jobHistory.state = job.state
  jobHistory.payee = event.params.payee
  jobHistory.amount = event.params.amount
  jobHistory.reason = getPaymentReason(event.params.reason)
  jobHistory.direction = getPaymentDirection(event.params.direction)

  jobHistory.save()
}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
