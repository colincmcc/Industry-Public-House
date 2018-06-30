import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import LoadingComponent from '../../common/components/loading/LoadingComponent'
import HomeComponent from './HomeComponent'

export default class HomeContainer extends
Component {

  render() {

    return (

      // TODO: combine food & drink features by using router & props since data structure is the same
      <Query query={WP_QUERY}>
      {
        ({ loading, error, data }) => {
          if(loading) return <LoadingComponent />
          if(error) return <p>Error</p>
          return <HomeComponent wpData={data} />

        }
      }
    </Query>
  )
}
}

const WP_QUERY = gql`
{
  allHeaders{
    id
  }

}
`