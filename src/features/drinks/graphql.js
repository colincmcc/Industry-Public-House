import gql from 'graphql-tag';

export const WP_COCKTAILS = gql`
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

export const WP_CANS = gql`
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

export const WP_WINE = gql`
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

export const WP_PREMIUM = gql`
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
