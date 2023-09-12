import { CollectionBaseType } from 'shared/api/firebase'
import { FormDataField } from 'shared/lib/utils/checkIfExistErrors'
import { FileCollectionType, FileInputType } from 'shared/ui/File'
import { VehicleDocumentType } from '../consts/vehicleDocumentConsts'

export type VehicleDocumentSliceState = {
  vehiclesDocuments: VehicleDocumentWithFiles[]
}

export type VehicleDocumentFormDataType = {
  files: FileInputType[]
  vehicleId: string
  name: string
  expirationDate: string
  notes: string
  type: VehicleDocumentType
}

export type VehicleDocumentCreateBody = VehicleDocumentFormDataType & {
  vehicleId: string
}

export type VehicleDocument = CollectionBaseType &
  Omit<VehicleDocumentCreateBody, 'files'> & {
    uid: string
    files: string[]
  }

export type VehicleDocumentWithFiles = Omit<VehicleDocument, 'files'> & {
  files: FileCollectionType[]
}

export type VehicleDocumentFormDataFullType = {
  [K in keyof VehicleDocumentFormDataType]: FormDataField<VehicleDocumentFormDataType[K]>
}
