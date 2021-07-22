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
