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
  DELETE_CATEGORY: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the category is currently being deleted.',
    [FetchStatus.SUCCESS]: 'The category has been successfully deleted.',
    [FetchStatus.FAIL]:
      'An error occurred while deleting the category. Please try again later or reload the page.',
  },
  CREATE_CATEGORY: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the category is currently being created.',
    [FetchStatus.SUCCESS]: 'The category has been successfully created.',
    [FetchStatus.FAIL]:
      'An error occurred while creating the category. Please try again later or reload the page.',
  },
  EDIT_CATEGORY: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the category is currently being modified.',
    [FetchStatus.SUCCESS]: 'The category has been successfully modified.',
    [FetchStatus.FAIL]:
      'An error occurred while editing the category. Please try again later or reload the page.',
  },
  CHANGE_IS_ACTIVE: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the category status change is in progress.',
    [FetchStatus.SUCCESS]: 'The status of the category has been successfully changed.',
    [FetchStatus.FAIL]:
      'There was a problem when changing the status of the category. Please try again later or reload the page.',
  },
  DUPLICATE_CATEGORY: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the category is currently being cloned.',
    [FetchStatus.SUCCESS]: 'The form has been populated with the category you wish to clone.',
    [FetchStatus.FAIL]:
      'There was a problem cloning the category. Please try again later or reload the page.',
  },
}
