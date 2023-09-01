import type { VehicleCreateBody, Vehicle } from 'enteties/vehicle'
import { addDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { createCollection } from 'shared/api/firebase/firebaseUtils'

const vehicleCollection = createCollection<Vehicle>('vehicle')

class VehicleDataService {
  getAll = async () => {
    const allVehicles = await getDocs(vehicleCollection)
    return allVehicles.docs.map((vehicleDoc) => vehicleDoc.data())
  }

  getAllByUserId = async (userId: string) => {
    const queryByUserId = query(vehicleCollection, where('userId', '==', userId))
    const allUserVehicles = await getDocs(queryByUserId)
    return allUserVehicles.docs.map((vehicleDoc) => vehicleDoc.data())
  }

  getVehicleRefById = (vehicleId: string) => doc(vehicleCollection, vehicleId)

  getVehicleById = async (vehicleId: string) => {
    const vehicleRef = this.getVehicleRefById(vehicleId)
    const vehicle = await getDoc(vehicleRef)
    if (!vehicle.exists()) return null
    return vehicle.data()
  }

  createVehicle = async (newVehicle: VehicleCreateBody) => {
    const newDoc = await addDoc(vehicleCollection, newVehicle)
    const addedDoc = await this.getVehicleById(newDoc.id)
    return addedDoc
  }

  //
  // update(id: string, value: any) {
  //   return db.doc(id).update(value)
  // }
  //
  // delete(id: string) {
  //   const d = await deleteDoc(vehicleCollection)
  //   return
  // }
}

export const vehicleDataService = new VehicleDataService()
