import type { ThunkRequestFetchStatus } from 'shared/types/ui'

export type VehicleModelSliceState = {
  vehicleModels: VehicleTypeAndBrandWithModel[]
  vehicleModelsWithFetchStatus: ThunkRequestFetchStatus
}

export type VehicleTypeAndBrandWithModel = {
  vehicleTypeId: number
  vehicleBrandId: number
  models: VehicleModelType[]
}

export type VehicleModelType = {
  id: number
  name: string
}

export type FetchVehicleModelParams = {
  vehicleTypeId: number
  vehicleBrandId: number
}
