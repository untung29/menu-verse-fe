import { gql } from "@apollo/client";

export const GET_ITEM = gql`
  query Item($id: ID!) {
    item(id: $id) {
      description
      id
      label
      price
      quantity
      type
      modifierGroups {
        id
        label
        selectionRequiredMax
        selectionRequiredMin
        modifiers {
          defaultQuantity
          displayOrder
          id
          priceOverride
          item {
            label
          }
        }
      }
    }
  }
`;
