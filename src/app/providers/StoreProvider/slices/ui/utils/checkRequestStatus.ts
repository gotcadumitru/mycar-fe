import type { PayloadAction } from '@reduxjs/toolkit'

export const isPendingAction = (action: PayloadAction<string>) => action.type.endsWith('/pending')
export const isRejectedAction = (action: PayloadAction<string>) => action.type.endsWith('/rejected')
export const isFullfilledAction = (action: PayloadAction<string>) =>
  action.type.endsWith('/fulfilled')
