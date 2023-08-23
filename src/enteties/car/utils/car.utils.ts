import type { CarFormDataFullType, CarFormDataType } from 'features/car/car-edit-form'
import { CarOwnedBy } from '../model/consts/carConsts'
import type { Car, CarFromApi } from '../model/types/car.types'

export const getCarFormValues = ({
  type = '',
  mark = '',
  model = '',
  yearOfProduction = '',
  registrationNumber = '',
  vin = '',
  power = '',
  cylinderCapacity = '',
  numberOfSeats = '',
  color = '',
  maximumAuthorisedMass = '',
  civSeries = '',
  ownedBy = CarOwnedBy.NaturalPerson,
  isLeasingVehicle = false,
  leasingCompany = '',
  summerTyreSize = '',
  dotSummerTyre = '',
  winterTyreSize = '',
  dotWinterTyre = '',
  fuelConsumptionUrb = '',
  fuelConsumptionMix = '',
  fuelConsumptionExtraurb = '',
  usagePercentUrb = '',
  usagePercentMix = '',
  usagePercentExtraurb = '',
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
  fuelConsumptionExtraurb: {
    value: fuelConsumptionExtraurb,
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
  usagePercentExtraurb: {
    value: usagePercentExtraurb,
    errorMessage: '',
    isRequired: true,
  },
})
export const mapCarFromApi = (carFromApi: CarFromApi[]): Car[] => carFromApi
