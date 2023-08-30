// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOGpe5dTNq22fMFZCKf1t5u7r-9b4kvdI',
  authDomain: 'car-master-a976d.firebaseapp.com',
  projectId: 'car-master-a976d',
  storageBucket: 'car-master-a976d.appspot.com',
  messagingSenderId: '838346134841',
  appId: '1:838346134841:web:02aa48e20abcc27cf404e8',
  measurementId: 'G-ZQF9RGW128',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebaseApp)

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(firebaseApp)

export default firebaseApp
