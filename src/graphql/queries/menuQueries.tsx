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
        label
        state
        id
      }
    }
  }
`;
