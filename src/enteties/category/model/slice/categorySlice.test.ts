import {
  createNewCategoryThunk,
  deleteCategoryByIdThunk,
  editCategoryByIdThunk,
  fetchAllCategories,
  fetchCategoryByIdThunk,
} from 'enteties/category'
import {
  categoriesFromCategoryApiMaxType,
  categoriesFromCategoryApiMinType,
} from 'shared/defaults/tests/categories'
import { categorySlice, initialState } from './categorySlice'

describe('category slice', () => {
  test('setToolbarSearchValue updates the toolbarSearchByValue field correctly', () => {
    const newState = categorySlice.reducer(
      initialState,
      categorySlice.actions.setToolbarSearchValue('test search value'),
    )
    expect(newState.toolbarSearchByValue).toEqual('test search value')
  })

  test('resetSelectedCategoryData sets the selectedCategory field to null', () => {
    const category = categoriesFromCategoryApiMaxType.converted[0]
    const state = { ...initialState, selectedCategory: category }
    const newState = categorySlice.reducer(state, categorySlice.actions.resetSelectedCategoryData())
    expect(newState.selectedCategory).toBeNull()
  })

  test('fetchAllCategories.fulfilled updates the allCategories field correctly', () => {
    const category = categoriesFromCategoryApiMinType.converted[0]
    // @ts-ignore
    const action = fetchAllCategories.fulfilled([category])
    const newState = categorySlice.reducer(initialState, action)
    expect(newState.allCategories).toEqual([category])
  })

  test('fetchCategoryByIdThunk.fulfilled updates the selectedCategory field correctly', () => {
    const category = categoriesFromCategoryApiMinType.converted[0]
    // @ts-ignore
    const action = fetchCategoryByIdThunk.fulfilled(category)
    const newState = categorySlice.reducer(initialState, action)
    expect(newState.selectedCategory).toEqual(category)
  })

  test('deleteCategoryByIdThunk.fulfilled updates the allCategories field correctly', () => {
    const category1 = categoriesFromCategoryApiMinType.converted[0]
    const category2 = categoriesFromCategoryApiMinType.converted[1]
    const state = { ...initialState, allCategories: [category1, category2] }
    // @ts-ignore
    const action = deleteCategoryByIdThunk.fulfilled(category2.id)
    const newState = categorySlice.reducer(state, action)
    expect(newState.allCategories).toEqual([category1])
  })

  test('createNewCategoryThunk.fulfilled updates the allCategories field correctly', () => {
    const category1 = categoriesFromCategoryApiMinType.converted[0]
    const category2 = categoriesFromCategoryApiMinType.converted[0]
    const state = { ...initialState, allCategories: [category1] }
    // @ts-ignore
    const action = createNewCategoryThunk.fulfilled(category2)
    const newState = categorySlice.reducer(state, action)
    expect(newState.allCategories).toEqual([category1, category2])
  })

  test('createNewCategoryThunk.fulfilled updates the allCategories field correctly', () => {
    const category = categoriesFromCategoryApiMinType.converted[0]
    const categoryChanged = { ...category, name: 'category 1 updated' }

    const state = { ...initialState, allCategories: [category] }
    // @ts-ignore
    const action = editCategoryByIdThunk.fulfilled(categoryChanged)
    const newState = categorySlice.reducer(state, action)
    expect(newState.allCategories).toEqual([categoryChanged])
  })
})
