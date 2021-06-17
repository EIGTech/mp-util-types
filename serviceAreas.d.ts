export type ServiceArea = {
  state:string 
  areaName:string 
  aliases:string[]
  areaEnabled:boolean 
  servicesProvided:string[]
  responseTime:number
  subsRequired:boolean
  primaryContactName:string 
  primaryContactPhone:string 
  primaryContactEmail:string 
  contactEmails:string[]
  id: string
  assignToEig: boolean
}