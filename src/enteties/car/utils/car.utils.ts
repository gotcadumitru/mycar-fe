import type { CarFormDataFullType, CarFormDataType } from 'features/car/car-edit-form'
import type { Car, CarFromApi } from 'src/enteties/car/model/types/car.types'

export const getCarFormValues = ({ name = '' }: Partial<CarFormDataType>): CarFormDataFullType => ({
  name: {
    value: name,
    errorMessage: '',
    isRequired: true,
  },
})
export const mapCarFromApi = (carFromApi: CarFromApi[]): Car[] => carFromApi
