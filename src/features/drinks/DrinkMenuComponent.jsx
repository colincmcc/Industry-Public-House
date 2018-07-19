import React from "react";
import { Query } from "react-apollo";
import FoodDrinkComponent from "../common/FoodDrinkComponent";
import TapLIstComponent from "../common/digitalPour/TapLIstComponent";

const DrinkMenuComponent = props => {
  const { drinkType, query, queryVariables } = props;
  return (
    <Query query={query} variables={queryVariables}>
      {({ loading, error, data, client }) => {
        if (loading) return <div> Loading ... </div>;
        if (error) return <div> error </div>;

        if (drinkType === "taps")
          return (
            <TapLIstComponent
              taps={data.allTaps}
              loading={loading}
              error={error}
            />
          );
        return (
          <FoodDrinkComponent
            menuItems={data.menuItems}
            loading={loading}
            error={error}
          />
        );
      }}
    </Query>
  );
};

export default DrinkMenuComponent;
