import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingComponent from '../components/loading/LoadingComponent';
import ErrorComponent from '../components/loading/ErrorComponent';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import ApplyComponent from './ApplyComponent';
import bgImg from '../../common/assets/img/social.jpg';


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
const ApplyContainer = () => (
  <Query query={WP_CONTACT}>
    {
    ({
      loading, error, data, client,
    }) => {
      if (loading) return <LoadingComponent />;
      if (error) return <ErrorComponent />;
      return (
        <div>
          <PageHeaderContainer heading="Work at Industry" subHeading="" bgImg={bgImg} />
          <ApplyComponent client={client} />
        </div>
      );
    }}
  </Query>
);

export default ApplyContainer;
