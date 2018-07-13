import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FoodDrinkComponent from "../common/FoodDrinkComponent";
import TapLIstComponent from "../../common/components/digitalPour/TapLIstComponent";

const DrinkMenuComponent = props => {
  const { drinkType } = props;
  const query = WP_COCKTAILS;
  return (
    <Query query={query}>
      {({ loading, error, data, client }) => {
        switch (drinkType) {
          case "cocktails":
            return null;
          case "taps":
            return (
              <TapLIstComponent
                taps={data.allTaps}
                loading={loading}
                error={error}
              />
            );
          case "cocktails":
            return null;
          case "cocktails":
            return null;
          case "cocktails":
            return null;
          default:
            return null;
        }
      }}
    </Query>
  );
};

export default DrinkMenuComponent;

const WP_COCKTAILS = gql`
  {
    allCocktails {
      id
    }
  }
`;

const WP_CANS = gql`
  {
    allCans {
      id
    }
  }
`;

const WP_WINE = gql`
  {
    allWine {
      id
    }
  }
`;

const WP_PREMIUM = gql`
  {
    allPremium {
      id
    }
  }
`;
