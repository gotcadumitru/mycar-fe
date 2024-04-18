import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { FetchStatus } from 'shared/api'
import { firebaseAuth } from 'shared/api/firebase'
import { RoutePaths } from 'shared/config/router/RoutePaths'

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
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [currentUserFetchStatus, setCurrentUserFetchStatus] = useState(FetchStatus.IN_PROGRESS)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user)
      setCurrentUserFetchStatus(FetchStatus.SUCCESS)
    })
    return unsubscribe
  }, [])

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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
