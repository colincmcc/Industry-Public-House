import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import FormLabel from './FormLabel';
import FormRow from './FormRow';
import AlertSVG from '../../../common/assets/icons/alert-circle-outline.svg';

const FormMultiLine = (props) => {
  const {
    values, name, placeHolder, isRequired, handleBlur, handleChange, label, type, errors, touched,
  } = props;
  return (
    <FormRow>
      <FormLabel isFor={name}>{label}</FormLabel>
      <TextField
        fullWidth
        multiline
        rows="4"
        name={name}
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        style={{ flex: '68%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        variant="outlined"
      />
      {touched && errors ? <Alert /> : null}
    </FormRow>
  );
};

export default FormMultiLine;

const Alert = styled(AlertSVG)`
fill: red;
position: absolute;
right: 10px;
`;
