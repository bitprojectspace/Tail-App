/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      id
      name
      description
      filePath
      address
      city
      email
      fullname
      phoneNumber
      postalCode
      province
      rating
      registrationDate
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
        name
        description
        filePath
        address
        city
        email
        fullname
        phoneNumber
        postalCode
        province
        rating
        registrationDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
