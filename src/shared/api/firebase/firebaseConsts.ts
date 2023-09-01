export const firebaseConfig = {
  apiKey: 'AIzaSyDOGpe5dTNq22fMFZCKf1t5u7r-9b4kvdI',
  authDomain: 'car-master-a976d.firebaseapp.com',
  projectId: 'car-master-a976d',
  storageBucket: 'car-master-a976d.appspot.com',
  messagingSenderId: '838346134841',
  appId: '1:838346134841:web:02aa48e20abcc27cf404e8',
  measurementId: 'G-ZQF9RGW128',
}

export enum FirebaseErrorCode {
  WEAK_PASSWORD = 'auth/weak-password',
  WRONG_PASSWORD = 'auth/wrong-password',
  USER_NOT_FOUND = 'auth/user-not-found',
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  INVALID_EMAIL = 'auth/invalid-email',
}
