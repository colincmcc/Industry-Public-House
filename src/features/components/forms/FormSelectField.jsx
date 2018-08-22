import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import FormLabel from './FormLabel';
import FormRow from './FormRow';
import AlertSVG from '../../../common/assets/icons/alert-circle-outline.svg';

class FormSelectField extends Component {
  handleChange = (ev) => {
    const { onChange, name } = this.props;

    onChange(name, ev);
  }

  handleBlur = () => {
    const { onBlur, setTouched, name } = this.props;
    onBlur(name, true);
    setTouched(name, true);
  }

  render() {
    const {
      value, name, isRequired, label, options, errors, touched, isMulti,
    } = this.props;

    return (
      <FormRow>
        <FormLabel isFor={name}>{label}</FormLabel>
        <SelectBox
          type="select"
          id={name}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          options={options}
          required={isRequired}
          isMulti={isMulti}
        />
        {touched && errors ? <Alert /> : null}
      </FormRow>
    );
  }
}

export default FormSelectField;

const Alert = styled(AlertSVG)`
fill: red;
position: absolute;
right: 50px;
`;
const SelectBox = styled(Select)`
 flex: 1 1 68%;
`;
