import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import { validateOnBlur, setRowFocus } from '../../common/utils/utils';
import FormTextField from '../components/forms/FormTextField';
import FormSelectField from '../components/forms/FormSelectField';
import LoadingComponent from '../components/loading/LoadingComponent'
import theme from '../../common/styled/theme';



const ContactFormInitial = (props) => {
  const {
    classes,
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
    setTouched
  } = props;

  const tabOptions = [
  {value: 'together', label: '1-2 Tabs'},
  {value: 'individual', label: 'Individual Tabs'},
  ]

    const locationOptions = [
  {value: 'LV', label: 'Lawrenceville'},
  {value: 'NF', label: 'North Fayette'},
  ]

    const typeOptions = [
  {value: 'sitdown', label: 'Sitdown with server'},
  {value: 'bar', label: 'Happy Hour/Bar'},
  {value: 'both', label: 'Bar & Sitdown meal'}
  ]
const SubmitButton = !isValidating || !isSubmitting ?    <Button
          disabled={!dirty || isSubmitting}
          type="submit"
          variant="contained"
          classes={{ contained: classes.homeButton }}
        >
        Submit
        </Button> :
        <LoadingComponent />
  return (
    <Form onSubmit={handleSubmit}>

      <FormTextField
        type="text"
        name="resoName"
        placeHolder="Tesla's Bday"
        isRequired
        label="Your Groups Name"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.resoName}
        touched={touched.resoName}
      />

      <FormTextField
        type="text"
        name="resoPartySize"
        placeHolder="15+ people"
        isRequired
        label="How large is your group?"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.resoPartySize}
        touched={touched.resoPartySize}
      />
      <FormSelectField
        name="resoTabPay"
        isRequired
        label="How will the check be split?"
        options={tabOptions}
        value={values.resoTabPay}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        errors={errors.resoTabPay}
        touched={touched.resoTabPay}
        setTouched={setTouched}
        />
         <FormSelectField
        name="resoLocation"
        isRequired
        label="Which location are you looking at?"
        options={locationOptions}
        value={values.resoLocation}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        errors={errors.resoLocation}
        touched={touched.resoLocation}
        setTouched={setTouched}
        isMulti="true"
        />
        <FormSelectField
        name="resoType"
        isRequired
        label="What type of event is it?"
        options={typeOptions}
        value={values.resoType}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        errors={errors.resoType}
        touched={touched.resoType}
        setTouched={setTouched}
        />
      <FormTextField
        type="text"
        name="resoDescription"
        placeHolder="It's a business meeting / birthday / retirement / etc."
        isRequired
        label="Tell us about your event"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.resoDescription}
        touched={touched.resoDescription}
      />
      <SubmitRow>
      {SubmitButton}
      </SubmitRow>
    </Form>
  );
};


export default withStyles(theme.materialUI)(ContactFormInitial);

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
