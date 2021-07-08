/**
 * @deprecated Use the new mapping-platform-policies service types `npm i @eigtech/fnol` {@link https://github.com/EIGTech/mapping-platform-fnol}
 */
export type ServiceArea = {
  state: string
  areaName: string
  aliases: string[]
  areaEnabled: boolean
  servicesProvided: string[]
  responseTime: number
  subsRequired: boolean
  primaryContactName: string
  primaryContactPhone: string
  primaryContactEmail: string
  contactEmails: string[]
  id: string
  assignToEig: boolean
}
