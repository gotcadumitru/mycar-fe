

export type CarSliceState = {
  allCars: Car[]
  selectedCar: Car | null
}
export type Car = {
  id: string
  name: string
  createdAt: number
  modifiedAt: number
}
export type CarFromApi = {
  id: string
  name: string
  createdAt: number
  modifiedAt: number
}


export type EditCarBody = {
  id: string
} & CreateCarBody

export type CreateCarBody = {
  name: string
}


