import { Policy } from "./policies"
import { ServiceArea } from "./serviceAreas"

export type FNOLEventName = "FNOLApproved" | "FNOLError" | "unknown"

export type FNOLEventData<T extends FNOLEventName> = T extends "FNOLApproved"
  ? { data: FNOLApprovedMessage }
  : T extends "FNOLError"
  ? { data: FNOLErrorMessage }
  : { data: unknown }

export type FNOLEvent<T extends FNOLEventName> = {
  eventName: FNOLEventName
  eventTime: string
} & FNOLEventData<T>

export type FNOLCollectedAttributes = {
  isEmergency: boolean
  policyNumber: string
  lossType: string
  lossDate: string
  verifiedEmail: string
  verifiedPhone: string
  freeformDescription: string
  damageDiscoveredDate: string
  damagedPropertyAreas: string[]
  damageTypes: string[]
  numberRoomsAffected: number
  reportedBy: string
  reportedByEmail: string
  reportedByPhone: string
  additionalNotes: string
  standingWater: boolean | null
  containmentLevel: string
  exteriorDebrisDamage: boolean | null
  dwellingHabitable: boolean | null
  openToElements: boolean | null
  eventName?: string
  claimantName?: string
  claimantPhone?: string
  claimantEmail?: string
  claimantRepresentationName?: string
  claimantRepresentationPhone?: string
  claimantRepresentationEmail?: string
  imageTransferId: string
  chatbotUserFirstName?: string
  chatbotUserLastName?: string
}

export type FNOLSubmittedPayload = {
  policyNumber:string 
  reportedByName:string 
  lossType:string 
  lossDate:string 
  lossDescription:string 
  lossDwellingExterior:boolean
  lossRoof:string 
  lossSiding:string 
  lossTreeDebris:string 
  lossDwellingInterior:boolean
  lossRoomsAffected:string 
  lossOtherStructures:boolean
  lossFence:string 
  lossShed:string 
  lossDriveway:string 
  lossPool:string 
  lossOtherItems:boolean
  lossFoodSpoilage:boolean
  lossHotelExpenses:string 
  address1:string 
  address2:string 
  city:string 
  state:string 
  postalCode:string 
  contactNamePrimary:string 
  contactNameSecondary:string 
  email:string 
  phone1:string 
  phone1Type:string 
  willEIGHandle:boolean
  isEmergency:boolean
}

export type FNOLSubmissionSuccessResponse = {
  submittedPayload: FNOLSubmittedPayload
  submissionResponse: {
    success: true
    results: {
      claimNumber: string
      isDuplicate: boolean
      isPriority: boolean
      priorityReason?: string
      additionalProperties?: {
        [index: string]: any //An explicit any here is okay, it just puts the ball in the handler's court to understand what these properties might be
      }
    }
  }
}

export type FNOLSubmissionErrorResponse = {
  submittedPayload: FNOLSubmittedPayload
  submissionResponse: {
    success: false
    errorMessage: string
  }
}

export type FNOLApprovedMessage = {
  collectedAttributes: FNOLCollectedAttributes
  suggestedAssignment?: ServiceArea
  policy: Policy
} & FNOLSubmissionSuccessResponse

export type FNOLErrorMessage = {
  collectedAttributes: FNOLCollectedAttributes
  suggestedAssignment?: ServiceArea
  policy: Policy
} & FNOLSubmissionErrorResponse

export type FNOLSubmission = {
  collectedAttributes: FNOLCollectedAttributes
  suggestedAssignment?: ServiceArea
  hasPotentialCoverageIssue: boolean
  policy: Policy
}

export type InvokeFnolResponse = {
  success: boolean
  payload: FNOLSubmissionSuccessResponse | FNOLSubmissionErrorResponse
}

export type SubmitFnolRequest = FNOLCollectedAttributes

export type SubmitFnolResponse = Partial<FNOLSubmissionSuccessResponse["submissionResponse"]["results"] & {
  suggestedAssignment?: ServiceArea
  hasPotentialCoverageIssue?: boolean
  error: boolean,
  errorMessage?: string 
}>

export type FnolNote = {
  note: string
  reportedBy: string
  policyNumber: string
  claimNumber: string
}