import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { FieldArray } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from './FormLabel';
import FormRow from './FormRow';
import AlertSVG from '../../../common/assets/icons/alert-circle-outline.svg';

class FormCheckbox extends Component {
   handleChange = async (ev, arrayHelpers) => {
     const { values } = this.props;
     const { target } = ev;

     if (target.checked) arrayHelpers.push(target.value);
     else {
       const idx = values.indexOf(target.value);
       arrayHelpers.remove(idx);
     }
   }

  handleBlur = () => {
    const { onBlur, setTouched, name } = this.props;
    onBlur(name, true);
    setTouched(name, true);
  }

  render() {
    const {
      values, name, label, options, errors, touched,
    } = this.props;

    return (
      <FormRow>
        <FieldArray
          name={name}
          render={arrayHelpers => (
            <div>
              <FormLabel isFor={name}>{label}</FormLabel>
              {options.map(option => (
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={values ? values.includes(option.value) : false}
                      onChange={ev => this.handleChange(ev, arrayHelpers)}
                      value={option.value}
                      name={name}
                      onBlur={this.handleBlur}
                    />
              )}
                  label={option.label}
                  key={shortid.generate()}
                />

              ))}
            </div>
          )}
        />
        {touched && errors ? <Alert /> : null}
      </FormRow>
    );
  }
}

export default FormCheckbox;
const Alert = styled(AlertSVG)`
fill: red;
position: absolute;
right: 10px;
`;
