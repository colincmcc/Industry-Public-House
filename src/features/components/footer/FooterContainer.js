import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import FooterComponent from './FooterComponent';

const WP_FOOTER = gql`
  {
    allLocations {
      id
      title {
        rendered
      }
      acf {
        facebook
        trip_advisor
        twitter
        loc_symbol
        loc_num
        address {
          address
        }
        open_hours
        happy_hour
        phone_number
        email
      }
    }
  }
`;
const FooterContainer = () => (
  <Query query={WP_FOOTER}>
    {({ loading, error, data }) => <FooterComponent loading={loading} error={error} data={data} />}

  </Query>
);

export default FooterContainer;
