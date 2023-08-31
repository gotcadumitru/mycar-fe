import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth'
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { firebaseAuth } from 'shared/api/firebase'
import { RoutePaths, RoutePathsFroAuthenticatedUsers } from 'shared/config/router/RoutePaths'

type AuthContextType = {
  currentUser: User | null
  currentUserFetchStatus: FetchStatus
  signInWithGoogle: () => Promise<UserCredential>
  login: (email: string, password: string) => Promise<UserCredential>
  register: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (oobCode: string, newPassword: string) => Promise<void>
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentUserFetchStatus, setCurrentUserFetchStatus] = useState(FetchStatus.IN_PROGRESS)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user)
      setCurrentUserFetchStatus(FetchStatus.SUCCESS)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (currentUser && !RoutePathsFroAuthenticatedUsers.includes(location.pathname))
      navigate(RoutePaths.panel)
    if (
      !currentUser &&
      currentUserFetchStatus === FetchStatus.SUCCESS &&
      RoutePathsFroAuthenticatedUsers.includes(location.pathname)
    )
      navigate(RoutePaths.sign_in)
  }, [currentUser, location])

  const login: AuthContextType['login'] = useCallback(
    (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password),
    [],
  )

  const register: AuthContextType['register'] = useCallback(
    (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password),
    [],
  )

  const forgotPassword: AuthContextType['forgotPassword'] = useCallback(
    (email) =>
      sendPasswordResetEmail(firebaseAuth, email, {
        url: `${process.env.CAR_MASTER_DOMAIN}/${RoutePaths.reset_password}`,
      }),
    [],
  )

  const resetPassword: AuthContextType['resetPassword'] = useCallback(
    (oobCode, newPassword) => confirmPasswordReset(firebaseAuth, oobCode, newPassword),
    [],
  )

  const logout: AuthContextType['logout'] = useCallback(() => signOut(firebaseAuth), [])

  const signInWithGoogle: AuthContextType['signInWithGoogle'] = useCallback(() => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(firebaseAuth, provider)
  }, [])

  const value = useMemo(
    () => ({
      currentUser,
      currentUserFetchStatus,
      signInWithGoogle,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword,
    }),
    [currentUser, currentUserFetchStatus],
  )

  return (
    <AuthContext.Provider value={value}>
      {currentUserFetchStatus === FetchStatus.IN_PROGRESS ? <div /> : children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
