export type {
  VehicleCreateBody,
  VehicleFormDataFullType,
  VehicleFormDataType,
  VehicleSliceState,
  Vehicle,
} from './model/types/vehicleTypes'
export { useUserVehicles } from './hooks/useUserVehicles'
export { fetchAllVehiclesByUserId, createNewVehiclesForUserId } from './model/slice/vehicleThunks'

export {
  getVehicleFormValues,
  calculateAverageAge,
  calculateAverageConsumption,
} from './utils/vehicleUtils'

export { vehicleReducer, vehicleActions } from './model/slice/vehicleSlice'

export { VehicleActions } from './model/consts/vehicleConsts'
