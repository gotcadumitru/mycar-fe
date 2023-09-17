export enum ConfirmModalOption {
  CHANGE_IS_ACTIVE = 'CHANGE_IS_ACTIVE',
  CONFIRM_DELETE = 'CONFIRM_DELETE',
  CONFIRM_CLONE = 'CONFIRM_CLONE',
}

export type OpenedModalType<T = string | number> = {
  modalType: ConfirmModalOption | null
  id: T | null
}
