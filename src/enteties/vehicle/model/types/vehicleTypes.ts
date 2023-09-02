import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'
import type { ModifyProperties } from 'shared/types/ui'
import type { FileInputType } from 'shared/ui/File'

export type VehicleSliceState = {
  allVehiclesOfCurrentUser: Vehicle[]
  selectedVehicle: Vehicle | null
}

export type VehicleFormDataType = {
  image: FileInputType[]
  type: number | null
  brand: number | null
  model: number | null
  yearOfProduction: number | null
  registrationNumber: string
  vin: string
  power: string
  cylinderCapacity: string
  numberOfSeats: string
  color: string
  maximumAuthorisedMass: string
  civSeries: string
  ownedBy: number | null
  isLeasingVehicle: boolean
  leasingCompany: number | null
  summerTyreSize: number | null
  dotSummerTyre: string
  winterTyreSize: number | null
  dotWinterTyre: string
  fuelType: number | null
  fuelConsumptionUrb: string
  fuelConsumptionMix: string
  fuelConsumptionExtraUrb: string
  usagePercentUrb: string
  usagePercentMix: string
  usagePercentExtraUrb: string
}

export type VehicleCreateBody = ModifyProperties<
  VehicleFormDataType,
  | 'fuelConsumptionUrb'
  | 'fuelConsumptionMix'
  | 'fuelConsumptionExtraUrb'
  | 'usagePercentUrb'
  | 'usagePercentMix'
  | 'usagePercentExtraUrb'
  | 'power'
  | 'cylinderCapacity'
  | 'numberOfSeats'
  | 'maximumAuthorisedMass',
  number
> & {
  userId: string
}

export type Vehicle = VehicleCreateBody & {
  uid: string
}

export type VehicleFormDataFullType = {
  [K in keyof VehicleFormDataType]: FormDataField<VehicleFormDataType[K]>
}
