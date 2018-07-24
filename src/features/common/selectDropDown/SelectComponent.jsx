import React, { Component } from "react";
import styled from "styled-components";
import shortid from "shortid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Input } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

import menuDown from "../../../common/assets/icons/menu-down.svg";

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      reason: "default",
      highlightedIndex: 0
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  render() {
    const { options, invalid, handleChange, name, currentReason } = this.props;
    const { reason } = this.state;
    return (
      <FormControl required>
        <CustomSelect
          displayEmpty
          fullWidth
          onChange={handleChange("reason")}
          value={currentReason}
          className={invalid ? "invalid-missing" : ""}
        >
          {options.map(option => (
            <MenuItem
              style={{ fontFamily: "Source Sans Pro" }}
              key={shortid.generate()}
              disabled={option.disabled}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    );
  }
}

export default SelectComponent;
const CustomSelect = styled(Select)`
  padding-right: 50px;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 5px 20px 0 0;
  overflow: visible !important;

  ${props => props.theme.components.text};
  font-family: "Source Sans Pro" !important;
  ${props => props.theme.media.tablet_portrait_up`
    background-color: ${props => props.theme.colors.whiteTheme};
  `};
`;

const SelectDropDown = styled.div`
  position: absolute;
  top: 40px;
  left: -12px;
  z-index: 100;
  background: #fff;
  box-shadow: 0 7px 14px ${props => props.theme.colors.whiteTheme + "10"},
    0 3px 6px rgba(0, 0, 0, 0.08);
  width: calc(100% + 12px);
  padding: 5px;
  padding-bottom: 0;
  border-radius: 4px;

  opacity: 0;
  transition: opacity 0.08s ease-out, transform 0.08s ease-out;
  transition-delay: 0.1s;
  transition-duration: 0.12s;
  transform-origin: 100% -50px;
  pointer-events: none;

  transform: skew(2deg) rotateX(10deg);

  &.dropdown-open {
    opacity: 1;
    pointer-events: all;
    transform: none;
  }
`;

const SelectOptions = styled.ul`
  max-height: 195px;
  overflow-y: auto;
  position: relative;
  padding: 0;
  margin: 0 -5px;
`;
const Option = styled.li`
  display: list-item;
  ${props => props.theme.components.text};
  background: transparent;
  border-bottom: 1px solid ${props => props.theme.colors.yellowGray};
  cursor: pointer;
  font-weight: 400;
  color: ${props => props.theme.colors.blackTheme};
  padding: 8px 0;
  padding-left: 12px;
`;
