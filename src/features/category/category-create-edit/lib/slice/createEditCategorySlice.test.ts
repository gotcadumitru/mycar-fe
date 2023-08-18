import { getCategoryFormValues, ToWhomDoesItApply } from 'enteties/category'
import { CreateEditCategorySliceState } from 'features/category/category-create-edit'
import { createEditCategoryActions, createEditCategorySlice } from './createEditCategorySlice'

describe('createEditCategorySlice', () => {
  it('should update newCategoryFormData when changeCategoryDataAC is dispatched', () => {
    const initialState: CreateEditCategorySliceState = {
      newCategoryFormData: getCategoryFormValues({}),
    }
    const newCategoryFormData = getCategoryFormValues({
      name: 'Test Category',
      language: 'English',
      toWhomDoesItApply: ToWhomDoesItApply.AGENT,
    })
    const action = createEditCategoryActions.changeCategoryDataAC(newCategoryFormData)
    const state = createEditCategorySlice.reducer(initialState, action)
    expect(state.newCategoryFormData).toEqual(newCategoryFormData)
  })

  it('should reset newCategoryFormData when resetCategoryDataAC is dispatched', () => {
    const initialState: CreateEditCategorySliceState = {
      newCategoryFormData: getCategoryFormValues({
        name: 'Test Category',
        language: 'English',
        toWhomDoesItApply: ToWhomDoesItApply.AGENT,
      }),
    }
    const action = createEditCategoryActions.resetCategoryDataAC()
    const newState = createEditCategorySlice.reducer(initialState, action)
    expect(newState.newCategoryFormData).toEqual(getCategoryFormValues({}))
  })
})
