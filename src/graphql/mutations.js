/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContractor = /* GraphQL */ `
  mutation CreateContractor(
    $input: CreateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    createContractor(input: $input, condition: $condition) {
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
export const updateContractor = /* GraphQL */ `
  mutation UpdateContractor(
    $input: UpdateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    updateContractor(input: $input, condition: $condition) {
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
export const deleteContractor = /* GraphQL */ `
  mutation DeleteContractor(
    $input: DeleteContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    deleteContractor(input: $input, condition: $condition) {
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
