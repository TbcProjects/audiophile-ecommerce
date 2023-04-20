import { gql } from "graphql-request";

export const HOMEPAGE_QUERY = gql`
  query MyQuery {
    allPages {
      heading {
        heading
      }
    }
  }
`;
