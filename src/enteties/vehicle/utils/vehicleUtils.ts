import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import {
  Vehicle,
  VehicleCreateBody,
  VehicleFormDataFullType,
  VehicleFormDataType,
  VehicleWithFiles,
} from '../model/types/vehicleTypes'

export const getVehicleFormValues = ({
  files = [],
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
  fuelConsumptionExtraUrb = '',
  usagePercentUrb = '',
  usagePercentExtraUrb = '',
}: Partial<VehicleFormDataType>): VehicleFormDataFullType => ({
  files: {
    value: files,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED_FILES }],
  },
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
    validations: [],
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
    validations: [],
  },
  maximumAuthorisedMass: {
    value: maximumAuthorisedMass,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  civSeries: {
    value: civSeries,
    errorMessage: '',
    validations: [],
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
    validations: [],
  },
  summerTyreSize: {
    value: summerTyreSize,
    errorMessage: '',
    validations: [],
  },
  dotSummerTyre: {
    value: dotSummerTyre,
    errorMessage: '',
    validations: [],
  },
  winterTyreSize: {
    value: winterTyreSize,
    errorMessage: '',
    validations: [],
  },
  dotWinterTyre: {
    value: dotWinterTyre,
    errorMessage: '',
    validations: [],
  },
  fuelType: {
    value: fuelType,
    errorMessage: '',
    validations: [],
  },
  fuelConsumptionUrb: {
    value: fuelConsumptionUrb,
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
  files: vehicleFormData.files.value,
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
  fuelConsumptionExtraUrb: +vehicleFormData.fuelConsumptionExtraUrb.value,
  usagePercentUrb: +vehicleFormData.usagePercentUrb.value,
  usagePercentExtraUrb: +vehicleFormData.usagePercentExtraUrb.value,
  userId,
})

export const vehicleToFormData = (vehicle: VehicleWithFiles) =>
  getVehicleFormValues({
    files: vehicle.files.map((file) => ({
      file: file.fileUrl,
      uid: file.uid,
      fileUrl: file.fileUrl,
      name: file.name,
      mimetype: file.mimetype,
      size: file.size,
    })),
    brand: vehicle.brand,
    numberOfSeats: `${vehicle.numberOfSeats}`,
    isLeasingVehicle: vehicle.isLeasingVehicle,
    leasingCompany: vehicle.leasingCompany,
    civSeries: vehicle.civSeries,
    ownedBy: vehicle.ownedBy,
    power: `${vehicle.power}`,
    cylinderCapacity: `${vehicle.cylinderCapacity}`,
    maximumAuthorisedMass: `${vehicle.maximumAuthorisedMass}`,
    color: vehicle.color,
    fuelType: vehicle.fuelType,
    yearOfProduction: vehicle.yearOfProduction,
    registrationNumber: vehicle.registrationNumber,
    type: vehicle.type,
    winterTyreSize: vehicle.winterTyreSize,
    summerTyreSize: vehicle.summerTyreSize,
    model: vehicle.model,
    dotSummerTyre: vehicle.dotSummerTyre,
    dotWinterTyre: vehicle.dotWinterTyre,
    fuelConsumptionExtraUrb: `${vehicle.fuelConsumptionExtraUrb}`,
    fuelConsumptionUrb: `${vehicle.fuelConsumptionUrb}`,
    usagePercentExtraUrb: `${vehicle.usagePercentExtraUrb}`,
    usagePercentUrb: `${vehicle.usagePercentUrb}`,
    vin: vehicle.vin,
  })

export const calculateAverageConsumption = (vehicles: (VehicleWithFiles | Vehicle)[]): number => {
  const totalConsumptionForAllCars = vehicles.reduce((consumption, vehicle) => {
    const vehicleAverageConsumption =
      (vehicle.usagePercentExtraUrb / 100) * vehicle.fuelConsumptionExtraUrb +
      (vehicle.usagePercentUrb / 100) * vehicle.fuelConsumptionUrb
    return vehicleAverageConsumption + consumption
  }, 0)
  return +(totalConsumptionForAllCars / vehicles.length || 0).toFixed(2)
}

export const calculateAverageAge = (vehicles: (VehicleWithFiles | Vehicle)[]): number => {
  if (!vehicles.length) return 0
  const currentYear = new Date().getFullYear()
  const sumOfYears = vehicles.reduce(
    (ages, vehicle) => ages + currentYear - vehicle.yearOfProduction!,
    0,
  )
  return +(sumOfYears / vehicles.length).toFixed(2)
}
