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
      <TapContent>
        <TapHeader>
          <BreweryName> {props.tap.breweryName} </BreweryName>
          <BeerName> {props.tap.bevName} </BeerName>
        </TapHeader>
        <TapDescription>
          {props.tap.bevStyle} - {props.tap.breweryLocation} <br />
          ABV: {props.tap.bevAbv}%
        </TapDescription>
      </TapContent>
    </TapWrapper>
  );
};

export default TapItem;

const TapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  height: 125px;
  color: white;
  padding: 1em 1.6em;
`;
const TapHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const TapContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
const BreweryName = styled.span`
  ${props => props.theme.fontStyles.medium};

  padding-right: 1.25em;
`;
const BeerName = styled.span`
  ${props => props.theme.fontStyles.medium};
  font-style: italic;
  font-weight: normal;
`;
const TapDescription = styled.p`
  ${props => props.theme.fontStyles.text};
`;
const BeerLevel = styled.img`
  height: 125px;
  width: 75px;
  padding-right: 1em;
`;
