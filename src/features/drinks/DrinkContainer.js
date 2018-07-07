import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import TapList from "../../common/components/digitalPour/TapList";

import LoadingComponent from '../../common/components/loading/LoadingComponent'
import DrinkNavComponent from './DrinkNavComponent'
import DrinkMenuContainer from './DrinkMenuContainer'

// TODO: get drinkNavItems and locations from Wordpress

const DrinkContainer = (props) => {
  const selectedDrinkType = props.selectedDrinkType
  const currentLocation = props.currentLocation

    const locations = [
      {id: 1, label: "Lawrenceville", location: "lv"},
      {id: 2, label: "North Fayette", location: "nf"}
    ]
    return(
      <Query query={ DP_TAPS } variables={{location: currentLocation}}>
      {
        ({loading, error, data, client}) =>{
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>

          const drinkNavItems = [
            {label: "Cocktails", slug: "Cocktails", component: "CocktailContainer", showLocation: false},
            {label: "Taps", slug: "Taps", component: "<TapList taps={data.allTaps} />", showLocation: true, props: ""},
            {label: "Cans", slug: "Cans", component: "CocktailContainer", showLocation: true},
            {label: "Wine", slug: "Wine", component: "CocktailContainer", showLocation: false},
            {label: "Premium", slug: "Premium", component: "CocktailContainer", showLocation: true},
          ]

          return(

          <div>
            <DrinkNavComponent client={client} locations={locations} navItems={drinkNavItems} currentLocation={currentLocation} selectedDrinkType={selectedDrinkType} />

            <Switch>
              <Route exact to="/Drink/Cocktails" render={() => <TapList taps={data.allTaps} />} />
              <Route exact to="/Drink/Taps" render={() => <TapList taps={data.allTaps} />} />
              <Route exact to="/Drink/Cocktails" render={() => <LoadingComponent />} />
              <Route exact to="/Drink/Cocktails" render={() => <LoadingComponent />} />
              <Route exact to="/Drink/Cocktails" render={() => <LoadingComponent />} />
            </Switch>

          </div>
        )
        }
      }
  </Query>
    )
}

export default withRouter(DrinkContainer)

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