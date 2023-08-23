export enum CarActions {
  FETCH_ALL_USER_CARS = 'FETCH_ALL_USER_CARS',
}

export enum CarType {
  NaturalPerson = 'NaturalPerson',
  JuridicalPerson = 'JuridicalPerson',
}

export const CarTypeLabels = {
  [CarType.NaturalPerson]: 'Persoana fizica',
  [CarType.JuridicalPerson]: 'Persoana juridica',
}

export const CarTypeOptions = [
  ...Object.values(CarType).map((value) => ({
    id: value as CarType,
    label: CarTypeLabels[value],
  })),
]

export enum CarOwnedBy {
  NaturalPerson = 'NaturalPerson',
  JuridicalPerson = 'JuridicalPerson',
}

export const CarOwnedByLabels = {
  [CarOwnedBy.NaturalPerson]: 'Persoana fizica',
  [CarOwnedBy.JuridicalPerson]: 'Persoana juridica',
}

export const CarOwnedByOptions = [
  ...Object.values(CarOwnedBy).map((value) => ({
    id: value as CarOwnedBy,
    label: CarOwnedByLabels[value],
  })),
]

export enum FuelType {
  Gasoline = 'Gasoline',
  Diesel = 'Diesel',
  Electric = 'Electric',
  HybridGasoline = 'HybridGasoline',
  HybridDiesel = 'HybridDiesel',
  NaturalGas = 'NaturalGas',
  Hydrogen = 'Hydrogen',
  Other = 'Other',
}

export const FuelTypeLabels = {
  [FuelType.Gasoline]: 'Benzină',
  [FuelType.Diesel]: 'Motorină',
  [FuelType.Electric]: 'Electric',
  [FuelType.HybridGasoline]: 'Hibrid - Benzină',
  [FuelType.HybridDiesel]: 'Hibrid - Motorină',
  [FuelType.NaturalGas]: 'Gaz Natural',
  [FuelType.Hydrogen]: 'Hidrogen',
  [FuelType.Other]: 'Altele',
}

export const FuelTypeOptions = [
  ...Object.values(FuelType).map((value) => ({
    id: value as FuelType,
    label: FuelTypeLabels[value],
  })),
]

export const SummerTyreSize = [
  '135/80/R 12',
  '145/70/R 13',
  '155/65/R 13',
  '165/65/R 13',
  '165/70/R 13',
  '145/80/R 14',
  '155/65/R 14',
  '165/60/R 14',
  '165/65/R 14',
  '165/70/R 14',
  '175/65/R 14',
  '175/70/R 14',
  '185/65/R 14',
  '185/70/R 14',
  '195/70/R 14',
  '195/75/R 14',
  '205/75/R 14',
  '205/75/R 14',
  '215/70/R 14',
  '235/70/R 14',
  '215/70/R 15',
  '225/70/R 15',
  '235/75/R 15',
  '245/75/R 15',
  '255/70/R 15',
  '265/70/R 15',
  '265/75/R 15',
  '275/70/R 15',
  '285/75/R 15',
  '195/65/R 15',
  '195/60/R 15',
  '195/55/R 15',
  '205/55/R 16',
  '205/60/R 16',
  '215/55/R 16',
  '215/60/R 16',
  '225/55/R 16',
  '225/60/R 16',
  '235/60/R 16',
  '245/70/R 16',
  '255/70/R 16',
  '265/70/R 16',
  '275/70/R 16',
  '285/75/R 16',
  '195/50/R 16',
  '205/50/R 16',
  '205/45/R 16',
  '205/40/R 16',
  '215/45/R 16',
  '225/45/R 17',
  '235/45/R 17',
  '235/55/R 17',
  '245/45/R 17',
  '255/45/R 17',
  '265/65/R 17',
  '265/70/R 17',
  '275/70/R 17',
  '285/70/R 17',
  '295/70/R 17',
  '205/40/R 17',
  '205/45/R 17',
  '205/50/R 17',
  '215/40/R 17',
  '215/45/R 17',
  '215/50/R 17',
  '225/40/R 18',
  '225/45/R 18',
  '235/40/R 18',
  '235/50/R 18',
  '245/40/R 18',
  '245/45/R 18',
  '255/45/R 18',
  '255/55/R 18',
  '265/60/R 18',
  '275/65/R 18',
  '285/60/R 18',
  '295/60/R 18',
  '305/60/R 18',
  '205/55/R 18',
  '215/55/R 18',
  '215/60/R 18',
  '225/55/R 18',
  '225/60/R 18',
  '235/55/R 18',
  '235/60/R 18',
  '245/55/R 18',
  '245/60/R 18',
  '255/50/R 19',
  '255/55/R 19',
  '265/50/R 19',
  '275/45/R 19',
  '285/45/R 19',
  '295/35/R 19',
  '205/40/R 19',
  '215/35/R 19',
  '215/40/R 19',
  '215/45/R 19',
  '225/35/R 19',
  '225/40/R 19',
  '225/45/R 19',
  '235/35/R 19',
  '235/40/R 19',
  '235/45/R 19',
  '245/35/R 19',
  '245/40/R 19',
  '245/45/R 19',
  '255/30/R 19',
  '255/35/R 19',
  '255/40/R 19',
  '265/30/R 19',
  '275/30/R 19',
  '275/35/R 19',
  '275/40/R 19',
  '285/30/R 19',
  '285/35/R 19',
  '295/30/R 19',
  '305/30/R 19',
  '305/35/R 19',
  '315/30/R 19',
  '215/55/R 20',
  '225/30/R 20',
  '225/35/R 20',
  '225/40/R 20',
  '235/30/R 20',
  '235/35/R 20',
  '245/30/R 20',
  '245/35/R 20',
  '255/30/R 20',
  '255/35/R 20',
  '265/30/R 20',
  '265/35/R 20',
  '275/25/R 20',
  '275/30/R 20',
  '285/25/R 20',
  '285/30/R 20',
  '295/25/R 20',
  '305/25/R 20',
  '325/25/R 20',
  '215/55/R 21',
  '225/30/R 21',
  '235/35/R 21',
  '245/35/R 21',
  '255/30/R 21',
  '265/30/R 21',
  '275/30/R 21',
  '285/30/R 21',
  '295/25/R 21',
  '305/25/R 21',
  '315/25/R 21',
  '225/30/R 22',
  '235/30/R 22',
  '245/30/R 22',
  '255/30/R 22',
  '265/30/R 22',
  '285/25/R 22',
  '295/25/R 22',
  '305/25/R 22',
  '315/25/R 22',
  '325/25/R 22',
  '335/25/R 22',
  '345/25/R 22',
  '355/25/R 22',
  '365/25/R 22',
  '255/85/R 23',
]

export const SummerTyreSizeOptions = [
  SummerTyreSize.map((value) => ({
    id: value,
    label: value,
  })),
]
