import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ContactComponent from './ContactComponent';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import LoadingComponent from '../components/loading/LoadingComponent';
import ErrorComponent from '../components/loading/ErrorComponent';
import bgImg from '../../common/assets/img/header_bg_clean.jpg';

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
    allLocations{
    id
    title{
      rendered
    }
    acf{
      email
    }
  }
}
`;

const ContactContainer = () => (
  <Query query={WP_CONTACT}>
    {
      ({
        loading, error, data, client,
      }) => {
        if (loading) return <LoadingComponent />;
        if (error) return <ErrorComponent />;


        return (
          <div>
            <PageHeaderContainer heading="Connect" subHeading="" bgImg={bgImg} />
            <ContactComponent locations={data.allLocations} client={client} />
          </div>
        );
      }
    }

  </Query>
);

export default ContactContainer;
