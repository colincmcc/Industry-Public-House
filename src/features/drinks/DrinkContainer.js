import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import shortid from 'shortid'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import LoadingComponent from '../../common/components/loading/LoadingComponent'
import PageHeaderContainer from '../../common/components/page/PageHeaderContainer'
import DrinkNavComponent from './DrinkNavComponent'
import TapLIstComponent from '../../common/components/digitalPour/TapLIstComponent';
import bgImg from '../../common/assets/img/drinks_banner.jpg';



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
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>

          const drinkNavItems = [
            {label: "Cocktails", slug: "Cocktails", component: "CocktailContainer", showLocation: false},
            {label: "Taps", slug: "Taps", component: <TapLIstComponent taps={data.allTaps} />, showLocation: true, props: ""},
            {label: "Cans", slug: "Cans", component: "CocktailContainer", showLocation: true},
            {label: "Wine", slug: "Wine", component: "CocktailContainer", showLocation: false},
            {label: "Premium", slug: "Premium", component: "CocktailContainer", showLocation: true},
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