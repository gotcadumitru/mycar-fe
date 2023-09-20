import { VehicleDocumentWithFiles } from 'enteties/vehicleDocument'
import { VehicleDocumentType } from 'enteties/vehicleDocument/model/consts/vehicleDocumentConsts'
import { Timestamp } from 'firebase/firestore'
import { mockFiles } from 'shared/defaults/tests/mockFiles'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'

export const mockVehicleDocuments: VehicleDocumentWithFiles[] = createArrayFromTo(0, 4).map(
  (n) => ({
    createdBy: mockUsers[0].uid,
    modifiedAt: {
      seconds: 1694873987 + n,
      nanoseconds: 472000000 + n,
    } as Timestamp,
    createdAt: {
      seconds: 1694870099 + n,
      nanoseconds: 524000000 + n,
    } as Timestamp,
    notes: `n${n}`,
    name: `doc ${n} edit`,
    modifiedBy: mockUsers[0].uid,
    type:
      // eslint-disable-next-line no-nested-ternary
      n === 0
        ? VehicleDocumentType.General
        : n === 1
        ? VehicleDocumentType.Mechanic
        : VehicleDocumentType.Insurance,
    files: [mockFiles[3], mockFiles[4]],
    vehicleId: mockVehicles[0].uid,
    expirationDate: `2023-09-0${10 + n}`,
    deletedBy: null,
    creationDate: n === 0 ? `2023-09-0${n}` : '',
    deletedAt: null,
    uid: `XjbSGO81uWawiz12OiP${n}`,
  }),
)
