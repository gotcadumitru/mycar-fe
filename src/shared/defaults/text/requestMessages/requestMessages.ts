import { FetchStatus } from 'shared/api'

export const REQUEST_MESSAGES = {
  SAVE: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully saved.',
    [FetchStatus.FAIL]: 'An error occurred when saving the data.',
  },
  EDIT: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully modified.',
    [FetchStatus.FAIL]: 'An error occurred when editing the data.',
  },
  DELETE: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully deleted.',
    [FetchStatus.FAIL]: 'An error occurred when deleting data.',
  },
}
