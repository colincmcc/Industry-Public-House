import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormRow from './FormRow';
import AlertSVG from '../../../common/assets/icons/alert-circle-outline.svg';

const FormTextField = (props) => {
  const {
    values, name, placeHolder, isRequired, handleBlur, handleChange, label, type, errors, touched,
  } = props;
  return (
    <FormRow>
      <FormLabel isFor={name}>{label}</FormLabel>
      <TextField
        fullWidth
        name={name}
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        style={{ flex: '68%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
      />
      {touched && errors ? <Alert /> : null}
    </FormRow>
  );
};

export default FormTextField;

const Alert = styled(AlertSVG)`
fill: red;
position: absolute;
right: 10px;
`;
