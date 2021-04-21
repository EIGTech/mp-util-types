import { Document } from "./documents"

export interface RMDocument extends Document {
  source: "RM"
}

export type RMCorrespondence = {
  claimNumber: string
  correspondence: string | null
  job: string | null
  jobJobId: string
  jobId: number
  correspondenceId: number
  correspondenceDateTime: string
  correspondenceTitle: string
  correspondenceType: "" | "Collections" | "Email" | "Fax" | "Field Note" | "Job Note" | "Letter" | "Note" | "Payment" | "Phone" | "Picture/File" | "Text" | "XA - Note"
  contFullName: string | null
  correspondenceTo: string | null
  correspondenceFilePath: string | null
  correspondenceBody: string
  correspondenceTypeId: number
  correspondenceStatusId: number | null
  cmbDesc: string | null
  taskId: number
  taskStatus: string | null
  taskEmpId: number | null
  taskResolution: string | null
  taskDueDate: string | null
  correspondenceStatus: string
  correspondenceCreatedBy: string | null
  correspondenceCreatedDate: string
  correspondenceCc: string | null
  correspondenceIsFrom: string | null
  correspondenceInitiate: string
  marketingReceiptNumber: number | null
  marketingAmountSpent: number | null
  correspondenceToContactId: number | null
  showInPortal: boolean | null
  showInProjectPortal: boolean | null
  showInVendorPortal: boolean | null
  taskDescription: string | null
  taskSubject: string | null
  sentToXact: boolean | null
  publicAccess: boolean
}

export type RMKPIHistory = {
  "Customer Contacted"?: KpiRange
  "Site Inspection Appt"?: KpiRange
  "Adj Est Uploaded"?: KpiRange
  "QA Estimate Uploaded"?: KpiRange
  "WA/Contract Signed"?: KpiRange
  Walkthough?: KpiRange
  Punchlist?: KpiRange
  Final?: KpiRange
}
type KpiRange = {
  level: KpiLevel
  firstDate: string
  lastDate: string
}
type KpiLevel = "Green" | "Yellow" | "Red" | "Unknown"
type Kpi = {
  kpi: KpiName
  level: KpiLevel
  date: string
}
type KpiName = keyof RMKPIHistory

export type GanttStatus = {
  statusName: string
  statusId: string
  startDate: string
  updateDate: string
  updatedBy: {
    fullName: string
    id: string
    email?: string
    phone?: string
  }
}

export type RMClaim = {
  currentProgressKPIStatus: KpiLevel
  coverages:
  | (
    | {
      coverageType: string
      policyLimit: string
      deductable: string
    }
    | undefined
  )[]
  | undefined
  lossDescription: string | undefined
  kpiHistory: Kpi[]
  status: "Active"
  internalId: number
  jobId: string
  address: {
    line1: string
    line2: string | null
    city: string
    state: string
    zip: string
    full: string
  }
  claimNumber: string
  startDate: string | null
  lastChangedDate: string
  createdDate: string
  progressId: number
  progressName: string
  serviceArea: string
  jobName: string
  jobType: string
  staffName?: string
  superName?: string
  primaryContact: {
    fullName: string
    firstName: string
    lastName: string
    phone: string
    phoneType: string | null
    email: string
  }
  location: [number, number]
  policyNumber?: string
  overallDeductable?: string
  policyInception?: string
  policyEnd?: string,
  ganttStatus?: GanttStatus[]
}