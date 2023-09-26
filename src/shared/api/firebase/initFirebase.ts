import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './firebaseConsts'

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp)

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(firebaseApp)

// Create a root reference
export const firebaseStorage = getStorage(firebaseApp)

export const firebaseAppCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider('6LebAAMoAAAAAEPOkEM-9LbGpo0z6E5dtRebzWHB'),
})

// export const firebaseLogger = new Logger('firebase-car-logger')
// firebaseLogger.error('Cum asta lucreaza1', 'Cum asta lucreaza2', 'Cum asta lucreaza3')
