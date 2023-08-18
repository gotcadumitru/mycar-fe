import { fetchAllUsersFromSalesforceThunk } from 'enteties/user'
import { initialState, userSlice } from 'enteties/user/model/slice/userSlice'
import { usersFromSalesforce } from 'shared/defaults/tests/users'

describe('userSlice', () => {
  test('reducer sets all users from salesforce state when fetchAllUsersFromSalesforceThunk is fulfilled', () => {
    const action = {
      type: fetchAllUsersFromSalesforceThunk.fulfilled.type,
      payload: usersFromSalesforce.converted,
    }
    const newState = userSlice.reducer(initialState, action)

    expect(newState.allUsersFromSalesforce).toEqual(usersFromSalesforce.converted)
  })
})
