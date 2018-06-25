import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import AboutComponent from './AboutComponent';

export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={ABOUT_PAGE}>
        {
          ({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            return <AboutComponent aboutPage={data} />


          }
        }
      </Query>
    )
  }
}

const ABOUT_PAGE = gql`
{
  AboutPage: pageBy(uri: "about"){
    uri
    content
    backgroundImageField{
      value
    }
  }
}
`