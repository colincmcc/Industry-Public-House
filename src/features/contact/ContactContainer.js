import React from 'react'

import { Query } from 'react-apollo'
import gql from "graphql-tag";

import ContactComponent from './ContactComponent'
import PageHeaderContainer from '../common/page/PageHeaderContainer'
import bgImg from '../../common/assets/img/header_bg_clean.jpg'

const WP_CONTACT = gql`
{
  pageBy(slug: "contact"){
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

const ContactContainer = () => {
  return (
    <Query query={WP_CONTACT}>
    {
      ({loading, error, data, client}) => {
        if(loading) return <div> Loading ... </div>
        if(error) return <div> Error ... </div>

        const contactPageData = {
          title: data.pageBy[0].title.rendered,
          content: data.pageBy[0].content.rendered,
          bgImg: data.pageBy[0].acf.background_image
        }
        return(
          <div>
            <PageHeaderContainer heading="Connect" subHeading="" bgImg={bgImg} />
            <ContactComponent />
          </div>
        )
      }
    }

    </Query>
  )
}

export default ContactContainer

