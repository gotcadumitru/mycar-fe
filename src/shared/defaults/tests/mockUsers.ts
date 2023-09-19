import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'

export const mockUsers = createArrayFromTo(0, 4).map((n) => ({
  accessToken: `eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOG${n}`,
  auth: {},
  displayName: `Dumitru Gotca ${n}`,
  email: `dum.gotca${n}@gmail.com`,
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  phoneNumber: null,
  photoURL: `https://lh3.googleusercontent.com/a/AAcHTteJtu5cd_VS6n1UAmARzvmlGav3dkguSJV4UeE3kQNtIQ=s96-c${n}`,
  proactiveRefresh: {},
  providerData: [{}],
  providerId: 'firebase',
  reloadListener: null,
  reloadUserInfo: {},
  stsTokenManager: {},
  tenantId: null,
  uid: `JdyFGTHhuqQFoIgwAIv6LZYM5NB2${n}`,
  refreshToken: `AMf-vBywGZS1MOPEIakLsVUkDf5${n}`,
}))
