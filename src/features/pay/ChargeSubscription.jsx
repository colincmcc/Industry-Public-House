import React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import Heading from '../components/Heading';


// !!! Update ChargeById type to String
// !!! Update eventId to props
const CHARGE_UPDATE_SUBSCRIPTION = gql`
  subscription ChargeById($id: Int!) {
    chargeUpdatedById(id: $id) {
      id
      event {
        type
        data {
          id
          name
          payments
        }
      }
    }
  }
`;


const ChargeSubscription = (props) => {
  const eventId = 1;
  return (
    <Subscription
      subscription={CHARGE_UPDATE_SUBSCRIPTION}
      variables={{ id: 1 }}
    >
      {({ data, loading, error }) => {
        console.log(data);
        return (
          <Heading
            centered="true"
            text="Enter Payment Info"
          />
        );
      }}

    </Subscription>
  );
};

export default ChargeSubscription;
