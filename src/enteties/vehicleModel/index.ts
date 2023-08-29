export type {
  VehicleModelSliceState,
  VehicleModelType,
  VehicleTypeAndBrandWithModel,
  FetchVehicleModelParams,
} from './model/types/vehicleModelTypes'

export { fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk } from './model/slice/vehicleModelThunks'

export { vehicleModelReducer, vehicleModelActions } from './model/slice/vehicleModelSlice'

export { VehicleModelActions } from './model/consts/vehicleModelConsts'
export { getIdFromVehicleTypeAndModel } from './model/utils/getIdFromVehicleTypeAndModel'
