import type { Timestamp } from 'firebase/firestore'

export type DataServiceCollectionWithFiles<T> = {
  files: T[]
}

export type CollectionBaseType = {
  createdAt: Timestamp
  createdBy: string
  modifiedAt: Timestamp
  modifiedBy: string
  deletedAt: Timestamp | null
  deletedBy: string | null
}
