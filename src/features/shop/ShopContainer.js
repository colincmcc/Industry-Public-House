import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ShopFrontComponent from './ShopFrontComponent';

const WP_SHOP = gql`
{
  allLocations{
    id
  }
}
`;

const ShopContainer = () => (
  <Query query={WP_SHOP}>
    {({
      data, loading, error, client,
    }) => (
      <ShopFrontComponent />
    )}
  </Query>
);

export default ShopContainer;
