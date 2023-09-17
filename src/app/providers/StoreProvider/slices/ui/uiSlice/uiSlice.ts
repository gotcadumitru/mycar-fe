import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { FetchStatus } from 'shared/api'
import { toastDefaultValues } from 'shared/config/toastify'
import { actionNameHelper } from 'shared/consts/uiConsts'
import type { RequestMessageType } from 'shared/types/ui'
import type { UiSliceState } from '../types/uiSlice.types'
import { isFullfilledAction, isPendingAction, isRejectedAction } from '../utils/checkRequestStatus'

export const initialState: UiSliceState = {
  actionsWithFetchStatus: {},
  isSidebarShow: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    uiSetFetchStatusAC(state, action: PayloadAction<{ type: string; status: FetchStatus }>) {
      state.actionsWithFetchStatus[action.payload.type] = action.payload.status
    },
    setIsSidebarShowAC(state, action: PayloadAction<boolean>) {
      state.isSidebarShow = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => isPendingAction(action) || isRejectedAction(action) || isFullfilledAction(action),
      (state, action) => {
        // eslint-disable-next-line prefer-const
        let [actionName, status] = action.type.split('/') as [string, FetchStatus]
        const type = actionName.endsWith(actionNameHelper.byIdPrefix)
          ? actionNameHelper.getActionNameWhenFetchById(actionName, action?.meta?.arg?.id)
          : actionName
        const notification = action?.meta?.arg?.notification as RequestMessageType
        if (action?.error?.name === 'AbortError') {
          if (notification) {
            const notificationId = action?.meta?.requestId
            toast.dismiss(notificationId)
          }
          status = FetchStatus.NULL
        }
        if (notification && status !== FetchStatus.NULL) {
          const notificationId = action?.meta?.requestId
          const message = notification[status]

          switch (status) {
            case FetchStatus.IN_PROGRESS: {
              toast.loading(message, {
                toastId: notificationId,
              })
              break
            }
            case FetchStatus.SUCCESS: {
              toast.update(notificationId, {
                render: message,
                type: 'success',
                isLoading: false,
                ...toastDefaultValues,
              })
              break
            }
            case FetchStatus.FAIL: {
              toast.update(notificationId, {
                render: action?.error?.message || message,
                type: 'error',
                isLoading: false,
                ...toastDefaultValues,
              })
              break
            }

            default:
          }
        }

        state.actionsWithFetchStatus[type] = status
      },
    )
  },
})
export const { actions: uiActions } = uiSlice
export const { reducer: uiReducer } = uiSlice
