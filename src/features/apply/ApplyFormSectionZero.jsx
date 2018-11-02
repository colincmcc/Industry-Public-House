import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import FormTextField from '../components/forms/FormTextField';
import FormSelectField from '../components/forms/FormSelectField';
import Heading from '../components/Heading';

import theme from '../../common/styled/theme';

const ApplyFormSectionZero = (props) => {
  const {
    states,
    classes,
    handleChange,
    handleBlur,
    handleNext,
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    setTouched,
  } = props;

  return (
    <div>
      <FormSection>
        <Heading
          text="How can we reach you?"
          style={{
            color: '#110C02',
            fontSize: '1.25em',
          }}
        />
        <FormRow>
          <FormItem>
            <FormTextField
              type="text"
              name="firstname"
              placeHolder="Nikola"
              isRequired
              label="First Name"
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.firstname}
              touched={touched.firstname}
            />
          </FormItem>
          <FormItem>
            <FormTextField
              type="text"
              name="lastname"
              placeHolder="Tesla"
              isRequired
              label="Last Name"
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.lastname}
              touched={touched.lastname}
            />
          </FormItem>

        </FormRow>
        <FormItem>
          <FormTextField
            type="email"
            name="email"
            placeHolder="nicola.tesla@email.com"
            isRequired
            label="Email"
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.email}
            touched={touched.email}
          />
        </FormItem>
        <FormItem>
          <FormTextField
            type="text"
            name="phoneNumber"
            placeHolder="555-555-5555"
            isRequired
            label="Phone Number"
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.phoneNumber}
            touched={touched.phoneNumber}
          />
        </FormItem>

      </FormSection>
      <FormSection>
        <Divider style={{ marginBottom: '2rem' }} />

        <Heading
          text="Where are you coming from?"
          centered
          style={{
            color: '#110C02',
            fontSize: '1.25em',
          }}
        />
        <FormRow>
          <FormItem>
            <FormTextField
              type="text"
              name="address"
              placeHolder="123 Main St."
              isRequired
              label="Street Address"
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.address}
              touched={touched.address}
            />
          </FormItem>

          <FormItem>
            <FormSelectField
              name="state"
              isRequired
              label="State"
              options={states}
              value={values.state}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              errors={errors.state}
              touched={touched.state}
              setTouched={setTouched}
            />
          </FormItem>

          <FormItem>
            <FormTextField
              type="text"
              name="zipCode"
              placeHolder="11111"
              isRequired
              label="Zipcode"
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.zipCode}
              touched={touched.zipCode}
            />
          </FormItem>
        </FormRow>
        <SubmitRow>
          <Button
            variant="contained"
            classes={{ contained: classes.homeButton }}
            onClick={() => handleNext()}
          >
            {' '}
Next
          </Button>
        </SubmitRow>
      </FormSection>
    </div>
  );
};

export default withStyles(theme.materialUI)(ApplyFormSectionZero);

const FormSection = styled.div`
padding-top: 2rem;

`;


const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.tablet_portrait_up`
  flex-direction: row;
    `};
`;
const FormItem = styled.div`
  padding: 1rem;
`;

const SubmitRow = styled.div`
  padding: 12px 10px 13px 0
    ${props => props.theme.media.tablet_portrait_up`
    padding: 12px 0 0;
    `};
`;
