import React from "react";
import List from "@material-ui/core/List";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";
import TapItemComponent from "./TapItemComponent";
import theme from "../../../common/styled/theme";
import LoadingComponent from "../loading/LoadingComponent";
// TODO : must be a better way to handle the json response based on type of product (mead, beer, cider)

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

const TapLIstComponent = props => {
  const { classes, loading, error, data } = props;
  if (error || !data.allTaps) return <LoadingComponent />;
  if (loading) return <LoadingComponent />;

  return (
    <div className={classes.root}>
      <List className={classes.listRoot}>
        {data.allTaps.map(tap => {
          const bevType = tap.MenuItemProductDetail.BeverageType;
          switch (bevType) {
            case "Beer": {
              const bevListing = {
                breweryName:
                  tap.MenuItemProductDetail.Beverage.Brewery.BreweryName,
                bevName: tap.MenuItemProductDetail.BeverageNameWithVintage,
                bevStyle:
                  tap.MenuItemProductDetail.Beverage.BeerStyle.StyleName,
                breweryLocation:
                  tap.MenuItemProductDetail.Beverage.Brewery.Location,
                bevAbv: tap.MenuItemProductDetail.Beverage.Abv
              };
              return (
                <TapItemComponent key={shortid.generate()} tap={bevListing} />
              );
            }
            case "Cider": {
              const bevListing = {
                breweryName:
                  tap.MenuItemProductDetail.Beverage.Cidery.CideryName,
                bevName: tap.MenuItemProductDetail.BeverageNameWithVintage,
                bevStyle: "Cider",
                breweryLocation:
                  tap.MenuItemProductDetail.Beverage.Cidery.Location,
                bevAbv: tap.MenuItemProductDetail.Beverage.Abv
              };
              return (
                <TapItemComponent key={shortid.generate()} tap={bevListing} />
              );
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
              return (
                <TapItemComponent key={shortid.generate()} tap={bevListing} />
              );
            }
            default: {
              const bevListing = {
                breweryName: "Industry Public House",
                bevName: "",
                bevStyle: "",
                breweryLocation: "Pittsburgh, PA",
                bevAbv: 0
              };
              return (
                <TapItemComponent key={shortid.generate()} tap={bevListing} />
              );
            }
          }
        })}{" "}
      </List>
    </div>
  );
};

export default withStyles(theme.materialUI)(TapLIstComponent);
