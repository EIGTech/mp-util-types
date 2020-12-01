export type DatabaseResponse<T> = {
  PK: string
  SK: string
  lastUpdated: string
} & T

export type VersionedDatabaseResponse<T> = {
  PK: string
  SK: string
  createdBy: string
  createdOn: string
} & T

export type HistoricalDatabaseResponse<T> = {
  modifiedBy: string
  modifiedOn: string
} & VersionedDatabaseResponse<T>