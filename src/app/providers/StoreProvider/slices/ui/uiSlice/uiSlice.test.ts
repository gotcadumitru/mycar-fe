import { FetchStatus } from 'shared/api'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { initialState, uiSlice } from './uiSlice'

describe('ui slice', () => {
  test('uiSetFetchStatusAC updates the actionsWithFetchStatus field correctly', () => {
    const newState = uiSlice.reducer(
      initialState,
      uiSlice.actions.uiSetFetchStatusAC({ type: 'TEST_ACTION', status: FetchStatus.SUCCESS }),
    )
    expect(newState.actionsWithFetchStatus).toEqual({ TEST_ACTION: FetchStatus.SUCCESS })
  })

  test('setIsSidebarShowAC updates the isSidebarShow field correctly', () => {
    const newState = uiSlice.reducer(initialState, uiSlice.actions.setIsSidebarShowAC(true))
    expect(newState.isSidebarShow).toBe(true)
  })

  test('extraReducers handles a pending with notification action correctly', () => {
    const action = {
      type: 'TEST_ACTION/pending',
      meta: { arg: { notification: REQUEST_MESSAGES.SAVE } },
    }
    const newState = uiSlice.reducer(initialState, { ...action })
    expect(newState.actionsWithFetchStatus).toEqual({
      TEST_ACTION: FetchStatus.IN_PROGRESS,
    })
  })

  test('extraReducers handles a rejected with notification action correctly', () => {
    const action = {
      type: 'TEST_ACTION/rejected',
      meta: { arg: { notification: REQUEST_MESSAGES.SAVE } },
    }
    const newState = uiSlice.reducer(initialState, { ...action })
    expect(newState.actionsWithFetchStatus).toEqual({
      TEST_ACTION: FetchStatus.FAIL,
    })
  })

  test('extraReducers handles a fulfilled with notification action correctly', () => {
    const action = {
      type: 'TEST_ACTION/fulfilled',
      meta: { arg: { notification: REQUEST_MESSAGES.SAVE } },
    }
    const newState = uiSlice.reducer(initialState, { ...action })
    expect(newState.actionsWithFetchStatus).toEqual({
      TEST_ACTION: FetchStatus.SUCCESS,
    })
  })
})
