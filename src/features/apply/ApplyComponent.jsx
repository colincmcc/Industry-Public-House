import React, { Component } from 'react';
import styled from 'styled-components';

import * as Yup from 'yup';
import gql from 'graphql-tag';
import FormikWrapperComponent from '../components/forms/FormikWrapperComponent';
import ApplyForm from './ApplyForm';
import PageWrapper from '../components/page/PageWrapper';

// Form Utilities
import { setRowFocus } from '../../common/utils/utils';

const SEND_FORM = gql`
 mutation mailFormData($to: [String!], $from: String!, $subject: String!, $html: String!) {
  mailFormData(to: $to, from: $from, subject: $subject, formData: $html) {
  	status
  }
}
`;

const applySchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string()
    .email('Invalid email address')
    .required('We need an email to contact you.'),
});


class ApplyComponent extends Component {
  state = {
    formData: {},
  };

  componentDidMount() {
    this.addFormListeners();
  }

  componentWillUnmount() {
    this.removeFormListeners();
  }

  handleSubmit = (values, actions) => {
    const { formData } = this.state;
    const { client } = this.props;

    // TODO update email to production
    const payload = JSON.stringify({ ...formData, ...values }, null, 2);
    this.setState({
      formData: payload,
    });
    console.log('payload', payload);
    client.mutate({
      mutation: SEND_FORM,
      variables: {
        to: ['colincmcc@gmail.com'],
        from: 'colin@iph.colinmac.me',
        subject: 'Application for Job',
        html: payload,
      },
    });

    actions.setSubmitting(false);


    setTimeout(() => {
      alert(JSON.stringify(this.state, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  onFormFocusIn = () => {
    setRowFocus();
  };

  onFormFocusOut = (ev) => {
    setRowFocus();
  };

  removeFormListeners = () => {
    const form = document.querySelector('form');
    form.removeEventListener('focusin', this.onFormFocusIn);
    form.removeEventListener('focusout', this.onFormFocusOut);
  };

  addFormListeners = () => {
    const form = document.querySelector('form');
    form.addEventListener('focusin', this.onFormFocusIn);
    form.addEventListener('focusout', this.onFormFocusOut);
  };

  render() {
    const currentForm = {
      component: ApplyForm,
      schema: applySchema,
    };


    return (
      <PageWrapper>
        <FormContainer>
          <FormikWrapperComponent
            currentForm={currentForm}
            handleSubmit={this.handleSubmit}
          />
        </FormContainer>
      </PageWrapper>
    );
  }
}

export default ApplyComponent;

const FormContainer = styled.section`
  border-radius: 4px;
  max-width: 645px;
  width: 100%;
  background: ${props => props.theme.colors.whiteTheme};
  margin: auto;
  box-shadow: 0 50px 100px ${props => `${props.theme.colors.darkTheme}1A`},
    0 15px 35px ${props => `${props.theme.colors.darkTheme}26`},
    0 5px 15px rgba(0, 0, 0, 0.1);
`;
