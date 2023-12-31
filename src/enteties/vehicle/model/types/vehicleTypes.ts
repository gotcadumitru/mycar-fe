import { CollectionBaseType } from 'shared/api/firebase'
import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'
import type { FileCollectionType, FileInputType } from 'shared/ui/File'

export type VehicleSliceState = {
  allVehiclesOfCurrentUser: VehicleWithFiles[]
}

export type VehicleFormDataType = {
  files: FileInputType[]
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
  fuelConsumptionExtraUrb: string
  usagePercentUrb: string
  usagePercentExtraUrb: string
}

export type VehicleCreateBody = ModifyProperties<
  ModifyProperties<VehicleFormDataType, 'files', FileInputType[]>,
  | 'fuelConsumptionUrb'
  | 'fuelConsumptionExtraUrb'
  | 'usagePercentUrb'
  | 'usagePercentExtraUrb'
  | 'power'
  | 'cylinderCapacity'
  | 'numberOfSeats'
  | 'maximumAuthorisedMass',
  number
> & {
  userId: string
}

export type Vehicle = CollectionBaseType &
  Omit<VehicleCreateBody, 'files'> & {
    uid: string
    files: string[]
  }

export type VehicleWithFiles = Omit<Vehicle, 'files'> & {
  files: FileCollectionType[]
}

export type VehicleFormDataFullType = {
  [K in keyof VehicleFormDataType]: FormDataField<VehicleFormDataType[K]>
}
