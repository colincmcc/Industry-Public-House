import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TapList from "../../../../common/components/digitalPour/TapList";

const TapContainer = () => {
  return (
    <Query query={DP_TAPS} variables={{ location: 1 }}>
      {({ loading, error, data, client }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        return <TapList taps={data.allTaps} />;
      }}
    </Query>
  );
};

export default TapContainer;

const DP_TAPS = gql`
  query Taps($location: Int!) {
    allTaps(location: $location) {
      Id
      MenuItemProductDetail {
        BeverageType
        PosReportedPercentFull
        BeverageNameWithVintage
        Beverage {
          Brewery {
            BreweryName
            Location
          }
          Cidery {
            CideryName
            Location
          }
          Meadery {
            MeaderyName
            Location
          }
          Abv
          Ibu
          HasAward
          StyleColor
          RateBeerUrl
          BeerAdvocateUrl
          UntappdUrl
          HopsUsed
          BarrelAging
          BeerStyle {
            StyleName
          }
        }
      }
    }
  }
`;
