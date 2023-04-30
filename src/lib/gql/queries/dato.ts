import { gql } from "@apollo/client";

export const HOMEPAGE_QUERY = gql`
  query MyQuery {
    pageHome {
      homepageSections {
        ... on SectionCategorySelectionRecord {
          id
        }
      }
    }
  }
`;
