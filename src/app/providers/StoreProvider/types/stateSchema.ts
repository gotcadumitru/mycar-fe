import type { CarSliceState } from 'enteties/car'
import { FuelSliceState } from 'enteties/fuel'
import { LeasingSliceState } from 'enteties/leasing'
import { OwnershipSliceState } from 'enteties/ownership'
import type { UserSliceState } from 'enteties/user'
import type { VehicleSliceState } from 'enteties/vehicle'
import type { VignetteSliceState } from 'enteties/vignette'
import type { EditCarSliceState } from 'features/car/car-edit-form'
import type { UiSliceState } from '../slices/ui'

export interface StateSchema {
  ui: UiSliceState
  editCar: EditCarSliceState
  car: CarSliceState
  user: UserSliceState
  leasing: LeasingSliceState
  vehicle: VehicleSliceState
  fuel: FuelSliceState
  ownership: OwnershipSliceState
  vignette: VignetteSliceState
}

export type StateSchemaKey = keyof StateSchema
