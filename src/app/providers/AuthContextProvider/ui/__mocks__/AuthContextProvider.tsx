/* eslint-disable @typescript-eslint/ban-ts-comment,no-underscore-dangle */
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { FetchStatus } from 'shared/api'

const useAuthResponse = {
  currentUser: null,
  currentUserFetchStatus: FetchStatus.IN_PROGRESS,
  signInWithGoogle: () => 'signInWithGoogle',
  signInWithFacebook: () => 'signInWithFacebook',
  login: () => 'login',
  register: () => 'register',
  logout: () => 'logout',
  forgotPassword: () => 'forgotPassword',
  resetPassword: () => 'resetPassword',
}
export const useAuth = () => {
  const [authData, setAuthData] = useState(useAuthResponse)
  useEffect(() => {
    setAuthData({
      ...authData,
      currentUserFetchStatus: FetchStatus.SUCCESS,
      // @ts-ignore
      currentUser: window.__mocks__.currentUser as any,
    })
  }, [])
  return authData
}
// eslint-disable-next-line react/jsx-no-useless-fragment
const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => <>{children}</>
export default AuthContextProvider
