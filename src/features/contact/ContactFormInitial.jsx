import React from 'react';
import styled from 'styled-components';

import FormTextField from '../components/forms/FormTextField';
import FormSelectField from '../components/forms/FormSelectField';
import SubmitButton from '../components/buttons/SubmitButton';


const ContactFormInitial = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    dirty,
    setFieldValue,
    setFieldTouched,
    isValidating,
    isSubmitting,
    errors,
    touched,
    setTouched,
  } = props;

  const contactReasons = [
    {
      label: 'I have reservation for over 15 people',
      value: 'reservation',
    },
  ];
  /**
const contactReasons = [
{
    label: 'I have reservation for over 15 people',
    value: 'reservation',
  },
  {
    label: "I'm representing a charity",
    value: 'charity',
  },
  {
    label: "I'd like to hold an event at an Industry",
    value: 'event',
  },
  {
    label: "I'd like to make food selections for my party",
    value: 'food',
  },
  {
    label: 'I have another reason...',
    value: 'other',
  },
];

     */
  return (
    <Form onSubmit={handleSubmit}>
      <FormSelectField
        name="reason"
        isRequired
        label="Why are you reaching out?"
        options={contactReasons}
        value={values.reason}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        errors={errors.reason}
        touched={touched.reason}
        setTouched={setTouched}
      />

      <FormTextField
        type="text"
        name="firstname"
        placeHolder="Nikola"
        isRequired
        label="Your First Name"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.firstname}
        touched={touched.firstname}
      />

      <FormTextField
        type="text"
        name="lastname"
        placeHolder="Tesla"
        isRequired
        label="Your Last Name"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.lastname}
        touched={touched.lastname}
      />

      <FormTextField
        type="email"
        name="email"
        placeHolder="nikola.tesla@example.com"
        isRequired
        label="Your Email"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.email}
        touched={touched.email}
      />
      <SubmitRow>
        <SubmitButton
          buttonText="Next"
          isValidating={isValidating}
          isSubmitting={isSubmitting}
          dirty={dirty}
        />
      </SubmitRow>
    </Form>
  );
};


export default ContactFormInitial;

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;

const SubmitRow = styled.div`
  padding: 12px 10px 13px 0
    ${props => props.theme.media.tablet_portrait_up`
    padding: 12px 0 0;
    `};
`;
