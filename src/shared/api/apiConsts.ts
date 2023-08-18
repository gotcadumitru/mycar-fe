export enum FetchStatus {
  NULL = 'NULL',
  IN_PROGRESS = 'pending',
  SUCCESS = 'fulfilled',
  FAIL = 'rejected',
}

export enum RemoteActions {
  GET_NAMESPACE = 'getNamespace',
  GET_JWT = 'getJWT',
  GET_USERS = 'getUsers',
  GET_ALL_CATEGORIES = 'getAllCategories',
  GET_CATEGORY = 'getCategory',
  CREATE_CATEGORY = 'createCategory',
  UPDATE_CATEGORY = 'updateCategory',
  DELETE_CATEGORY = 'deleteCategory',
  POST_THING = 'postThing',
}

export enum ApiErrorCode {
  UNAUTHORISED = 'UNAUTHORISED',
}
