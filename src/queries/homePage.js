import gql from "graphql-tag";

export const GET_HOME_PAGE = gql`
  {
    homePage {
      id
      Description
    }
  }
`;
