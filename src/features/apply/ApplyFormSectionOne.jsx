import React from 'react';
import styled from 'styled-components';

// Components
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Form Components
import FormTextField from '../components/forms/FormTextField';
import FormMultiLine from '../components/forms/FormMultiLine';
import FormSelectField from '../components/forms/FormSelectField';
import FormCheckbox from '../components/forms/FormCheckbox';

import Heading from '../components/Heading';
import theme from '../../common/styled/theme';

const ApplyFormSectionOne = (props) => {
  const {
    classes,
    locationOptions,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidating,
    isSubmitting,
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    setTouched,
  } = props;
  const positionOptions = [
    { value: 'Server', label: 'Server' },
    { value: 'Bartender', label: 'Bartender' },
    { value: 'Host', label: 'Host' },
    { value: 'Linecook', label: 'Linecook' },
    { value: 'Dishwasher', label: 'Dishwasher' },
    { value: 'FOH Manager', label: 'FOH Manager' },
    { value: 'Chef', label: 'BOH Manager / Chef' },
  ];
  return (
    <div>
      <FormSection>
        <Heading
          text="What are you applying for?"
          centered
          style={{
            color: '#110C02',
            fontSize: '1.25em',
          }}
        />
        <FormItem>
          <FormCheckbox
            name="positions"
            label="Positions?"
            value={values.positions}
            options={positionOptions}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            setTouched={setTouched}
            errors={errors.positions}
            touched={touched.positions}
          />
        </FormItem>
        <FormItem>
          <FormSelectField
            name="jobLocations"
            isRequired
            label="Which locations are you interested in?"
            options={locationOptions}
            values={values.jobLocations}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            errors={errors.jobLocations}
            touched={touched.jobLocations}
            setTouched={setTouched}
            isMulti="true"
          />
        </FormItem>
        <FormItem>
          <FormMultiLine
            type="text"
            name="about"
            placeHolder="Tell us a bit about yourself..."
            isRequired
            label="About You"
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.about}
            touched={touched.about}
          />
        </FormItem>
      </FormSection>

      <SubmitRow>
        <Button
          variant="contained"
          classes={{ contained: classes.homeButton }}
          onClick={() => handleSubmit()}
        >
          {' '}
Submit
        </Button>
      </SubmitRow>
    </div>
  );
};
export default withStyles(theme.materialUI)(ApplyFormSectionOne);

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
