export type UserSliceState = {
  authUser: User | null
}

export interface User {
  id: number
  userName: string
  firstName: string
  lastName: string
  sipExtension: string

}
