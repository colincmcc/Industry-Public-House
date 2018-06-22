import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import FoodComponent from './FoodComponent'

export default () => {
  return (
    <Query query={WP_FOODS}>
      {
        ({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error</p>
          return <FoodComponent foods={data.foods.edges} />

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
          content
          title
          priceField{
            value
          }
        }
      }
    }
  }
`