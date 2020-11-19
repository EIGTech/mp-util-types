import { Claim } from "./claims";
import { Document } from "./documents";
import { FNOLCollectedAttributes } from "./fnol";
import { RMClaim, RMCorrespondence, RMDocument, RMKPIHistory } from "./restorationManager";

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

export interface DocumentSQSMessage extends SQSMessage {
  method: "ADD"
  documentType: "CLAIM_DOCUMENT"
  claimNumber: string
  data: Document
}

export interface RestorationManagerSQSMessage extends SQSMessage {
  method: "PUT"
  documentType: "RM_DOCUMENT" | "RM_CORRESPONDENCE" | "RM_KPI" | "RM_CLAIM"
  claimNumber: string
  data: RMDocument | RMCorrespondence | RMKPIHistory | RMClaim
}

export interface RMDocumentSQSMessage extends RestorationManagerSQSMessage {
  documentType: "RM_DOCUMENT"
  data: RMDocument
}

export interface RMCorrespondenceSQSMessage extends RestorationManagerSQSMessage {
  documentType: "RM_CORRESPONDENCE"
  data: RMCorrespondence
}

export interface RMKPIHistorySQSMessage extends RestorationManagerSQSMessage {
  documentType: "RM_KPI"
  data: RMKPIHistory
}

export interface RMClaimSQSMessage extends RestorationManagerSQSMessage {
  documentType: "RM_CLAIM"
  data: RMClaim
}