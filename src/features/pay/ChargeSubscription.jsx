import React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import Heading from '../components/Heading';


// !!! Update ChargeById prop to String
// !!! Update eventId to props
// !!! settings are in development
const CHARGE_UPDATE_SUBSCRIPTION = gql`
  subscription ChargeById($id: String!) {
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
  const eventId = props;
  return (
    <Subscription
      subscription={CHARGE_UPDATE_SUBSCRIPTION}
      variables={{ id: eventId }}
    >
      {({ data, loading }) => {
        // Change message based on Coinbase Webhooks
        const getTitle = paymentStatus => ({
          initial: 'Enter Payment Info',
          'charge:created': 'Ready for Payment',
          'charge:confirmed': 'Payment Processed',
          'charge:failed': 'Payment Failed',
        }[paymentStatus]);


        const currentStatus = !loading ? data.chargeUpdatedById.event.type : 'initial';
        return <Heading centered="true" text={getTitle(currentStatus)} />;
      }}

    </Subscription>
  );
};

export default ChargeSubscription;
