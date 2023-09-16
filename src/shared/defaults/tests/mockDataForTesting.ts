import type { StateSchema } from 'app/providers/StoreProvider'
import { getVehicleFormValues } from 'enteties/vehicle'

const reduxMockStateForTesting: DeepPartial<StateSchema> = {
  ui: {
    actionsWithFetchStatus: {},
    isSidebarShow: false,
  },
  editVehicle: {
    formFields: getVehicleFormValues({}),
  },
  vehicle: {
    allVehiclesOfCurrentUser: [],
  },
  user: {
    authUser: null,
  },
}

export default reduxMockStateForTesting
