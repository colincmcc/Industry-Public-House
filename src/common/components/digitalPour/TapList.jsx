import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import TapItem from "./TapItem";

// * Requires json tap list as props

/**
 * With the Digital Pour Json as props:
 *  - Determines column size for the CSS grid, based on a 2 column layout
 *  - Determines the object being passed to TapItem based on the beverage style
 *  - Creates a TapItem per beverage style and lays it out in the grid.
 **/

const TapList = props => {
  const columnSize = Math.ceil(props.taps.length / 2);
  return (
    <TapListWrapper columnSize={columnSize}>
      {props.taps.map(tap => {
        const bevType = tap.MenuItemProductDetail.BeverageType;
        switch (bevType) {
          case "Beer": {
            const bevListing = {
              breweryName:
                tap.MenuItemProductDetail.Beverage.Brewery.BreweryName,
              bevName: tap.MenuItemProductDetail.BeverageNameWithVintage,
              bevStyle: tap.MenuItemProductDetail.Beverage.BeerStyle.StyleName,
              breweryLocation:
                tap.MenuItemProductDetail.Beverage.Brewery.Location,
              bevAbv: tap.MenuItemProductDetail.Beverage.Abv
            };
            return <TapItem key={shortid.generate()} tap={bevListing} />;
          }
          case "Cider": {
            const bevListing = {
              breweryName: tap.MenuItemProductDetail.Beverage.Cidery.CideryName,
              bevName: tap.MenuItemProductDetail.BeverageNameWithVintage,
              bevStyle: "Cider",
              breweryLocation:
                tap.MenuItemProductDetail.Beverage.Cidery.Location,
              bevAbv: tap.MenuItemProductDetail.Beverage.Abv
            };
            return <TapItem key={shortid.generate()} tap={bevListing} />;
          }
          case "Coffee": {
            const bevListing = {
              breweryName:
                tap.MenuItemProductDetail.Beverage.CoffeeProducer
                  .CoffeeProducerName,
              bevName: tap.MenuItemProductDetail.BeverageNameWithVintage,
              bevStyle: "Coffee",
              breweryLocation:
                tap.MenuItemProductDetail.Beverage.CoffeeProducer.Location,
              bevAbv: 0
            };
            return <TapItem key={shortid.generate()} tap={bevListing} />;
          }
          default: {
            const bevListing = {
              breweryName: "Industry Public House",
              bevName: "",
              bevStyle: "",
              breweryLocation: "Pittsburgh, PA",
              bevAbv: 0
            };
            return <TapItem key={shortid.generate()} tap={bevListing} />;
          }
        }
      })}
    </TapListWrapper>
  );
};

export default TapList;

const TapListWrapper = styled.div`
  display: grid;
  margin: auto;
  width: 100%;
  ${props => props.theme.media.tablet_landscape_up`
  grid: repeat(${props => props.columnSize}, 1fr) / auto-flow;
  `};
`;
const TapListHeader = styled.div``;
