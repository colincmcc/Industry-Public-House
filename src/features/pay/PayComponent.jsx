import React, { Component } from 'react';
import styled from 'styled-components';
import PayFormComponent from './PayFormComponent';
import FormikWrapperComponent from '../components/forms/FormikWrapperComponent';
import PayCodes from './PayCodes';

class PayComponent extends Component {
  state = {
    submitted: false,
    chargeResponse: {},
  }

  handleSubmit = async (values, actions) => {
    const { client, data, createCharge } = this.props;
    const chargePayload = {
      name: values.checkId,
      description: values.chargeReason.value,
      amount: values.paymentAmount,
      pricingType: 'fixed_price', // TODO: update pricing options
      custId: values.custId,
      custName: values.custName,
    };
    createCharge({ variables: chargePayload }).then(response => this.setState({
      chargeResponse: response.data.createCbCharge,
      submitted: true,
    })).then(() => actions.setSubmitting(false));

    /*
      setTimeout(() => {
        alert(JSON.stringify(this.state, null, 2));
        actions.setSubmitting(false);
      }, 1000);
      */
  };

  render() {
    const currentForm = { component: PayFormComponent, schema: null };
    const { submitted, chargeResponse } = this.state;
    return (
      <PayWrapper>
        <FormContainer>
          {!submitted
            ? (
              <FormikWrapperComponent
                currentForm={currentForm}
                handleSubmit={this.handleSubmit}
              />
            ) : <PayCodes addresses={chargeResponse.addresses} />
          }

        </FormContainer>
      </PayWrapper>
    );
  }
}
export default PayComponent;
const PayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1160px;
  padding: 20px;
  overflow: hidden;
  margin: auto;
  min-height: 100vh;
`;

const FormContainer = styled.section`
  border-radius: 4px;
  max-width: 645px;
  width: 100%;
  background: ${props => props.theme.colors.whiteTheme};
  margin: auto;
  box-shadow: 0 50px 100px ${props => `${props.theme.colors.darkTheme}1A`},
    0 15px 35px ${props => `${props.theme.colors.darkTheme}26`},
    0 5px 15px rgba(0, 0, 0, 0.1);

  ${props => props.theme.media.tablet_landscape_up`
    margin: 0
  `};
`;
