import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'


import FoodNavComponent from "./FoodNavComponent";
import FoodMenuComponent from './FoodMenuComponent'

// * Highest level Food Menu component
export default () => {
  return (
    <Query query={WP_FOODS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>
          return (
          <div>
            <FoodNavComponent />
            <FoodMenuComponent foods={data.foods.edges} />
          </div>
        )

        }
      }
    </Query>
  )
}


const WP_FOODS = gql`
  {
    foods{
    edges{
      node{
        id
        title
        content
        priceField {
          value
        }
        foodTypeField{
          value
        }
      }
    }
  }
  }
`