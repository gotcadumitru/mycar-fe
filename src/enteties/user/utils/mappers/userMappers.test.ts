import { mapUserMinFromSalesforce } from 'enteties/user'
import { usersFromSalesforce } from 'shared/defaults/tests/users'

describe('user mappers', () => {
  test('mapUserMinFromSalesforce', () => {
    expect(usersFromSalesforce.originalFromRequest.map(mapUserMinFromSalesforce)).toStrictEqual(
      usersFromSalesforce.converted,
    )
  })
})
