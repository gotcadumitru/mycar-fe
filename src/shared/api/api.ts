/* eslint-disable no-console */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { fetchAndSetNewAccessToken } from 'shared/lib/utils/jwt/fetchAndSetNewAccessToken'
import { v4 as uuidv4 } from 'uuid'
import { ApiErrorCode, FetchStatus } from './apiConsts'
import { apiConfig, getAuthorizationHeader } from './apiUtils'

export const carAPI = axios.create()
const onRequest = (requestConfig: InternalAxiosRequestConfig, baseUrl: string) => {
  requestConfig.baseURL = baseUrl

  if (requestConfig.headers) requestConfig.headers.authorization = getAuthorizationHeader()
  if (requestConfig.notification) {
    requestConfig.toastId = uuidv4()
    toast.loading(requestConfig.notification[FetchStatus.IN_PROGRESS], {
      toastId: requestConfig.toastId,
    })
  }
  return requestConfig
}
const onResponseSuccess = (response: AxiosResponse) => {
  if (response.config.notification) {
    if (response.config.toastId) {
      toast.update(response.config.toastId, {
        render: response.data.message || response.config.notification[FetchStatus.SUCCESS],
        type: 'success',
        isLoading: false,
        ...toastDefaultValues,
      })
    }
  }
  return response
}

const onResponseError = async (error: any) => {
  if (__IS_DEV__) {
    console.log(error.response)
    console.log(error.config)
    console.log(error.request)
    console.log(error.message)
  }
  const originalRequest = error.config

  if (
    error?.response?.status === 401 &&
    error?.response?.data?.error?.code === ApiErrorCode.UNAUTHORISED &&
    !originalRequest.retry
  ) {
    originalRequest.retry = true
    await fetchAndSetNewAccessToken()
    return carAPI(originalRequest)
  }
  const toastId = error?.response?.config?.toastId || error?.config?.toastId
  const message =
    error?.response?.data?.message ||
    error?.config?.notification?.[FetchStatus.FAIL] ||
    error?.response?.config?.notification?.[FetchStatus.FAIL]

  if (toastId) {
    setTimeout(() => {
      toast.update(toastId, {
        render: message,
        type: 'error',
        isLoading: false,
        ...toastDefaultValues,
      })
    }, 300)
  }
  return Promise.reject(error)
}

carAPI.interceptors.request.use((requestConfig) =>
  onRequest(requestConfig, `${apiConfig.getConfig()?.carAPI}`),
)

carAPI.interceptors.response.use(onResponseSuccess, onResponseError)
