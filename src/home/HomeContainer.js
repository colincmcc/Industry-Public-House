import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import LoadingComponent from '../common/components/loading/LoadingComponent'
import HomeComponent from './HomeComponent'

export default class HomeContainer extends
Component {
  render() {
    return (

      <Query query={WP_QUERY}>
        {
          ({ loading, error, data }) => {
            if(loading) return <LoadingComponent />
            if(error) return <p>Error</p>
            console.log(data.HeaderPage)
            return <HomeComponent wpData={data} />

          }
        }
      </Query>
    )
  }
}

const WP_QUERY = gql`
  {
    HeaderPage: pageBy(uri: "header"){
    uri
    backgroundImageField{
      value
    }
  }

  }
`