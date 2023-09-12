import type {
  VehicleDocument,
  VehicleDocumentCreateBody,
  VehicleDocumentWithFiles,
} from 'enteties/vehicleDocument'
import { createCollectionFromPath } from '../firebaseUtils'
import DataServiceWithFiles from './dataServiceWithFiles'
import { FileStorageService } from './fileStorageService'

class VehicleDocumentDataService extends DataServiceWithFiles<
  VehicleDocumentCreateBody,
  VehicleDocument
> {
  getVehicleDocumentByDocumentId = async (
    vehicleDocumentId: string,
  ): Promise<VehicleDocumentWithFiles> => {
    const vehicleDocument = await this.getById(vehicleDocumentId)
    const vehicleDocumentWithFiles = (await this.getWithFiles([vehicleDocument]))[0]
    return vehicleDocumentWithFiles
  }

  getAllVehicleDocumentsByVehicleId = async (
    vehicleId: string,
  ): Promise<VehicleDocumentWithFiles[]> => {
    const allVehicleDocumentsByFieldPath = await this.getAllByFieldPath(
      'vehicleId',
      '==',
      vehicleId,
    )
    if (!allVehicleDocumentsByFieldPath.length) return []
    return this.getWithFiles(allVehicleDocumentsByFieldPath)
  }
}

export const vehicleDocumentFileStorage = new FileStorageService('vehicleDocumentFiles')
export const vehicleDocumentCollection =
  createCollectionFromPath<VehicleDocument>('vehicleDocument')

export const vehicleDocumentDataService = new VehicleDocumentDataService(
  vehicleDocumentCollection,
  vehicleDocumentFileStorage,
)
