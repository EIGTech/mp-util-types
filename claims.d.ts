import { FNOLCollectedAttributes } from "./fnol"
import { LossType } from "./loss"

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

type ClaimStatus = {
  statusName: string
  statusId: string
  updateDate: string
  updatedBy: BasicContact
}

export interface Claim {
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
  fnol?: FNOLCollectedAttributes
  claimSource: string
}

export interface RestorationManagerClaim extends Claim {
  claimSource: "RESTORATION_MANAGER"
  restorationStaffName: string
  restorationSuperName: string
  currentRestorationProgressId: number
  currentProgressName: string
  restorationInternalId: number
  restorationJobId: string
}
