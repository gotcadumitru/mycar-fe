import type { StateSchema } from 'app/providers/StoreProvider'
import { getCarFormValues } from 'enteties/car'

const reduxMockStateForTesting: DeepPartial<StateSchema> = {
  ui: {
    actionsWithFetchStatus: {},
    isSidebarShow: false,
  },
  editCar: {
    newCarFormData: getCarFormValues({}),
  },
  car: {
    allCars: [],
    selectedCar: null,
  },
  user: {
    authUser: null,
  },
}

export default reduxMockStateForTesting
