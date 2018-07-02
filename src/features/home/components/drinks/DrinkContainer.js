import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import DrinkNavComponent from './DrinkNavComponent'
import DrinkMenuContainer from './DrinkMenuContainer'

// TODO: get drinkNavItems and locations from Wordpress

const DrinkContainer = (props) => {
  const selectedDrinkType = props.cachedState.selectedDrinkType
  const currentLocation = props.cachedState.currentLocation


    const drinkNavItems = [
      {label: "Cocktails", slug: "cocktails", component: "CocktailContainer", showLocation: false},
      {label: "Taps", slug: "taps", component: "CocktailContainer", showLocation: true},
      {label: "Bottles", slug: "bottles", component: "CocktailContainer", showLocation: true},
      {label: "Wine", slug: "wine", component: "CocktailContainer", showLocation: false},
      {label: "Premium", slug: "premium", component: "CocktailContainer", showLocation: true},
    ]

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
          return(

          <div>
            <DrinkNavComponent client={client} locations={locations} navItems={drinkNavItems} currentLocation={currentLocation} selectedDrinkType={selectedDrinkType} />
            <DrinkMenuContainer data={data} drinkMenu={selectedDrinkType} />
          </div>
        )
        }
      }
  </Query>
    )
}

export default DrinkContainer

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