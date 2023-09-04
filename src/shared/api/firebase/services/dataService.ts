import type { FieldPath, WhereFilterOp } from '@firebase/firestore'
import {
  addDoc,
  CollectionReference,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore'
import { firestoreDb } from '../initFirebase'

class DataService<CreateType, BaseType> {
  collectionReference: CollectionReference<BaseType>

  constructor(collectionReference: CollectionReference<BaseType>) {
    this.collectionReference = collectionReference
  }

  getAll = async (): Promise<BaseType[]> => {
    const querySnapshots = await getDocs(this.collectionReference)
    return querySnapshots.docs.map((documentSnapshot) => documentSnapshot.data())
  }

  getAllByFieldPath = async (
    fieldPath: string | FieldPath,
    whereFilterOp: WhereFilterOp,
    value: unknown,
    collection = this.collectionReference,
  ): Promise<BaseType[]> => {
    const queryByUserId = query(collection, where(fieldPath, whereFilterOp, value))
    const allQuerySnapshots = await getDocs(queryByUserId)
    return allQuerySnapshots.docs.map((documentSnapshot) => ({
      ...documentSnapshot.data(),
      uid: documentSnapshot.id,
    }))
  }

  getRefById = (id: string) => doc(this.collectionReference, id)

  getById = async (id: string): Promise<BaseType> => {
    const documentReference = this.getRefById(id)
    const documentSnapshot = await getDoc(documentReference)
    if (!documentSnapshot.exists()) throw new Error('Documentul nu a fost gasit in baza de date')
    return { ...documentSnapshot.data(), uid: id }
  }

  createMultipleDocuments = async (newDocuments: CreateType[]): Promise<BaseType[]> => {
    const batch = writeBatch(firestoreDb)
    const ids: string[] = newDocuments.map((document) => {
      const docRef = doc(this.collectionReference)
      batch.set(docRef, document as any)
      return docRef.id
    })
    await batch.commit()
    return this.getAllByFieldPath(documentId(), 'in', ids)
  }

  createDocument = async (newDocument: CreateType): Promise<BaseType> => {
    const documentReference = await addDoc(this.collectionReference, newDocument as any)
    return this.getById(documentReference.id)
  }
}

export default DataService
