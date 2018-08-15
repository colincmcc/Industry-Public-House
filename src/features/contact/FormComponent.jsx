import React from 'react'
import styled from "styled-components";
import { Formik } from "formik";

import SelectComponent from "../components/forms/SelectComponent";
import { validateOnBlur, setRowFocus } from "../../common/utils/utils";
import FormTextField from "../components/forms/FormTextField";

import FormLabel from "../components/forms/FormLabel";
import FormRow from "../components/forms/FormRow";

const FormComponent = (props) => {
  const {
     values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props

  const _handleSelect = selectChoice => {
    setFieldValue("imaginaryThingId", selectChoice.value);
  };

  const contactReasons = [{ label: "Why are you reaching out?", disabled: true, value: "", selected: true }, { label: "I have reservation for over 15 people", disabled: false, value: "reservation", selected: false }, { label: "I'm representing a charity", disabled: false, value: "charity", selected: false }, { label: "I'd like to hold an event at an Industry", disabled: false, value: "event", selected: false }, { label: "I'd like to make food selections for my party", disabled: false, value: "food", selected: false }, { label: "I have another reason...", disabled: false, value: "other", selected: false }];

  return (
   <Form onsSubmit={handleSubmit} method="post" noValidate>
        <FormRow>
          <FormLabel htmlFor="reason">Contact Reason</FormLabel>
          <SelectWrapper>
            <SelectComponent
              handleChange={handleChange()}
              options={contactReasons}
              currentReason={reason.value}
              name="reason"
              type="text"
              onOpen={handleOpen}
              onClose={handleClose}
              modalOpen={modalOpen}
            />
          </SelectWrapper>
        </FormRow>

        <FormTextField
          type="text"
          id="firstname"
          placeHolder="Nikola"
          isRequired={true}
          handleChange={handleChange()}
          label="Your First Name"
        />

        <FormTextField
          type="text"
          id="lastname"
          placeHolder="Tesla"
          isRequired={true}
          handleChange={handleChange()}
          label="Your Last Name"
        />

        <FormTextField
          type="email"
          id="email"
          placeHolder="nikola.tesla@example.com"
          isRequired={true}
          handleChange={handleChange()}
          label="Your Email"
        />
      </Form>
    );
}

export default FormComponent;

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;
const SelectWrapper = styled.div`
  flex: 68%;
  position: relative;
  cursor: pointer;
`;