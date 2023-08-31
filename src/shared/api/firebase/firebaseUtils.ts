import { FirebaseError } from 'firebase/app'

export const isFirebaseError = (error: unknown): error is FirebaseError =>
  (error as FirebaseError).code !== undefined
