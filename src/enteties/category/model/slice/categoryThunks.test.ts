import {
  changeIsCategoryActiveByIdThunk,
  deleteCategoryByIdThunk,
  editCategoryByIdThunk,
  parseStringToWordsAndPhrases,
} from 'enteties/category'
import { CategoryFormDataFullType } from 'features/category/category-create-edit'
import {
  categoryFormToRequestBody,
  categoryToEditCategoryForm,
  getOptionsForParsing,
} from 'features/category/category-create-edit/lib/utils/create-edit-category.utils'
import mockAxios from 'jest-mock-axios'
import {
  categoriesFromCategoryApiMaxType,
  categoriesFromCategoryApiMinType,
} from 'shared/defaults/tests/categories'
import getMockSalesforceRemoteActions from 'shared/lib/tests/salesforceRemoteActionMock'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { createNewCategoryThunk } from './categoryThunks'

const getCategoryData = () => {
  const categoryFormData: CategoryFormDataFullType = categoryToEditCategoryForm(
    categoriesFromCategoryApiMaxType.converted[0],
  )
  const optionsForParsing = getOptionsForParsing(categoryFormData)
  const definition = parseStringToWordsAndPhrases(optionsForParsing)
  return categoryFormToRequestBody(categoryFormData, definition)
}

describe('categoryThunks', () => {
  test('createNewCategoryThunk success', async () => {
    const thunk = new TestAsyncThunk(createNewCategoryThunk)
    const categoryData = getCategoryData()
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction }),
    )

    const result = await thunk.callThunk({
      categoryData,
    })

    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toStrictEqual(categoriesFromCategoryApiMinType.converted[0])
  })

  test('createNewCategoryThunk fail', async () => {
    const thunk = new TestAsyncThunk(createNewCategoryThunk)
    const categoryData = getCategoryData()
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction, shouldThrowError: true }),
    )
    const result = await thunk.callThunk({
      categoryData,
    })

    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toEqual(undefined)
  })

  test('editCategoryByIdThunk success', async () => {
    const thunk = new TestAsyncThunk(editCategoryByIdThunk)
    const categoryData = getCategoryData()
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction }),
    )

    const result = await thunk.callThunk({
      categoryData: {
        ...categoryData,
        id: categoriesFromCategoryApiMaxType.converted[0].id,
      },
    })
    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toStrictEqual(categoriesFromCategoryApiMinType.converted[0])
  })

  test('editCategoryByIdThunk fail', async () => {
    const thunk = new TestAsyncThunk(editCategoryByIdThunk)
    const categoryData = getCategoryData()
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction, shouldThrowError: true }),
    )
    const result = await thunk.callThunk({
      categoryData: {
        ...categoryData,
        id: categoriesFromCategoryApiMaxType.converted[0].id,
      },
    })

    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toEqual(undefined)
  })

  test('changeIsCategoryActiveByIdThunk success', async () => {
    const thunk = new TestAsyncThunk(changeIsCategoryActiveByIdThunk)
    const categoryData = getCategoryData()

    const newActiveStatus = !categoriesFromCategoryApiMaxType.converted[0].isActive

    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({
        remoteAction,
        mockResponse: {
          body: {
            ...categoriesFromCategoryApiMaxType.originalFromRequest[0],
            enabled: newActiveStatus,
          },
        },
      }),
    )

    mockAxios.get.mockResolvedValueOnce({
      data: {
        body: {
          ...categoriesFromCategoryApiMaxType.originalFromRequest[0],
          enabled: categoriesFromCategoryApiMaxType.converted[0].isActive,
        },
      },
    })

    const result = await thunk.callThunk({
      categoryData: {
        ...categoryData,
        categoryId: categoriesFromCategoryApiMaxType.converted[0].id,
        newActiveStatus,
      },
    })
    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toStrictEqual({
      ...categoriesFromCategoryApiMinType.converted[0],
      isActive: newActiveStatus,
    })
  })

  test('changeIsCategoryActiveByIdThunk fail', async () => {
    const thunk = new TestAsyncThunk(changeIsCategoryActiveByIdThunk)
    const categoryData = getCategoryData()

    const newActiveStatus = !categoriesFromCategoryApiMaxType.converted[0].isActive

    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({
        remoteAction,
        shouldThrowError: true,
        mockResponse: {
          body: {
            ...categoriesFromCategoryApiMaxType.originalFromRequest[0],
            enabled: newActiveStatus,
          },
        },
      }),
    )

    mockAxios.get.mockResolvedValueOnce({
      data: {
        body: {
          ...categoriesFromCategoryApiMaxType.originalFromRequest[0],
          enabled: categoriesFromCategoryApiMaxType.converted[0].isActive,
        },
      },
    })

    const result = await thunk.callThunk({
      categoryData: {
        ...categoryData,
        categoryId: categoriesFromCategoryApiMaxType.converted[0].id,
        newActiveStatus,
      },
    })
    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toStrictEqual(undefined)
  })

  test('deleteCategoryByIdThunk success', async () => {
    const thunk = new TestAsyncThunk(deleteCategoryByIdThunk)
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction }),
    )

    const result = await thunk.callThunk({
      categoryId: categoriesFromCategoryApiMinType.converted[0].id,
    })

    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toStrictEqual(categoriesFromCategoryApiMinType.converted[0].id)
  })

  test('deleteCategoryByIdThunk fail', async () => {
    const thunk = new TestAsyncThunk(deleteCategoryByIdThunk)
    window.insightsConfiguration = jest.fn((remoteAction) =>
      getMockSalesforceRemoteActions({ remoteAction, shouldThrowError: true }),
    )
    const result = await thunk.callThunk({
      categoryId: categoriesFromCategoryApiMinType.converted[0].id,
    })

    expect(window.insightsConfiguration).toBeCalled()
    expect(result.payload).toEqual(undefined)
  })
})
