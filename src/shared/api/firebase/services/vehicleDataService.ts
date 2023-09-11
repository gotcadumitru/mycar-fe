import type { Vehicle, VehicleCreateBody, VehicleWithFiles } from 'enteties/vehicle'
import { createCollectionFromPath } from '../firebaseUtils'
import DataServiceWithFiles from './dataServiceWithFiles'
import { FileStorageService } from './fileStorageService'

class VehicleDataService extends DataServiceWithFiles<VehicleCreateBody, Vehicle> {
  getVehicleById = async (vehicleId: string): Promise<VehicleWithFiles> => {
    const vehicle = await this.getById(vehicleId)
    const vehicleWithFiles = (await this.getWithFiles([vehicle]))[0]
    return vehicleWithFiles
  }

  getAllByUserId = async (userId: string): Promise<VehicleWithFiles[]> => {
    const allVehiclesByFieldPath = await this.getAllByFieldPath('userId', '==', userId)
    if (!allVehiclesByFieldPath.length) return []
    return this.getWithFiles(allVehiclesByFieldPath)
  }
}

export const vehicleFileStorage = new FileStorageService('userVehicleFiles')
export const vehicleCollection = createCollectionFromPath<Vehicle>('vehicle')

export const vehicleDataService = new VehicleDataService(vehicleCollection, vehicleFileStorage)
