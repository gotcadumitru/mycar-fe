export type UserSliceState = {
  allUsersFromSalesforce: UserFromSalesforce[]
  authUser: UserFromSalesforce | null
}

// depends on namespace
export interface UserFromSalesforceRequest {
  Enabled__c: boolean
  nbavs__Enabled__c?: boolean
  FirstName__c: string
  nbavs__FirstName__c?: string
  Id: string
  nbavs__Id?: string
  Id__c: number
  nbavs__Id__c?: number
  LastName__c: string
  nbavs__LastName__c?: string
  MobilePhone__c: string
  nbavs__MobilePhone__c?: string
  SipDevice__c: number
  nbavs__SipDevice__c?: number
  User__c: string
  nbavs__User__c?: string
  Username__c: string
  nbavs__Username__c?: string
}

export interface UserFromSalesforce {
  enabled: boolean
  firstName: string
  lastName: string
  idFromSalesforce: string
  idFromApi: number
  mobilePhone: string
  sipDevice: number
  username: string
}

export interface UserFromSapien {
  id: number
  userName: string
  firstName: string
  lastName: string
  sipExtension: string
  availabilityProfile: AvailabilityProfile
  availabilityState: AvailabilityState
}

export interface AvailabilityProfile {
  id: number
  name: string
}

export interface AvailabilityState {
  id: number
  name: string
  displayName: string
}
