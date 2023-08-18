import mockAxios from 'jest-mock-axios'
import { templatesFromCategoryApiMaxType } from 'shared/defaults/tests/templates'
import { usersFromSalesforce } from 'shared/defaults/tests/users'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchAllTemplatesFromApiThunk, initialState, templateSlice } from './templateSlice'

describe('templateSlice', () => {
  test('reducer sets all templates when fetchAllTemplatesFromApiThunk is fulfilled', () => {
    const action = {
      type: fetchAllTemplatesFromApiThunk.fulfilled.type,
      payload: usersFromSalesforce.converted,
    }
    const newState = templateSlice.reducer(initialState, action)

    expect(newState.allTemplates).toEqual(usersFromSalesforce.converted)
  })

  test('fetchAllTemplatesFromApiThunk success', async () => {
    const thunk = new TestAsyncThunk(fetchAllTemplatesFromApiThunk)
    mockAxios.get.mockResolvedValueOnce({
      data: { body: templatesFromCategoryApiMaxType.originalFromRequest },
    })
    const result = await thunk.callThunk()
    expect(result.payload).toStrictEqual(templatesFromCategoryApiMaxType.converted)
  })
})
