import { FirebaseError } from 'firebase/app'
import { collection, CollectionReference, DocumentData } from 'firebase/firestore'
import { firestoreDb } from './initFirebase'

export const isFirebaseError = (error: unknown): error is FirebaseError =>
  (error as FirebaseError).code !== undefined

// This is just a helper to add the type to the db responses
export const createCollection = <T = DocumentData>(collectionName: string) => collection(firestoreDb, collectionName) as CollectionReference<T>
