import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import { VehicleDocumentType } from '../model/consts/vehicleDocumentConsts'
import {
  VehicleDocumentCreateBody,
  VehicleDocumentFormDataFullType,
  VehicleDocumentFormDataType,
  VehicleDocumentWithFiles,
} from '../model/types/vehicleDocumentTypes'

export const getVehicleDocumentFormValues = ({
  files = [],
  name = '',
  type = VehicleDocumentType.General,
  vehicleId = '',
  expirationDate = '',
  notes = '',
  creationDate = '',
}: Partial<VehicleDocumentFormDataType>): VehicleDocumentFormDataFullType => ({
  files: {
    value: files,
    errorMessage: '',
    validations: [],
  },
  name: {
    value: name,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  type: {
    value: type,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  vehicleId: {
    value: vehicleId,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  expirationDate: {
    value: expirationDate,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  notes: {
    value: notes,
    errorMessage: '',
    validations: [],
  },
  creationDate: {
    value: creationDate,
    errorMessage: '',
    validations: [],
  },
})

export const vehicleDocumentFormDataToCreateBody = (
  vehicleDocumentFormData: VehicleDocumentFormDataFullType,
): VehicleDocumentCreateBody => ({
  files: vehicleDocumentFormData.files.value,
  name: vehicleDocumentFormData.name.value,
  type: vehicleDocumentFormData.type.value,
  vehicleId: vehicleDocumentFormData.vehicleId.value,
  creationDate: vehicleDocumentFormData.creationDate.value,
  expirationDate: vehicleDocumentFormData.expirationDate.value,
  notes: vehicleDocumentFormData.notes.value,
})

export const vehicleDocumentToFormData = ({
  files,
  ...vehicleDocument
}: VehicleDocumentWithFiles) =>
  getVehicleDocumentFormValues({
    files: files.map((file) => ({
      file: file.fileUrl,
      uid: file.uid,
      fileUrl: file.fileUrl,
      name: file.name,
      mimetype: file.mimetype,
      size: file.size,
    })),
    ...vehicleDocument,
  })
