import React from "react";

import TextField from "@material-ui/core/TextField";
import { FormRow, FormLabel } from "../components";
import alertIcon from "../../../common/assets/icons/alert-circle-outline.svg";

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
    <FormRow>
      <FormLabel isFor={id}>{label}</FormLabel>
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

export default FormTextField;
