export type {
  VehicleSliceState,
  VehicleWithDetailsType,
  VehicleType,
} from './model/types/vehicleTypes'

export { fetchAllVehicleTypesThunk } from './model/slice/vehicleThunks'

export { vehicleReducer, vehicleActions } from './model/slice/vehicleSlice'

export { VehicleActions } from './model/consts/vehicleConsts'
