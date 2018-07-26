import React from "react";
import styled from "styled-components";
import shortid from "shortid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SelectComponent = props => {
  const {
    options,
    handleChange,
    currentReason,
    onOpen,
    onClose,
    modalOpen
  } = props;
  return (
    <CustomSelect
      displayEmpty
      fullWidth
      onClose={onClose}
      onOpen={onOpen}
      open={modalOpen}
      inputProps={{
        id: "reason",
        name: "reason",
        required: true
      }}
      onChange={handleChange}
      value={currentReason}
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
  );
};

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
