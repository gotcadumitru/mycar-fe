import type { Vehicle, VehicleCreateBody } from 'enteties/vehicle'
import { createCollectionFromPath } from '../firebaseUtils'
import DataServiceWithFiles from './dataServiceWithFiles'
import { FileStorageService } from './fileStorageService'

class VehicleDataService extends DataServiceWithFiles<VehicleCreateBody, Vehicle> {
  getAllByUserId = async (userId: string) => this.getAllByFieldPath('userId', '==', userId)
}

export const vehicleFileStorage = new FileStorageService('userVehicleFiles')
export const vehicleCollection = createCollectionFromPath<Vehicle>('vehicle')

export const vehicleDataService = new VehicleDataService(vehicleCollection, vehicleFileStorage)
