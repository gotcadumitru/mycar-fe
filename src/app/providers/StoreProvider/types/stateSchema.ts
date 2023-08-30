import type { CarSliceState } from 'enteties/car'
import type { FuelSliceState } from 'enteties/fuel'
import type { LeasingSliceState } from 'enteties/leasing'
import type { OwnershipSliceState } from 'enteties/ownership'
import type { TyreSliceState } from 'enteties/tyre'
import type { UserSliceState } from 'enteties/user'
import type { VehicleSliceState } from 'enteties/vehicle'
import type { VehicleBrandSliceState } from 'enteties/vehicleBrand'
import type { VehicleModelSliceState } from 'enteties/vehicleModel'
import type { VignetteSliceState } from 'enteties/vignette'
import type { AuthSliceState } from 'features/auth/model/types/authTypes'
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
  tyre: TyreSliceState
  vehicleBrand: VehicleBrandSliceState
  vehicleModel: VehicleModelSliceState
  auth: AuthSliceState
}

export type StateSchemaKey = keyof StateSchema
