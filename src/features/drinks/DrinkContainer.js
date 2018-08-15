import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import shortid from 'shortid'
import MenuWrapper from '../components/MenuWrapper'
import PageHeaderContainer from '../components/page/PageHeaderContainer'
import DrinkNavComponent from './DrinkNavComponent'
import bgImg from '../../common/assets/img/drinks_banner.jpg';
import DrinkMenuComponent from './DrinkMenuComponent'
import LoadingComponent from '../components/loading/LoadingComponent'
// TODO: get drinkNavItems and locations from Wordpress

const DrinkContainer = (props) => {
  const selectedDrinkType = props.selectedDrinkType
  const currentLocation = props.currentLocation


    // ! Location id's are set through Digital Pour. Not a good index reference, since they don't start with 0
    const locations = [
      {id: 1, label: "Lawrenceville", location: "lv"},
      {id: 2, label: "North Fayette", location: "nf"}
    ]
    const drinkNavItems = [
      {label: "Cocktails", slug: "Cocktails", component: <DrinkMenuComponent query={WP_COCKTAILS} drinkType="cocktails" />, showLocation: false},
      {label: "Taps", slug: "Taps", component: <DrinkMenuComponent query={DP_TAPS} queryVariables={{location: currentLocation}} drinkType="taps" />, showLocation: true, props: ""},
      {label: "Cans", slug: "Cans", component: <DrinkMenuComponent query={WP_CANS} drinkType="cans" />, showLocation: true},
      {label: "Wine", slug: "Wine", component: <DrinkMenuComponent query={WP_WINE} drinkType="wine" />, showLocation: false},
      {label: "Premium", slug: "Premium", component: <DrinkMenuComponent query={WP_PREMIUM} drinkType="premium" />, showLocation: true},
    ]
    return(
      <Query query={ WP_COCKTAILS }>
      {
        ({loading, error, data, client}) =>{
          if(loading) return <LoadingComponent large />
          if(error) return <LoadingComponent />
          return(

          <div>
            <PageHeaderContainer bgImg={bgImg} heading="Drinks" review={true} />

            <DrinkNavComponent client={client} locations={locations} navItems={drinkNavItems} currentLocation={currentLocation} selectedDrinkType={selectedDrinkType} />

            <MenuWrapper>
              <Switch>
                <Route
                exact
                path="/Drink"
                render={() => <DrinkMenuComponent query={WP_COCKTAILS} drinkType="wine"/>}
              />
                  {drinkNavItems.map((navItem) => (
                    <Route key={shortid.generate()} exact path={'/Drink/' + navItem.slug} render={() => navItem.component} />
                  ))}

              </Switch>
            </MenuWrapper>
          </div>
        )
        }
      }
  </Query>
    )
}

export default withRouter(DrinkContainer);
const WP_COCKTAILS = gql`
  {
    menuItems: allCocktails {
      id
      acf {
        price
        name
        description
      }
    }
  }
`;

const WP_CANS = gql`
  {
    menuItems: allCans {
      id
      locations {
        id
      }
      acf {
        name
        price
        description
      }
    }
  }
`;

const WP_WINE = gql`
  {
    menuItems: allWine {
      id
      acf {
        name
        price
        description
      }
    }
  }
`;

const WP_PREMIUM = gql`
  {
    menuItems: allPremium {
      id
      locations {
        id
      }
      acf {
        tasting_notes
        proof
        aged
        background_picture
        distillery
        product_name
      }
    }
  }
`;

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