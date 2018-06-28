import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import HeaderComponent from './HeaderComponent'
export default class HeaderContainer extends Component {
  render() {
    return (
      <Query query={HEADER_PAGES}>
        {
          ({loading, error, data}) =>{
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            return <HeaderComponent headers={data.headers.edges} />
          }
        }
      </Query>
    )
  }
}

const HEADER_PAGES = gql`
{
  headers{
    edges{
      node{
        uri
        title
        content
        backgroundImageField{
          value
        }
      }
    }
  }
}

`