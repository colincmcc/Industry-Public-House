import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FoodDrinkComponent from "../common/FoodDrinkComponent";

const FoodMenuComponent = props => {
  const { selectedFoodType } = props;

  return (
    <Query query={WP_FOODS} variables={{ selectedFoodType }}>
      {({ loading, error, data, client }) => {
        return (
          <FoodDrinkComponent
            menuItems={data.foodsByMeta}
            loading={loading}
            error={error}
          />
        );
      }}
    </Query>
  );
};

export default FoodMenuComponent;

export const WP_FOODS = gql`
  query Foods($selectedFoodType: String!) {
    allFoods {
      id
      acf {
        price
        food_type
        name
        description
      }
    }
    foodsByMeta(food_type: $selectedFoodType) {
      id
      acf {
        price
        food_type
        name
        description
      }
    }
  }
`;
