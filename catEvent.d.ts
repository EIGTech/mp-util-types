import {LossType} from "./claims"

export type Location = {
  state?: string
  county?: string
}

export type CatEvent = {
  id?: string,
  eventName: string,
  effectiveStartDate: Date | string,
  effectiveEndDate: Date | string,
  affectedLocations: Location[],
  lossType: LossType
}