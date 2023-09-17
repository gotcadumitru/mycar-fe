import type { ThunkRequestFetchStatus } from 'shared/types/ui'

export type VehicleBrandSliceState = {
  vehicleBrands: VehicleTypeWithBrand[]
  vehicleBrandsWithFetchStatus: ThunkRequestFetchStatus
}

export type VehicleTypeWithBrand = {
  id: number
  brands: VehicleBrandsType[]
}

export type VehicleBrandsType = {
  id: number
  name: string
}
