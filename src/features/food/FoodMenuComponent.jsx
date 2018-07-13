import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FoodDrinkComponent from "../common/FoodDrinkComponent";
import { select } from "async";

const FoodMenuComponent = props => {
  const { selectedFoodType } = props;

  return (
    <Query query={WP_FOODS} variables={{ selectedFoodType }}>
      {({ loading, error, data, client }) => {
        console.log(data);

        if (loading)
          return (
            <FoodDrinkComponent
              menuItems={[]}
              loading={loading}
              error={error}
            />
          );

        if (error)
          return (
            <FoodDrinkComponent
              menuItems={[]}
              loading={loading}
              error={error}
            />
          );

        const selectedFoods = data.foodsBy.map(food => ({
          id: food.id,
          price: food.acf.price,
          type: food.acf.type,
          name: food.acf.name,
          description: food.acf.description
        }));
        console.log(selectedFoods);
        return (
          <FoodDrinkComponent
            menuItems={selectedFoods}
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
    foodsBy(foodType: $selectedFoodType) {
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
