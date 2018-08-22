import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomeComponent from './HomeComponent';


const HOME_PAGE = gql`
  {
    allHeaders {
      id
      title {
        rendered
      }
      content {
        rendered
      }
      link
      acf {
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
`;
const HomeContainer = () => (

  <Query query={HOME_PAGE}>
    {
        ({ loading, error, data }) => <HomeComponent loading={loading} error={error} {...data} />
      }
  </Query>
);

export default HomeContainer;
