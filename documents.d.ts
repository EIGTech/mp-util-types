export interface Document {
  id: string
  claimNumber: string
  url: string
  name: string
  description: string
  jobId: number
  createdDate: string | null
  modifiedBy: string | null
  modifiedDate: string | null
  lastUpdated?: string
  visibilityGroup: "public" | "private"
  source: "INSIGHT" | "USER" | "RM"
}