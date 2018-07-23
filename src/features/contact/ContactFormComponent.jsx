import React, { Component } from "react";
import styled from "styled-components";
import shortid from "shortid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import SelectComponent from "../common/selectDropDown/SelectComponent";
class ContactFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      reason: "",
      numberOfGuests: 0,
      day: "",
      time: "",
      needBar: false,
      private: false,
      activeStep: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  onFormFocusOut = ev => {
    this.setRowFocus();
  };
  setRowFocus = () => {
    var activeEl = document.activeElement;
    var activeElRow = this.findParent(activeEl, this.isFormRow);
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

  findParent = (el, matchParentCB) => {
    var parent = el.parentElement;
    if (document.body === el || el.parentElement === null) return null;

    if (matchParentCB(el)) return el;

    return this.findParent(el.parentElement, matchParentCB);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };
  render() {
    var invalid = false;

    const contactReasons = [
      {
        label: "Why are you reaching out?",
        disabled: true,
        value: "default",
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
        label: "I'd like to make food selections",
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
    const
    return (
      <Form onsSubmit={this.handleSubmit} method="post" noValidate>
        <FormControl style={{ width: "100%" }}>
          <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
            {/** FIRST NAME */}
            <FormRow className="text form-item">
              <Label for="firstname">Your First Name</Label>

              <TextField
                fullWidth
                id="firstname"
                type="text"
                placeholder="Nikola"
                required
                className={invalid ? "invalid-missing" : ""}
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
                className={invalid ? "invalid-missing" : ""}
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
                className={invalid ? "invalid-missing" : ""}
              />
            </FormRow>

            {/** REASON */}
            <FormRow className="select form-item">
              <Label for="reason">Contact Reason</Label>
              <SelectWrapper>
                <SelectComponent invalid={invalid} options={contactReasons} />
              </SelectWrapper>
            </FormRow>
          </fieldset>
        </FormControl>
      </Form>
    );
  }
}

export default ContactFormComponent;

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
  `};
  &.with-summary {
    align-self: flex-start;
    padding-top: 7px;
  }
`;
