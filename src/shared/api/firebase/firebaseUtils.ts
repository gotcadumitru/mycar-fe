import { FirebaseError } from 'firebase/app'
import {
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
} from 'firebase/firestore'
import { firestoreDb } from './initFirebase'

export const isFirebaseError = (error: unknown): error is FirebaseError =>
  (error as FirebaseError).code !== undefined

// This is just a helper to add the type to the db responses
export const createCollectionFromPath = <T = DocumentData>(
  path: string,
  ...pathSegments: string[]
) => collection(firestoreDb, path, ...pathSegments) as CollectionReference<T>

export const createCollectionFromCollection = <T = DocumentData>(
  reference: CollectionReference<T>,
  path: string,
  ...pathSegments: string[]
) => collection(reference, path, ...pathSegments) as CollectionReference<T>

export const createCollectionFromDocumentReference = <T = DocumentData>(
  reference: DocumentReference,
  path: string,
  ...pathSegments: string[]
) => collection(reference, path, ...pathSegments) as CollectionReference<T, DocumentData>
