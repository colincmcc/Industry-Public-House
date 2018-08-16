import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
// eslint-disable-next-line
import * as Yup from 'yup'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

//Contact Forms
import ContactFormInitial from './ContactFormInitial';
import ContactFormReservation from './ContactFormReservation';
import ContactFormCharity from './ContactFormCharity';
import ContactFormEvent from './ContactFormEvent';
import ContactFormFood from './ContactFormFood';


// Form Utilities
import { validateOnBlur, setRowFocus } from '../../common/utils/utils';

const SEND_FORM = gql`
 mutation mailFormData($to: [String!], $from: String!, $subject: String!, $html: String!) {
  mailFormData(to: $to, from: $from, subject: $subject, formData: $html) {
  	status
  }
}
`

const initialSchema = Yup.object().shape({
    reason: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          }),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string()
        .email('Invalid email address')
        .required('We need an email to contact you.')
  })

   const resoSchema = Yup.object().shape({
      resoName: Yup.string().required(),
      resoPartySize: Yup.string().required(),
      resoDate: Yup.string(),
      resoTabPay: Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required()
        }),
      resoLocation: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required()
      }),
     resoType: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required()
      }),
      resoDescription: Yup.string().required()
  })

   const charitySchema = Yup.object().shape({
     charityOrg: Yup.string().required(),
     charityGiftType: Yup.string().required()
  })

   const foodSchema = Yup.object().shape({
    reason: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          }),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string()
        .email('Invalid email address')
        .required('We need an email to contact you.')
  })
   const eventSchema = Yup.object().shape({
    reason: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required()
          }),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string()
        .email('Invalid email address')
        .required('We need an email to contact you.')
  })

// Migrated to Formik & Yup
const FormComponent = ({handleSubmit, currentForm}) => {

  // Validation Schemas
  // TODO: find way to create conditional schema's with Yup



  return (
    <Formik
      initialValues={{
      }}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      component={currentForm.component}
      validationSchema={currentForm.schema}
    />
  );
};
// END FORMIK


class ContactComponent extends Component {
  state={
    form: "initial",
    formData: {}
  }
  componentDidMount() {
    this.addFormListeners();
  }

  componentWillUnmount() {
    this.removeFormListeners();
  }

  onFormFocusIn = () => {
    setRowFocus();
  };

  onFormFocusOut = (ev) => {
    setRowFocus();
  };


 handleSubmit = (values, actions) => {
  const { form, formData } = this.state
  const { client, locations } = this.props
  const {value: reason} = values.reason

  // TODO update email to production
   if(form === "initial"){
     this.setState({
       form: reason,
       formData: {...values}
     })
   } else {
     const locEmails = locations.map(l => l.acf.email)
     console.log(locEmails)
     const payload = JSON.stringify({...formData, ...values}, null, 2)
     this.setState({
       formData: payload
     })
     client.mutate({
       mutation: SEND_FORM,
       variables: {
         to: ['colincmcc@gmail.com'],
         from: 'colin@iph.colinmac.me',
         subject: reason,
         html: payload
       }
     })
   }
    setTimeout(() => {
      alert(JSON.stringify(this.state, null, 2));
      actions.setSubmitting(false);
    }, 1000);
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
    const { form } = this.state

    const currentForm = form => ( {
      initial: {
        component: ContactFormInitial,
        schema: initialSchema
      },
      charity: {
        component: ContactFormCharity,
        schema: charitySchema
      },
      reservation: {
        component: ContactFormReservation,
        schema: resoSchema
      },
      food: {
        component: ContactFormFood,
        schema: foodSchema
      },
      event:{
        component: ContactFormEvent,
        schema: eventSchema
      }
    })[form]

    return (
      <ContactWrapper>
        <FormContainer>
          <FormComponent
          currentForm={currentForm(form)} handleSubmit={this.handleSubmit}/>
        </FormContainer>
      </ContactWrapper>
    );
  }
}

export default ContactComponent;

const ContactWrapper = styled.div`
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
