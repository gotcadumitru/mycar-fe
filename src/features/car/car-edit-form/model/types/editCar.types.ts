import { CarOwnedBy, FuelType } from 'enteties/car'

export type EditCarSliceState = {
  formFields: CarFormDataFullType
}

export type CarFormDataType = {
  type: string
  mark: string
  model: string
  yearOfProduction: string
  registrationNumber: string
  vin: string
  power: string
  cylinderCapacity: string
  numberOfSeats: string
  color: string
  maximumAuthorisedMass: string
  civSeries: string
  ownedBy: CarOwnedBy
  isLeasingVehicle: boolean
  leasingCompany: string
  summerTyreSize: string
  dotSummerTyre: string
  winterTyreSize: string
  dotWinterTyre: string
  fuelType: FuelType
  fuelConsumptionUrb: string
  fuelConsumptionMix: string
  fuelConsumptionExtraUrb: string
  usagePercentUrb: string
  usagePercentMix: string
  usagePercentExtraUrb: string
}
export type CarFormDataFullType = {
  [K in keyof CarFormDataType]: {
    value: CarFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}
