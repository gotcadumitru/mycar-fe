import {apiConfig} from 'shared/api'
import type {UserFromSalesforce, UserFromSalesforceRequest} from '../../model/types/user.types'

export const mapUserMinFromSalesforce = (
  userFromSalesforce: UserFromSalesforceRequest,
): UserFromSalesforce => {
  const { namespace } = apiConfig.getConfig()!

  return {
    idFromApi: userFromSalesforce[`${namespace}Id__c`]!,
    idFromSalesforce: userFromSalesforce[`${namespace}Id`]!,
    enabled: userFromSalesforce[`${namespace}Enabled__c`]!,
    firstName: userFromSalesforce[`${namespace}FirstName__c`]!,
    lastName: userFromSalesforce[`${namespace}LastName__c`]!,
    mobilePhone: userFromSalesforce[`${namespace}MobilePhone__c`]!,
    sipDevice: userFromSalesforce[`${namespace}SipDevice__c`]!,
    username: userFromSalesforce[`${namespace}Username__c`]!,
  }
}
