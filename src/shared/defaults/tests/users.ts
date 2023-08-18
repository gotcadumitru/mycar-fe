import { UserFromSalesforce, UserFromSalesforceRequest } from 'enteties/user'

export const userFromSalesforceConverted1: UserFromSalesforce = {
  enabled: true,
  firstName: 'John',
  lastName: 'Doe',
  idFromSalesforce: '0001',
  idFromApi: 1234,
  mobilePhone: '123-456-7890',
  sipDevice: 123,
  username: 'johndoe@example.com',
}
export const userFromSalesforceConverted2: UserFromSalesforce = {
  enabled: true,
  firstName: 'Jane',
  lastName: 'Smith',
  idFromSalesforce: '0002',
  idFromApi: 5678,
  mobilePhone: '987-654-3210',
  sipDevice: 456,
  username: 'janesmith@example.com',
}
export const userFromSalesforceConverted3: UserFromSalesforce = {
  enabled: true,
  firstName: 'Bob',
  lastName: 'Johnson',
  idFromSalesforce: '0003',
  idFromApi: 9012,
  mobilePhone: '555-555-1212',
  sipDevice: 789,
  username: 'bobjohnson@example.com',
}
export const userFromSalesforceRequest1: UserFromSalesforceRequest = {
  Enabled__c: userFromSalesforceConverted1.enabled,
  FirstName__c: userFromSalesforceConverted1.firstName,
  Id: userFromSalesforceConverted1.idFromSalesforce,
  Id__c: userFromSalesforceConverted1.idFromApi,
  LastName__c: userFromSalesforceConverted1.lastName,
  MobilePhone__c: userFromSalesforceConverted1.mobilePhone,
  SipDevice__c: userFromSalesforceConverted1.sipDevice,
  User__c: '1057S000000sUcQQAU',
  Username__c: userFromSalesforceConverted1.username,
}
export const userFromSalesforceRequest2: UserFromSalesforceRequest = {
  Enabled__c: userFromSalesforceConverted2.enabled,
  FirstName__c: userFromSalesforceConverted2.firstName,
  Id: userFromSalesforceConverted2.idFromSalesforce,
  Id__c: userFromSalesforceConverted2.idFromApi,
  LastName__c: userFromSalesforceConverted2.lastName,
  MobilePhone__c: userFromSalesforceConverted2.mobilePhone,
  SipDevice__c: userFromSalesforceConverted2.sipDevice,
  User__c: '2057S000000sUcQQAU',
  Username__c: userFromSalesforceConverted2.username,
}
export const userFromSalesforceRequest3: UserFromSalesforceRequest = {
  Enabled__c: userFromSalesforceConverted3.enabled,
  FirstName__c: userFromSalesforceConverted3.firstName,
  Id: userFromSalesforceConverted3.idFromSalesforce,
  Id__c: userFromSalesforceConverted3.idFromApi,
  LastName__c: userFromSalesforceConverted3.lastName,
  MobilePhone__c: userFromSalesforceConverted3.mobilePhone,
  SipDevice__c: userFromSalesforceConverted3.sipDevice,
  User__c: '3057S000000sUcQQAU',
  Username__c: userFromSalesforceConverted3.username,
}
export const usersFromSalesforce = {
  converted: [
    userFromSalesforceConverted1,
    userFromSalesforceConverted2,
    userFromSalesforceConverted3,
  ],
  originalFromRequest: [
    userFromSalesforceRequest1,
    userFromSalesforceRequest2,
    userFromSalesforceRequest3,
  ],
}
