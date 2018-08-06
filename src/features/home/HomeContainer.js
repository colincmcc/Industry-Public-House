import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from 'graphql-tag'
import HomeComponent from './HomeComponent'

export default class HomeContainer extends
Component {

  render() {

    return (

      <Query query={HOME_PAGE}>
      {
        ({ loading, error, data }) => {
          return <HomeComponent loading={loading} error={error} {...data} />

        }
      }
    </Query>
  )
}
}

const HOME_PAGE = gql`
{
  allHeaders{
    id
    title{
      rendered
    }
    content{
      rendered
    }
    link
    acf{
      background_image
      hero_image
      isFeatured
      customLink
      headerLink
      subHeading
      buttonText
    }
  }

}
`