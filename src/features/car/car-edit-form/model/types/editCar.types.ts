import { CarOwnedBy } from 'enteties/car'

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
  fuelConsumptionUrb: string
  fuelConsumptionMix: string
  fuelConsumptionExtraurb: string
  usagePercentUrb: string
  usagePercentMix: string
  usagePercentExtraurb: string
}
export type CarFormDataFullType = {
  [K in keyof CarFormDataType]: {
    value: CarFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}
