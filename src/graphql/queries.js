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
