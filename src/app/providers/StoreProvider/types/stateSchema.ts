import type { UiSliceState } from 'app/providers/StoreProvider/slices/ui'
import type { CarSliceState } from 'enteties/car'
import type { UserSliceState } from 'enteties/user'
import type { EditCarSliceState } from 'features/car/car-edit-form'

export interface StateSchema {
  ui: UiSliceState
  editCar: EditCarSliceState
  car: CarSliceState
  user: UserSliceState
}

export type StateSchemaKey = keyof StateSchema
