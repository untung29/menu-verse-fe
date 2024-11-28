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
        detail {
          id
          label
          items {
            detail {
              label
              description
              price
            }
            displayOrder
          }
        }
        displayOrder
      }
    }
  }
`;
