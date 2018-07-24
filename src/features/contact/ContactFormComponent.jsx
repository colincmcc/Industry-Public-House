import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SelectComponent from "../common/selectDropDown/SelectComponent";
import {
  validateField,
  validateForm,
  findParent
} from "../../common/utils/utils";
import theme from "../../common/styled/theme";

// TODO: Move logic and state into a container function

class ContactFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: {
        value: "",
        type: "text"
      },
      lastname: {
        value: "",
        type: "text"
      },
      email: {
        value: "",
        type: "email"
      },
      reason: {
        value: "",
        type: "text"
      },
      formIsValid: false
    };
  }
  componentDidMount() {
    this.addFormListeners();
  }
  addFormListeners = () => {
    var form = document.querySelector("form");
    form.addEventListener("focusin", this.onFormFocusIn);
    form.addEventListener("focusout", this.onFormFocusOut);
  };

  onFormFocusIn = ev => {
    this.setRowFocus();
  };

  // * Validate takes a type and value and returns a boolean
  onFormFocusOut = ev => {
    validateField(ev.target);
    this.setRowFocus();
  };

  // findParent takes a callback to verify the type of parent, in this case it has to have the "form-item" class
  setRowFocus = () => {
    var activeEl = document.activeElement;
    var activeElRow = findParent(activeEl, this.isFormRow);
    var rows = [].slice.call(document.querySelectorAll(".form-item"));

    rows.forEach(function(row) {
      if (row === activeElRow) {
        row.classList.add("has-focus");
      } else {
        row.classList.remove("has-focus");
      }
    });
  };

  isFormRow = el => {
    return el.classList.contains("form-item");
  };

  handleChange = name => ev => {
    const { reason, firstname, lastname, email } = this.state;
    var formIsValid = validateForm([reason, firstname, lastname, email]);

    this.setState({
      [ev.target.name]: {
        value: ev.target.value
      },
      formIsValid: formIsValid
    });
    if (reason.value != "default") {
      this.handleNext;
    }
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSubmit = ev => {
    ev.preventDefault();
    validateForm;
  };

  render() {
    var invalid = false;
    var isDisabled = false;
    const { formIsValid } = this.state;
    const firstName = this.state.firstname.value;
    const lastName = this.state.lastname.value;
    const email = this.state.email.value;
    const reason = this.state.reason.value;
    const { classes } = this.props;

    const contactReasons = [
      {
        label: "Why are you reaching out?",
        disabled: true,
        value: "",
        selected: true
      },
      {
        label: "I have reservation for over 15 people",
        disabled: false,
        value: "reservation",
        selected: false
      },
      {
        label: "I'm representing a charity",
        disabled: false,
        value: "charity",
        selected: false
      },
      {
        label: "I'd like to hold an event at an Industry",
        disabled: false,
        value: "event",
        selected: false
      },
      {
        label: "I'd like to make food selections for my party",
        disabled: false,
        value: "food",
        selected: false
      },
      {
        label: "I have another reason...",
        disabled: false,
        value: "other",
        selected: false
      }
    ];

    return (
      <Form onsSubmit={this.handleSubmit} method="post" noValidate>
        <fieldset style={{ border: "none", margin: 0, paddingBottom: 0 }}>
          {/** FIRST NAME */}
          <FormRow className="text form-item">
            <Label for="firstname">Your First Name</Label>

            <TextField
              fullWidth
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Nikola"
              required
              style={{ flex: "68%" }}
              className={invalid ? "invalid-missing" : ""}
              onChange={this.handleChange("firstname")}
            />
          </FormRow>

          {/** LAST NAME */}
          <FormRow className="text form-item">
            <Label for="lastname"> Your Last Name </Label>
            <TextField
              fullWidth
              id="lastname"
              type="text"
              placeholder="Tesla"
              required
              style={{ flex: "68%" }}
              className={invalid ? "invalid-missing" : ""}
              onChange={this.handleChange("lastname")}
            />
          </FormRow>

          {/** EMAIL */}
          <FormRow className="text form-item">
            <Label for="email"> Your Email </Label>
            <TextField
              fullWidth
              id="email"
              type="email"
              placeholder="nikola.tesla@example.com"
              required
              style={{
                flex: "68%"
              }}
              className={invalid ? "invalid-missing" : ""}
              onChange={this.handleChange("email")}
            />
          </FormRow>

          {/** REASON */}
          <FormRow className="select form-item">
            <Label for="reason">Contact Reason</Label>
            <SelectWrapper>
              <SelectComponent
                handleChange={this.handleChange}
                invalid={invalid}
                options={contactReasons}
                currentReason={reason}
                name="reason"
                type="text"
              />
            </SelectWrapper>
          </FormRow>
        </fieldset>
        <Button
          disabled={!formIsValid}
          onClick={this.handleSubmit}
          variant="contained"
          classes={{ root: classes.homeButton }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default withStyles(theme.materialUI)(ContactFormComponent);

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;
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
    background-color: transparent;

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
`;
const SelectWrapper = styled.div`
  flex: 68%;
  position: relative;
  cursor: pointer;
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
