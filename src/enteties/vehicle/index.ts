export type {
  VehicleCreateBody,
  VehicleFormDataFullType,
  VehicleFormDataType,
  VehicleSliceState,
  VehicleWithFiles,
  Vehicle,
} from './model/types/vehicleTypes'
export { useVehicleWithDetails } from './hooks/useVehicleWithDetails'
export {
  fetchAllVehiclesByUserId,
  createNewVehiclesForUserId,
  editVehiclesForUserId,
  softDeleteVehicleById,
} from './model/slice/vehicleThunks'

export {
  getVehicleFormValues,
  calculateAverageAge,
  calculateAverageConsumption,
} from './utils/vehicleUtils'

export { vehicleReducer, vehicleActions } from './model/slice/vehicleSlice'

export { VehicleActions } from './model/consts/vehicleConsts'
