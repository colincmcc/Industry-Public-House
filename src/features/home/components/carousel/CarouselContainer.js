import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import CarouselComponent from './CarouselComponent'
export default class CarouselContainer extends Component {
  render() {
    console.log('windows orientation' + window.orientation)

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
            return <CarouselComponent headers={allHeaders} />
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