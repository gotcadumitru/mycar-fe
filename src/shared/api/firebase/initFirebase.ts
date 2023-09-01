import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from './firebaseConsts'

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebaseApp)

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp)

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(firebaseApp)
