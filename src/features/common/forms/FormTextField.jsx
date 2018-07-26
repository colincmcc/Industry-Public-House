import React from "react";

import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";
import alertIcon from "../../../common/assets/icons/alert-circle-outline.svg";
import theme from "../../../common/styled/theme";

const FormTextField = props => {
  const {
    id,
    name,
    placeHolder,
    isRequired,
    handleChange,
    label,
    type
  } = props;

  return (
    <FormRow className="text form-item">
      <Label htmlFor={id}>{label}</Label>
      <TextField
        fullWidth
        id={id}
        name={id}
        type={type}
        placeholder={placeHolder}
        required={isRequired}
        style={{ flex: "68%" }}
        onChange={handleChange}
      />
    </FormRow>
  );
};

export default withStyles(theme.materialUI)(FormTextField);

const FormRow = styled.div`
  padding: 8px 13px 2px 17px;
  transition: opacity 0.2s ease-in, height 0.2s ease-out;

  ${props => props.theme.media.tablet_portrait_up`
    display: flex;
    border-bottom: none;
    padding: 4px 0;
    max-width: 600px;
  `};
  &.has-focus {
    box-shadow: none;
    background-color: ${props => props.theme.colors.whiteTheme};
    color: ${props => props.theme.colors.yellowGray + "!important"};
    ${props => props.theme.media.tablet_portrait_up`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.whiteTheme};
    `};
    > label {
      color: ${props => props.theme.colors.darkTheme};
    }
    > select {
      box-shadow: none;
      background-color: transparent;
      ${props => props.theme.media.tablet_portrait_up`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.whiteTheme};
    `};
    }
  }
  > input {
    &.invalid-missing {
      background: url(${alertIcon});
      background-position-x: -16px;
      background-position-y: 9px;
      box-shadow: 0 0 0 1px #fff;
      background-color: transparent;
    }
  }
`;

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  transition: color 0.1s ease-out;

  ${props => props.theme.components.small};
  color: ${props => props.theme.colors.blackTheme};
  font-weight: 600;
  letter-spacing: 0.43px;
  ${props => props.theme.media.tablet_portrait_up`
    ${props => props.theme.components.text};
    color: ${props => props.theme.colors.blackTheme};
    font-weight: 500;
    flex: 32%;
    text-transform: none;
    align-self: center;
    margin-right: 20px;
    text-align: left;
  `};
  &.with-summary {
    align-self: flex-start;
    padding-top: 7px;
  }
`;
