import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormTextField from '../components/forms/FormTextField';
import FormSelectField from '../components/forms/FormSelectField';
import LoadingComponent from '../components/loading/LoadingComponent';
import theme from '../../common/styled/theme';

const PayFormComponent = (props) => {
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
    setTouched,
  } = props;

  const paymentReasons = [
    { label: 'Dining', value: 'dining' },
    { label: 'Deposit', value: 'deposit' },
  ];

  const SubmitButton = !isValidating || !isSubmitting ? (
    <Button
      disabled={!dirty || isSubmitting}
      type="submit"
      variant="contained"
      classes={{ contained: classes.homeButton }}
    >
      Next
    </Button>
  )
    : <LoadingComponent />;
  return (
    <Form onSubmit={handleSubmit}>
      <FormSelectField
        name="chargeReason"
        isRequired
        label="What is the reason for the transaction?"
        options={paymentReasons}
        value={values.chargeReason}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        errors={errors.chargeReason}
        touched={touched.chargeReason}
        setTouched={setTouched}
      />
      <FormTextField
        type="text"
        name="checkId"
        placeHolder="6 digit Check number"
        isRequired
        label="Check ID"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.checkId}
        touched={touched.checkId}
      />
      <FormTextField
        type="text"
        name="paymentAmount"
        placeHolder=""
        isRequired
        label="Amount"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.paymentAmount}
        touched={touched.paymentAmount}
      />
      <FormTextField
        type="text"
        name="custId"
        placeHolder=""
        isRequired
        label="Customer ID Number"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.custId}
        touched={touched.custId}
      />
      <FormTextField
        type="text"
        name="custName"
        placeHolder="Nikola Tesla"
        isRequired
        label="Customer Name"
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.custName}
        touched={touched.custName}
      />
      <SubmitRow>{SubmitButton}</SubmitRow>
    </Form>
  );
};

export default withStyles(theme.materialUI)(PayFormComponent);


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
