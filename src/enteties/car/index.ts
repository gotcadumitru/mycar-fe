export type {
  Car,
  CreateCarBody,
  CarFromApi,
  EditCarBody,
  CarSliceState,
} from './model/types/car.types'

export { fetchAllCars } from './model/slice/carThunks'

export { mapCarFromApi, getCarFormValues } from './utils/car.utils'

export { carReducer, carActions } from './model/slice/carSlice'

export {
  CarActions,
  CarOwnedBy,
  CarOwnedByOptions,
  FuelType,
  FuelTypeOptions,
  CarOwnedByLabels,
  FuelTypeLabels,
  SummerTyreSizeOptions,
  SummerTyreSize,
} from './model/consts/carConsts'
