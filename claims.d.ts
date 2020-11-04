type Address = {
  line1: string
  line2?: string
  city: string
  state: string
  county?: string
  zip: string
}

type BasicContact = {
  fullName: string
  id: string
  email?: string
  phone?: string
}

type PrimaryContactOptionals = "fullName" | "id" | "email" | "phone"

type PrimaryContact = { [P in PrimaryContactOptionals]?: BasicContact[P] | null } &
  Omit<BasicContact, PrimaryContactOptionals> & 
  {
    firstName: string
    lastName: string
    phoneType: string | null
  }
  
type LossType = "Hurricane" |
  "Fire" |
  "Flood" |
  "Water" |
  "Wind" |
  "Lightning" |
  "Hail" |
  "LiabilityInjuryPhysicalDamage" |
  "Sinkhole" |
  "Vandalism" |
  "Theft" |
  "Other" |
  "LossAssessment" |
  "LiabilityAnimal" |
  "LiabilityLead" |
  "CausedByAnimal" |
  "PersonalInjuryProtection" |
  "MedicalPayments"

type ClaimStatus = {
  statusName: string
  statusId: string
  updateDate: string
  updatedBy: BasicContact
}

export type Claim = {
  claimNumber: string
  lossAddress: Address
  lossDate: string
  lossDescription: string
  lossType?: LossType
  claimStatus?: "OPEN" | "CLOSED" | "REOPENED"
  createdDate?: string
  status: ClaimStatus[]
  location?: [number, number]
  policyNumber: string
  primaryContact: PrimaryContact
  adjuster?: BasicContact
  fileExaminer?: BasicContact
  thirdPartyAdjuster?: BasicContact
}