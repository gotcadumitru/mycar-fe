import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
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
  signInWithFacebook: () => Promise<UserCredential>
  login: (email: string, password: string) => Promise<UserCredential>
  register: (email: string, password: string, displayName: string) => Promise<UserCredential>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  resetPassword: (oobCode: string, newPassword: string) => Promise<void>
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type UserFieldAvailableToUpdate = {
  displayName?: string | null
  photoURL?: string | null
}
export const useAuth = () => useContext(AuthContext)

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentUserFetchStatus, setCurrentUserFetchStatus] = useState(FetchStatus.IN_PROGRESS)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log(user)
      setCurrentUser(user)
      setCurrentUserFetchStatus(FetchStatus.SUCCESS)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const isPageForAuthenticatedUsers = RoutePathsFroAuthenticatedUsers.includes(location.pathname)

  useEffect(() => {
    if (currentUser && !isPageForAuthenticatedUsers) navigate(RoutePaths.panel)
    if (
      !currentUser &&
      currentUserFetchStatus === FetchStatus.SUCCESS &&
      isPageForAuthenticatedUsers
    )
      navigate(RoutePaths.sign_in)
  }, [currentUser, isPageForAuthenticatedUsers, currentUserFetchStatus])
  const updateUserDetails = async (user: User, updatedFields: UserFieldAvailableToUpdate) => {
    await updateProfile(user, updatedFields)
  }

  const login: AuthContextType['login'] = useCallback(
    (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password),
    [],
  )

  const register: AuthContextType['register'] = useCallback(
    async (email, password, displayName) => {
      const createUserResponse = await createUserWithEmailAndPassword(firebaseAuth, email, password)
      await updateUserDetails(createUserResponse.user, {
        displayName,
      })
      return createUserResponse
    },
    [],
  )

  const forgotPassword: AuthContextType['forgotPassword'] = useCallback(
    (email) =>
      sendPasswordResetEmail(firebaseAuth, email, {
        url: `${process.env.CAR_MASTER_DOMAIN}${RoutePaths.sign_in}`,
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

  const signInWithFacebook: AuthContextType['signInWithGoogle'] = useCallback(() => {
    const provider = new FacebookAuthProvider()
    provider.setCustomParameters({
      display: 'popup',
    })
    return signInWithPopup(firebaseAuth, provider)
  }, [])

  const value = useMemo(
    () => ({
      currentUser,
      currentUserFetchStatus,
      signInWithGoogle,
      signInWithFacebook,
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
      {isPageForAuthenticatedUsers &&
      (currentUserFetchStatus === FetchStatus.IN_PROGRESS || !currentUser) ? (
        <div className='loading-page' />
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
