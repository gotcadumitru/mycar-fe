import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import {
  Vehicle,
  VehicleCreateBody,
  VehicleFormDataFullType,
  VehicleFormDataType,
} from '../model/types/vehicleTypes'

export const getVehicleFormValues = ({
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
}: Partial<VehicleFormDataType>): VehicleFormDataFullType => ({
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
    validations: [],
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

export const vehicleFormDataToCreateBody = (
  vehicleFormData: VehicleFormDataFullType,
  userId: string,
): VehicleCreateBody => ({
  type: vehicleFormData.type.value,
  brand: vehicleFormData.brand.value,
  model: vehicleFormData.model.value,
  yearOfProduction: vehicleFormData.yearOfProduction.value,
  registrationNumber: vehicleFormData.registrationNumber.value,
  vin: vehicleFormData.vin.value,
  power: +vehicleFormData.power.value,
  cylinderCapacity: +vehicleFormData.cylinderCapacity.value,
  numberOfSeats: +vehicleFormData.numberOfSeats.value,
  color: vehicleFormData.color.value,
  maximumAuthorisedMass: +vehicleFormData.maximumAuthorisedMass.value,
  civSeries: vehicleFormData.civSeries.value,
  ownedBy: vehicleFormData.ownedBy.value,
  isLeasingVehicle: vehicleFormData.isLeasingVehicle.value,
  leasingCompany: vehicleFormData.leasingCompany.value,
  summerTyreSize: vehicleFormData.summerTyreSize.value,
  dotSummerTyre: vehicleFormData.dotSummerTyre.value,
  winterTyreSize: vehicleFormData.winterTyreSize.value,
  dotWinterTyre: vehicleFormData.dotWinterTyre.value,
  fuelType: vehicleFormData.fuelType.value,
  fuelConsumptionUrb: +vehicleFormData.fuelConsumptionUrb.value,
  fuelConsumptionMix: +vehicleFormData.fuelConsumptionMix.value,
  fuelConsumptionExtraUrb: +vehicleFormData.fuelConsumptionExtraUrb.value,
  usagePercentUrb: +vehicleFormData.usagePercentUrb.value,
  usagePercentMix: +vehicleFormData.usagePercentMix.value,
  usagePercentExtraUrb: +vehicleFormData.usagePercentExtraUrb.value,
  userId,
})

export const calculateAverageConsumption = (vehicles: Vehicle[]): number => {
  const totalConsumptionForAllCars = vehicles.reduce((consumption, vehicle) => {
    const vehicleAverageConsumption =
      (vehicle.usagePercentExtraUrb / 100) * vehicle.fuelConsumptionExtraUrb +
      (vehicle.usagePercentUrb / 100) * vehicle.fuelConsumptionUrb +
      (vehicle.usagePercentMix / 100) * vehicle.fuelConsumptionMix

    return vehicleAverageConsumption + consumption
  }, 0)
  return totalConsumptionForAllCars / vehicles.length || 0
}

export const calculateAverageAge = (vehicles: Vehicle[]): number => {
  const currentYear = new Date().getFullYear()
  return (
    vehicles.reduce((ages, vehicle) => ages + currentYear - vehicle.yearOfProduction!, 0) /
    vehicles.length
  )
}
