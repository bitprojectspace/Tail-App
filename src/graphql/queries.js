/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPopUp = /* GraphQL */ `
  query GetPopUp($id: ID!) {
    getPopUp(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPopUps = /* GraphQL */ `
  query ListPopUps(
    $filter: ModelPopUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPopUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      id
      contractorID
      fullName
      address
      city
      province
      postalCode
      phoneNumber
      rating
      registrationDate
      email
      createdAt
      updatedAt
    }
  }
`;
export const listContractors = /* GraphQL */ `
  query ListContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contractorID
        fullName
        address
        city
        province
        postalCode
        phoneNumber
        rating
        registrationDate
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
