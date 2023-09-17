import type { FuelSliceState } from 'enteties/fuel'
import type { LeasingSliceState } from 'enteties/leasing'
import type { OwnershipSliceState } from 'enteties/ownership'
import type { TyreSliceState } from 'enteties/tyre'
import type { UserSliceState } from 'enteties/user'
import type { VehicleSliceState } from 'enteties/vehicle'
import type { VehicleBrandSliceState } from 'enteties/vehicleBrand'
import type { VehicleDocumentSliceState } from 'enteties/vehicleDocument'
import type { VehicleModelSliceState } from 'enteties/vehicleModel'
import type { VehicleTypeSliceState } from 'enteties/vehicleType'
import type { VignetteSliceState } from 'enteties/vignette'
import type { AuthSliceState } from 'features/auth/model/types/authTypes'
import type { EditVehicleSliceState } from 'features/vehicle/vehicleEditForm'
import type { VehicleDocumentEditSliceState } from 'features/vehicleDocumentEdit'
import type { UiSliceState } from '../slices/ui'

export interface StateSchema {
  ui: UiSliceState
  editVehicle: EditVehicleSliceState
  vehicle: VehicleSliceState
  user: UserSliceState
  leasing: LeasingSliceState
  vehicleType: VehicleTypeSliceState
  fuel: FuelSliceState
  ownership: OwnershipSliceState
  vignette: VignetteSliceState
  tyre: TyreSliceState
  vehicleBrand: VehicleBrandSliceState
  vehicleModel: VehicleModelSliceState
  auth: AuthSliceState
  vehicleDocument: VehicleDocumentSliceState
  vehicleDocumentEdit: VehicleDocumentEditSliceState
}

export type StateSchemaKey = keyof StateSchema
