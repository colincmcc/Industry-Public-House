import React from "react";
import styled from "styled-components";
import placeholder from "../../assets/img/Industry_fullLogo_sm_wht.svg";

/**
 * * Example GraphQL JSON response

  "Id": "5b20831e5e002c0dc8ae5169",
  "MenuItemProductDetail": {
    "BeverageType": "Beer",
    "PosReportedPercentFull": 0.33568548387096775,
    "BeverageNameWithVintage": "Velvet Yeti",
    "Beverage": {
      "Brewery": {
        "BreweryName": "Great Divide",
        "Location": "Denver, CO"
      },
      "Abv": 5,
      "Ibu": null,
      "HasAward": false,
      "StyleColor": 1641729,
      "RateBeerUrl": null,
      "BeerAdvocateUrl": null,
      "UntappdUrl": null,
      "HopsUsed": null,
      "BarrelAging": null,
      "BeerStyle": {
        "StyleName": "Stout"
      }
    }
  }

 */

const TapItem = props => {
  return (
    <TapWrapper>
      <BeerLevel img={placeholder} />
      <TapHeader>
        <BreweryName> {props.tap.breweryName} - </BreweryName>
        <BeerName> {props.tap.bevName} </BeerName>
      </TapHeader>
      <TapDescription>
        {props.tap.bevStyle} - {props.tap.breweryLocation} <br />
        ABV: {props.tap.bevAbv}%
      </TapDescription>
    </TapWrapper>
  );
};

export default TapItem;

const TapWrapper = styled.div`
  display: grid;
  grid: repeat(3, 1fr) / 1fr 3fr;
  text-align: left;
  height: 150px;
  color: white;
`;
const TapHeader = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 2/3;
  grid-row: 1/2;
`;
const BreweryName = styled.h3``;
const BeerName = styled.h3``;
const TapDescription = styled.p`
  grid-column: 2/3;
  grid-row: 2/4;
  font-size: 1em;
`;
const BeerLevel = styled.img`
  grid-column: 1 /2;
  grid-row: 1/4;
  height: 100px;
  width: 100px;
  margin: auto;
`;
