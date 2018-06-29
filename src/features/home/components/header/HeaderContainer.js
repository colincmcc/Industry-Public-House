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

            const allHeaders = data.allHeaders.map( (header) => ({
              id: header.id,
              title: header.title.rendered,
              content: header.content.rendered,
              link: header.link,
              background: header.acf.background_image
            }))
            return <HeaderComponent headers={allHeaders} />
          }
        }
      </Query>
    )
  }
}

const HEADER_PAGES = gql`
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
    }
  }
}

`