import MockAdapter from 'axios-mock-adapter'
import { carAPI } from 'shared/api'

const mock = new MockAdapter(carAPI)

mock.onGet('/categories/organisation/2647058').reply(200, { body: 'jostka' })

export default mock
