export type {
  TyreSliceState,
  TyreSizeType,
  VehicleTypeWithTyreSizes,
} from './model/types/tyreTypes'

export { fetchTyreSizesFroVehicleTypeIdThunk } from './model/slice/tyreThunks'

export { tyreReducer, tyreActions } from './model/slice/tyreSlice'

export { TyreActions } from './model/consts/tyreConsts'
