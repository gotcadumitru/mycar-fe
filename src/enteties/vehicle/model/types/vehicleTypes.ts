import { FetchStatus } from 'shared/api'

export type VehicleSliceState = {
  vehicleTypes: VehicleType[]
  vehiclesWithDetails: VehicleWithDetailsType[]
  vehiclesWithDetailsFetchStatus: VehiclesWithDetailsFetchStatus
}

type VehiclesWithDetailsFetchStatus = {
  [key: number]: FetchStatus
}

export type VehicleType = {
  id: number
  name: string
}

export type TyreSizeType = {
  id: number
  name: string
}

export type VehicleBrandsType = {
  id: number
  name: string
  vehicleModels: VehicleBrandsType[]
}

export type VehicleWithDetailsType = {
  id: number
  tyreSize: TyreSizeType[]
  vehicleBrands: VehicleBrandsType[]
}
