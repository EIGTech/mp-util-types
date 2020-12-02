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
  damagedPropertyAreas: string[]
  damageTypes: string[]
  numberRoomsAffected: string
  reportedBy: string
  reportedByEmail: string
  reportedByPhone: string
  additionalNotes: string
  standingWater: boolean
  containmentLevel: string
  exteriorDebrisDamage: boolean
  dwellingHabitable: boolean
  openToElements: boolean
  eventName: string
  claimantName: string
  claimantEmail: string
  claimantPhone: string
  claimantRepresentationName: string
  claimantRepresentationEmail: string
  claimantRepresentationPhone: string
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
  claimNumber:string 
  isDuplicateClaim:boolean
  eventName:string 
  otrEligible:boolean
}

export type FNOLSubmissionSuccessResponse = {
  success: true
  results: {
    claimNumber: string
  }
}

export type FNOLSubmissionErrorResponse = {
  success: false
  errorMessage: string
}

export type FNOLApprovedMessage = {
  collectedAttributes: FNOLCollectedAttributes
  submittedPayload: FNOLSubmittedPayload
  serviceArea: ServiceArea
  policy: Policy
  submissionResponse: FNOLSubmissionSuccessResponse
}

export type FNOLErrorMessage = {
  collectedAttributes: FNOLCollectedAttributes
  submittedPayload: FNOLSubmittedPayload
  serviceArea: ServiceArea
  policy: Policy
  submissionResponse: FNOLSubmissionErrorResponse
}

export type FNOLSubmission = {
  isEmergency: boolean
  policyNumber: string
  lossType: string
  lossDate: string
  verifiedEmail: string
  verifiedPhone: string
  freeformDescription: string
  damageDiscoveredDate: string
  damagedPropertyArea: string[]
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
}