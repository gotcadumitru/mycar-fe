export type {
  VehicleBrandSliceState,
  VehicleBrandsType,
  VehicleTypeWithBrand,
} from './model/types/vehicleBrandTypes'

export { fetchVehicleBrandsFroVehicleTypeIdThunk } from './model/slice/vehicleBrandThunks'

export { vehicleBrandReducer, vehicleBrandActions } from './model/slice/vehicleBrandSlice'

export { VehicleBrandActions } from './model/consts/vehicleBrandConsts'
