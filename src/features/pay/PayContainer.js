import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import PayComponent from './PayComponent';
import bgImg from '../../common/assets/img/header_bg_clean.jpg';

const ADD_CHARGE = gql`
  mutation createCbCharge (
    $name: String!,
    $description: String!,
    $amount: String!,
    $pricingType: String!,
    $custId: String!,
    $custName: String!) {
      createCbCharge(
        name: $name,
        description: $description,
        amount: $amount,
        pricingType: $pricingType,
        custId: $custId,
        custName: $custName) {
      id
      resource
      code
      name
      description
      confirmed_at
      timeline
      created_at
      addresses {
        bitcoin
        ethereum
      }
    }
  }
`;
const PayContainer = () => (
  <Mutation mutation={ADD_CHARGE}>
    {(createCbCharge, { data, client }) => (
      <div>
        <PageHeaderContainer heading="Pay" bgImg={bgImg} />
        <PayComponent
          createCharge={createCbCharge}
          client={client}
          data={data}
        />
      </div>
    )}
  </Mutation>
);

export default PayContainer;
