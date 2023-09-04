import { FileCollectionCreateType, FileCollectionType } from 'shared/ui/File'
import { createCollectionFromPath } from '../firebaseUtils'
import DataService from './dataService'

class FileDataService extends DataService<FileCollectionCreateType, FileCollectionType> {
  getAllByUserId = async (userId: string) => this.getAllByFieldPath('userId', '==', userId)
}

export const fileCollection = createCollectionFromPath<FileCollectionType>('file')

export const fileDataService = new FileDataService(fileCollection)
