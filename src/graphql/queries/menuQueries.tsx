import { gql } from "@apollo/client";

export const GET_MENUS = gql`
  query Menus {
    menus {
      endDate
      id
      label
      startDate
      state
      sections {
        description
        id
        label
        state
        items {
          id
          label
          description
          price
        }
      }
    }
  }
`;
