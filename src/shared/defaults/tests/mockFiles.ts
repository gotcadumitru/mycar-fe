import { Timestamp } from 'firebase/firestore'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'
import { FileCollectionType } from 'shared/ui/File'

export const mockFiles: FileCollectionType[] = createArrayFromTo(0, 4).map((n) => ({
  modifiedAt: {
    seconds: 1694437329 + n,
    nanoseconds: 462000000 + n,
  } as Timestamp,
  mimetype: 'image/jpeg',
  storagePath: `userVehicleFiles/ffc65-20ae-4c81-a8e7-e58eca21a032_Nissan_Qashqai_J11_China_2016-04-02${n}.jpg`,
  deletedBy: null,
  size: 407280,
  deletedAt: null,
  createdBy: mockUsers[0].uid,
  fileUrl: `https://firebasestorage.googleapis.com/v0/b/car-master-a976d.appspot.com/o/userVehicleFiles%2Fffc8f72a-20ae-4c81-a8e7-e58eca06a032_Nissan_Qashqai_J11_China_2016-04-02.jpg?alt=media&token=5fdd91f6-5f51-438d-ad60-a3244a96899e${n}`,
  name: 'Nissan_Qashqai_J11_China_2016-04-02.jpg',
  createdAt: {
    seconds: 1694437329,
    nanoseconds: 462000000,
  } as Timestamp,
  modifiedBy: mockUsers[0].uid,
  uid: `CsFFNTi5URxWDFlk0442${n}`,
}))
