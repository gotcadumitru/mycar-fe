import type { ThunkRequestFetchStatus } from 'shared/types/ui'

export type TyreSliceState = {
  tyreSizes: VehicleTypeWithTyreSizes[]
  tyreSizesWithFetchStatus: ThunkRequestFetchStatus
}

export type VehicleTypeWithTyreSizes = {
  id: number
  sizes: TyreSizeType[]
}

export type TyreSizeType = {
  id: number
  name: string
}
