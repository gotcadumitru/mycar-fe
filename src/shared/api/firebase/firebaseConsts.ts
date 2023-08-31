const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios',
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12',
  },
  dynamicLinkDomain: 'example.page.link',
}

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
}
