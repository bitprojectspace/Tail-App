/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPopUp = /* GraphQL */ `
  mutation CreatePopUp(
    $input: CreatePopUpInput!
    $condition: ModelPopUpConditionInput
  ) {
    createPopUp(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const updatePopUp = /* GraphQL */ `
  mutation UpdatePopUp(
    $input: UpdatePopUpInput!
    $condition: ModelPopUpConditionInput
  ) {
    updatePopUp(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const deletePopUp = /* GraphQL */ `
  mutation DeletePopUp(
    $input: DeletePopUpInput!
    $condition: ModelPopUpConditionInput
  ) {
    deletePopUp(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const createContractor = /* GraphQL */ `
  mutation CreateContractor(
    $input: CreateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    createContractor(input: $input, condition: $condition) {
      id
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
export const updateContractor = /* GraphQL */ `
  mutation UpdateContractor(
    $input: UpdateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    updateContractor(input: $input, condition: $condition) {
      id
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
export const deleteContractor = /* GraphQL */ `
  mutation DeleteContractor(
    $input: DeleteContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    deleteContractor(input: $input, condition: $condition) {
      id
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
