import { Claim } from "./claims";
import { FNOLCollectedAttributes } from "./fnol";

export interface SQSMessage {
  method: string
  documentType: string
  timestamp: string
}

export interface ClaimSQSMessage extends SQSMessage {
  method: "ADD" | "UPDATE"
  documentType: "CLAIM"
  data: Claim
}

export interface FnolSQSMessage extends SQSMessage {
  method: "ADD"
  documentType: "FNOL"
  claimNumber: string
  data: FNOLCollectedAttributes
}