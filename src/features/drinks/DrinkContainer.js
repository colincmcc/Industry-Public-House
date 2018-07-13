import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import shortid from 'shortid'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import PageHeaderContainer from '../../common/components/page/PageHeaderContainer'
import DrinkNavComponent from './DrinkNavComponent'
import TapLIstComponent from '../../common/components/digitalPour/TapLIstComponent';
import bgImg from '../../common/assets/img/drinks_banner.jpg';
import FoodDrinkComponent from '../common/FoodDrinkComponent'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "2em",
    backgroundColor: "#F4EDDC",
    color: "#110C02"

  },
});
// TODO: get drinkNavItems and locations from Wordpress

const DrinkContainer = (props) => {
  const selectedDrinkType = props.selectedDrinkType
  const currentLocation = props.currentLocation

    // ! Location id's are set through Digital Pour. Not a good index reference, since they don't start with 0
    const locations = [
      {id: 1, label: "Lawrenceville", location: "lv"},
      {id: 2, label: "North Fayette", location: "nf"}
    ]
    const { classes } = props;

    return(
      <Query query={ DP_TAPS } variables={{location: currentLocation}}>
      {
        ({loading, error, data, client}) =>{

          const drinkNavItems = [
            {label: "Cocktails", slug: "Cocktails", component: <FoodDrinkComponent menuItems={[]} loading={loading} error={error} />, showLocation: false},
            {label: "Taps", slug: "Taps", component: <TapLIstComponent taps={data.allTaps} loading={loading} error={error} />, showLocation: true, props: ""},
            {label: "Cans", slug: "Cans", component: <FoodDrinkComponent menuItems={[]}  loading={loading} error={error} />, showLocation: true},
            {label: "Wine", slug: "Wine", component: <FoodDrinkComponent menuItems={[]}  loading={loading} error={error} />, showLocation: false},
            {label: "Premium", slug: "Premium", component: <FoodDrinkComponent menuItems={[]}  loading={loading} error={error} />, showLocation: true},
          ]

          return(

          <div>
            <PageHeaderContainer bgImg={bgImg} heading="Drinks" review={true} />

            <DrinkNavComponent client={client} locations={locations} navItems={drinkNavItems} currentLocation={currentLocation} selectedDrinkType={selectedDrinkType} />

            <Paper className={classes.root} elevation={2}>
            <Switch>
              {drinkNavItems.map((navItem) => (
                <Route key={shortid.generate()} exact path={'/Drink/' + navItem.slug} render={() => navItem.component} />
              ))}

            </Switch>
            </Paper>
          </div>
        )
        }
      }
  </Query>
    )
}

export default withStyles(styles)(withRouter(DrinkContainer))

const WP_COCKTAILS = gql`
{
  allCocktails{
    id
  }
}
`

const WP_CANS = gql`
query Cans($location: Int!) {
  allCans(location: $location){
    id
  }
}
`

const WP_WINE= gql`
{
  allWine{
    id
  }
}
`

const WP_PREMIUM = gql`
query Premium($location: Int!) {
  allCans(location: $location){
    id
  }
}
`

export const DP_TAPS = gql`
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
          CoffeeProducer {
            CoffeeProducerName
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