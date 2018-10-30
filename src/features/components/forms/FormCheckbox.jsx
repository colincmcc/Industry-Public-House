import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { FieldArray } from 'formik'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from './FormLabel';
import FormRow from './FormRow';
import AlertSVG from '../../../common/assets/icons/alert-circle-outline.svg';

class FormCheckbox extends Component {


   handleChange = arrayHelpers => (ev) => {
    const { onChange, value, name} = this.props
    const target = ev.target;

    if (target.checked) {
      arrayHelpers.push(target.value);
    } else {
      const idx = value[name].indexOf(target.value);
      arrayHelpers.remove(idx);
    }

    this.props.onChange(this.props.id, valueArray);
     this.setState({
       [selectedValue]: ev.target.checked,
     });

     console.log(value);
     console.log(ev.target);
     console.log(ev.target.checked);
     console.log(selectedValue);
     console.log(this.state);
   }

  handleBlur = () => {
    const { onBlur, setTouched, name } = this.props;
    onBlur(name, true);
    setTouched(name, true);
  }

  render() {
    const {
      value, name, label, options, errors, touched,
    } = this.props;
    console.log(value);
    return (
      <FormRow>
        <FormControl component="fieldset">
          <FieldArray
            name={name}
            render={arrayHelpers => (
              <FormLabel isFor={name}>{label}</FormLabel>
                {options.map(option => (
                      <Checkbox
                      key={shortid.generate()}
                      checked={value[name].includes(option.value)}
                      onChange={this.handleChange(arrayHelpers)}
                      value={option.value}
                      name={name}
                      />
                ))}
            )}
          />
        </FormControl>
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
