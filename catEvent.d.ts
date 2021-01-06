export type Location = {
  state?: string
  county?: string
}

export type LossType = "Hurricane" |
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

export type CatEvent = {
  id?: string,
  eventName: string,
  effectiveStartDate: Date | string,
  effectiveEndDate: Date | string,
  affectedLocations: Location[],
  lossType: LossType
}