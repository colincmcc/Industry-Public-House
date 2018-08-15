import React from "react";
import { Query } from "react-apollo";
import FoodDrinkComponent from "../components/FoodDrinkComponent";
import TapLIstComponent from "../components/digitalPour/TapLIstComponent";

const DrinkMenuComponent = props => {
  const { drinkType, query, queryVariables } = props;
  return (
    <Query query={query} variables={queryVariables}>
      {({ loading, error, data }) => {
        if (drinkType === "taps")
          return (
            <TapLIstComponent data={data} loading={loading} error={error} />
          );
        return (
          <FoodDrinkComponent data={data} loading={loading} error={error} />
        );
      }}
    </Query>
  );
};

export default DrinkMenuComponent;
