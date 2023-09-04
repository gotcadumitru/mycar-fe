import type { Vehicle, VehicleCreateBody } from 'enteties/vehicle'
import { VehicleWithFiles } from 'enteties/vehicle/model/types/vehicleTypes'
import { documentId } from 'firebase/firestore'
import { fileDataService } from 'shared/api/firebase/services/fileDataService'
import { createCollectionFromPath } from '../firebaseUtils'
import DataServiceWithFiles from './dataServiceWithFiles'
import { FileStorageService } from './fileStorageService'

class VehicleDataService extends DataServiceWithFiles<VehicleCreateBody, Vehicle> {
  getAllByUserId = async (userId: string): Promise<VehicleWithFiles[]> => {
    const allVehiclesByFieldPath = await this.getAllByFieldPath('userId', '==', userId)
    if (!allVehiclesByFieldPath.length) return []
    const fileIds = allVehiclesByFieldPath.reduce(
      (ids, vehicle) => [...ids, ...vehicle.files],
      [] as string[],
    )

    const files = await fileDataService.getAllByFieldPath(documentId(), 'in', fileIds)
    return allVehiclesByFieldPath.map((vehicle) => ({
      ...vehicle,
      files: vehicle.files.map((fileId) => files.find((file) => file.uid === fileId)!),
    }))
  }
}

export const vehicleFileStorage = new FileStorageService('userVehicleFiles')
export const vehicleCollection = createCollectionFromPath<Vehicle>('vehicle')

export const vehicleDataService = new VehicleDataService(vehicleCollection, vehicleFileStorage)
