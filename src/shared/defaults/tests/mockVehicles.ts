import { VehicleWithFiles } from 'enteties/vehicle'
import { Timestamp } from 'firebase/firestore'
import { mockFiles } from 'shared/defaults/tests/mockFiles'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'

export const mockVehicles: VehicleWithFiles[] = createArrayFromTo(0, 4).map((n) => ({
  yearOfProduction: 2014 + n,
  maximumAuthorisedMass: 1700 + n,
  usagePercentUrb: 20 + n,
  fuelConsumptionUrb: 56 + n,
  civSeries: `hz cei asta civ ${n}`,
  type: 1,
  model: 1621 + n,
  usagePercentExtraUrb: 40 + n,
  fuelConsumptionExtraUrb: 50 + n,
  dotSummerTyre: `hz cei dot ${n}`,
  dotWinterTyre: `hz cei dot ${n}`,
  modifiedBy: mockUsers[0].uid,
  power: 106 + n,
  registrationNumber: `SNO40${6 + n}`,
  color: `black ${n}`,
  createdBy: mockUsers[0].uid,
  isLeasingVehicle: !!(n % 2),
  fuelType: 1 + n,
  numberOfSeats: 2 + n,
  modifiedAt: {
    seconds: 1694869458 + n,
    nanoseconds: 837000000 + n,
  } as Timestamp,
  leasingCompany: n % 2 ? 46 + n : null,
  ownedBy: n % 2 ? 1 : 2,
  winterTyreSize: 3 + n,
  createdAt: {
    seconds: 1694420625 + n,
    nanoseconds: 378000000 + n,
  } as Timestamp,
  userId: mockUsers[0].uid,
  vin: `SJNFAAJ11U116179${n}`,
  summerTyreSize: 43 + n,
  cylinderCapacity: 1500 + n,
  deletedBy: null,
  deletedAt: null,
  files: [mockFiles[0], mockFiles[1], mockFiles[2]],
  brand: 195,
  uid: `evFqd5cAUCA2r35CLRRz${n}`,
}))
