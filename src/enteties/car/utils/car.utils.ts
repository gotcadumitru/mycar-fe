import type { CarFormDataFullType, CarFormDataType } from 'features/car/car-edit-form'
import type { Car, CarFromApi } from '../model/types/car.types'

export const getCarFormValues = ({
  type = null,
  mark = null,
  model = null,
  yearOfProduction = null,
  registrationNumber = '',
  vin = '',
  power = '',
  cylinderCapacity = '',
  numberOfSeats = '',
  color = '',
  maximumAuthorisedMass = '',
  civSeries = '',
  ownedBy = null,
  isLeasingVehicle = false,
  leasingCompany = null,
  summerTyreSize = null,
  dotSummerTyre = '',
  winterTyreSize = null,
  dotWinterTyre = '',
  fuelType = null,
  fuelConsumptionUrb = '',
  fuelConsumptionMix = '',
  fuelConsumptionExtraUrb = '',
  usagePercentUrb = '',
  usagePercentMix = '',
  usagePercentExtraUrb = '',
}: Partial<CarFormDataType>): CarFormDataFullType => ({
  type: {
    value: type,
    errorMessage: '',
    isRequired: true,
  },
  mark: {
    value: mark,
    errorMessage: '',
    isRequired: true,
  },
  model: {
    value: model,
    errorMessage: '',
    isRequired: true,
  },
  yearOfProduction: {
    value: yearOfProduction,
    errorMessage: '',
    isRequired: true,
  },
  registrationNumber: {
    value: registrationNumber,
    errorMessage: '',
    isRequired: true,
  },
  vin: {
    value: vin,
    errorMessage: '',
    isRequired: true,
  },
  power: {
    value: power,
    errorMessage: '',
    isRequired: true,
  },
  cylinderCapacity: {
    value: cylinderCapacity,
    errorMessage: '',
    isRequired: true,
  },
  numberOfSeats: {
    value: numberOfSeats,
    errorMessage: '',
    isRequired: true,
  },
  color: {
    value: color,
    errorMessage: '',
    isRequired: true,
  },
  maximumAuthorisedMass: {
    value: maximumAuthorisedMass,
    errorMessage: '',
    isRequired: true,
  },
  civSeries: {
    value: civSeries,
    errorMessage: '',
    isRequired: true,
  },
  ownedBy: {
    value: ownedBy,
    errorMessage: '',
    isRequired: true,
  },
  isLeasingVehicle: {
    value: isLeasingVehicle,
    errorMessage: '',
    isRequired: true,
  },
  leasingCompany: {
    value: leasingCompany,
    errorMessage: '',
    isRequired: true,
  },
  summerTyreSize: {
    value: summerTyreSize,
    errorMessage: '',
    isRequired: true,
  },
  dotSummerTyre: {
    value: dotSummerTyre,
    errorMessage: '',
    isRequired: true,
  },
  winterTyreSize: {
    value: winterTyreSize,
    errorMessage: '',
    isRequired: true,
  },
  dotWinterTyre: {
    value: dotWinterTyre,
    errorMessage: '',
    isRequired: true,
  },
  fuelType: {
    value: fuelType,
    errorMessage: '',
    isRequired: true,
  },
  fuelConsumptionUrb: {
    value: fuelConsumptionUrb,
    errorMessage: '',
    isRequired: true,
  },
  fuelConsumptionMix: {
    value: fuelConsumptionMix,
    errorMessage: '',
    isRequired: true,
  },
  fuelConsumptionExtraUrb: {
    value: fuelConsumptionExtraUrb,
    errorMessage: '',
    isRequired: true,
  },
  usagePercentUrb: {
    value: usagePercentUrb,
    errorMessage: '',
    isRequired: true,
  },
  usagePercentMix: {
    value: usagePercentMix,
    errorMessage: '',
    isRequired: true,
  },
  usagePercentExtraUrb: {
    value: usagePercentExtraUrb,
    errorMessage: '',
    isRequired: true,
  },
})
export const mapCarFromApi = (carFromApi: CarFromApi[]): Car[] => carFromApi
