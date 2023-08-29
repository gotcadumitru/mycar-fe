export type EditCarSliceState = {
  formFields: CarFormDataFullType
}

export type CarFormDataType = {
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
export type CarFormDataFullType = {
  [K in keyof CarFormDataType]: {
    value: CarFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}
