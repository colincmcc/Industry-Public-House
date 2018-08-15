import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import AboutComponent from './AboutComponent';
import LoadingComponent from '../../components/loading/LoadingComponent'
export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={ABOUT_PAGE}>
        {
          ({ loading, error, data }) => {
            if(loading) return <LoadingComponent />
            if(error) return <p>Error</p>
            const aboutData = {
              title: data.pageBy[0].title.rendered,
              content: data.pageBy[0].content.rendered,
              bgImg: data.pageBy[0].acf.background_image,
              heroImg: data.pageBy[0].acf.hero_image
            }
            return (
            <AboutComponent {...aboutData} />
          )


          }
        }
      </Query>
    )
  }
}

const ABOUT_PAGE = gql`
{
  pageBy(slug: "about"){
    title{
      rendered
    }
    content{
      rendered
    }
    acf{
      background_image
      hero_image
    }
  }
}
`