import type { CollectionReference, FieldPath, Timestamp, WhereFilterOp } from 'firebase/firestore'
import {
  addDoc,
  and,
  doc,
  documentId,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore'
import { firestoreDb } from '../initFirebase'
import type { CollectionBaseType } from '../types/firebaseTypes'

class DataService<CreateType, BaseType extends { uid: string }> {
  collectionReference: CollectionReference<BaseType & CollectionBaseType>

  constructor(collectionReference: CollectionReference<BaseType & CollectionBaseType>) {
    this.collectionReference = collectionReference
  }

  getAll = async (): Promise<(BaseType & CollectionBaseType)[]> => {
    const querySnapshots = await getDocs(this.collectionReference)
    return querySnapshots.docs.map((documentSnapshot) => documentSnapshot.data())
  }

  getAllByFieldPath = async (
    fieldPath: string | FieldPath,
    whereFilterOp: WhereFilterOp,
    value: unknown,
    collection = this.collectionReference,
  ): Promise<(BaseType & CollectionBaseType)[]> => {
    const queryDocs = query(
      collection,
      // it is not possible to use != here on a different field than fieldPath
      and(where(fieldPath, whereFilterOp, value), where('deletedAt', '==', null)),
    )
    const allQuerySnapshots = await getDocs(queryDocs)
    return allQuerySnapshots.docs.map((documentSnapshot) => ({
      ...documentSnapshot.data(),
      uid: documentSnapshot.id,
    }))
  }

  getRefById = (id: string) => doc(this.collectionReference, id)

  getById = async (id: string): Promise<BaseType & CollectionBaseType> => {
    const [nonDeletedDoc] = await this.getAllByFieldPath(documentId(), '==', id)
    if (!nonDeletedDoc) throw new Error('Documentul nu a fost gasit in baza de date')
    return nonDeletedDoc
  }

  createMultipleDocuments = async (
    newDocuments: CreateType[],
    userId: string,
  ): Promise<(BaseType & CollectionBaseType)[]> => {
    const batch = writeBatch(firestoreDb)
    const ids: string[] = newDocuments.map((document) => {
      const docRef = doc(this.collectionReference)
      batch.set(docRef, { ...document, ...this.getCreateExtraData(userId) } as any)
      return docRef.id
    })
    await batch.commit()
    return this.getAllByFieldPath(documentId(), 'in', ids)
  }

  getCreateExtraData = (userId: string): CollectionBaseType => ({
    createdAt: serverTimestamp() as Timestamp,
    createdBy: userId,
    deletedAt: null,
    deletedBy: null,
    modifiedAt: serverTimestamp() as Timestamp,
    modifiedBy: userId,
  })

  getModifiedExtraData = (
    userId: string,
  ): Pick<CollectionBaseType, 'modifiedAt' | 'modifiedBy'> => ({
    modifiedAt: serverTimestamp() as Timestamp,
    modifiedBy: userId,
  })

  getDeletedExtraData = (userId: string): Pick<CollectionBaseType, 'deletedAt' | 'deletedBy'> => ({
    deletedAt: serverTimestamp() as Timestamp,
    deletedBy: userId,
  })

  createDocument = async (
    newDocument: CreateType,
    userId: string,
  ): Promise<BaseType & CollectionBaseType> => {
    const documentReference = await addDoc(this.collectionReference, {
      ...newDocument,
      ...this.getCreateExtraData(userId),
    } as any)
    return this.getById(documentReference.id)
  }

  editDocument = async (
    { uid, ...document }: CreateType & { uid: string },
    userId: string,
  ): Promise<BaseType & CollectionBaseType> => {
    const documentReference = this.getRefById(uid)
    await updateDoc(documentReference, { ...document, ...this.getModifiedExtraData(userId) })
    return this.getById(documentReference.id)
  }

  softDeleteDocument = async (uid: string, userId: string): Promise<string> => {
    const documentReference = this.getRefById(uid)
    await updateDoc(documentReference, { ...this.getDeletedExtraData(userId) })
    return uid
  }
}

export default DataService
