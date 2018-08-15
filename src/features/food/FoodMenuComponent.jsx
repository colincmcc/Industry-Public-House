import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FoodDrinkComponent from "../components/FoodDrinkComponent";

const FoodMenuComponent = props => {
  const { selectedFoodType } = props;

  return (
    <Query query={WP_FOODS} variables={{ selectedFoodType }}>
      {({ loading, error, data }) => {
        return (
          <FoodDrinkComponent data={data} loading={loading} error={error} />
        );
      }}
    </Query>
  );
};

export default FoodMenuComponent;

export const WP_FOODS = gql`
  query Foods($selectedFoodType: String!) {
    menuItems: foodsByMeta(food_type: $selectedFoodType) {
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
const FoodMenuComponent = (props) => {
  const { selectedFoodType } = props;

  return (
    <Query query={WP_FOODS} variables={{ selectedFoodType }}>
      {({ loading, error, data }) => (
        <FoodDrinkComponent data={data} loading={loading} error={error} />
      )}
    </Query>
  );
};

export default FoodMenuComponent;
