export const actionNameHelper = {
  byIdPrefix: '_FOR_ID',
  getActionNameWhenFetchById: (actionName: string, id: string) => `${actionName}_${id}`,
}
