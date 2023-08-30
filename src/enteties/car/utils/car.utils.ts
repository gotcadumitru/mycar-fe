import type { CarFormDataFullType, CarFormDataType } from 'features/car/car-edit-form'
import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type { Car, CarFromApi } from '../model/types/car.types'

export const getCarFormValues = ({
  type = null,
  brand = null,
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
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  brand: {
    value: brand,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  model: {
    value: model,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  yearOfProduction: {
    value: yearOfProduction,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  registrationNumber: {
    value: registrationNumber,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  vin: {
    value: vin,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  power: {
    value: power,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  cylinderCapacity: {
    value: cylinderCapacity,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  numberOfSeats: {
    value: numberOfSeats,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  color: {
    value: color,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  maximumAuthorisedMass: {
    value: maximumAuthorisedMass,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  civSeries: {
    value: civSeries,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  ownedBy: {
    value: ownedBy,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  isLeasingVehicle: {
    value: isLeasingVehicle,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  leasingCompany: {
    value: leasingCompany,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  summerTyreSize: {
    value: summerTyreSize,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  dotSummerTyre: {
    value: dotSummerTyre,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  winterTyreSize: {
    value: winterTyreSize,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  dotWinterTyre: {
    value: dotWinterTyre,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  fuelType: {
    value: fuelType,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  fuelConsumptionUrb: {
    value: fuelConsumptionUrb,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  fuelConsumptionMix: {
    value: fuelConsumptionMix,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  fuelConsumptionExtraUrb: {
    value: fuelConsumptionExtraUrb,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  usagePercentUrb: {
    value: usagePercentUrb,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  usagePercentMix: {
    value: usagePercentMix,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  usagePercentExtraUrb: {
    value: usagePercentExtraUrb,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
})
export const mapCarFromApi = (carFromApi: CarFromApi[]): Car[] => carFromApi
