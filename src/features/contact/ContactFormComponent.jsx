import React, { Component } from "react";
import styled from "styled-components";

class ContactFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    var invalid = false;
    return (
      <Form onsSubmit={this.handleSubmit} method="post" noValidate>
        <fieldset style={{ border: "none", margin: 0, padding: 0 }}>
          <FormRow className="text">
            <Label for="firstname">Your First Name</Label>
            <TextInput
              id="firstname"
              type="text"
              placeholder="Nikola"
              required
              className={invalid ? "invalid-missing" : ""}
            />
          </FormRow>
          <FormRow className="text">
            <Label for="lastname"> Your Last Name </Label>
            <TextInput
              id="lastname"
              type="text"
              placeholder="Tesla"
              required
              className={invalid ? "invalid-missing" : ""}
            />
          </FormRow>
          <FormRow className="text">
            <Label for="email"> Your Email </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="nikola.tesla@example.com"
              required
              className={invalid ? "invalid-missing" : ""}
            />
          </FormRow>
        </fieldset>
      </Form>
    );
  }
}

export default ContactFormComponent;

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;
const FormRow = styled.div`
  padding: 8px 13px 2px 17px;
  border-bottom: 1px solid ${props => props.theme.colors.yellowGray};
  transition: opacity 0.2s ease-in, height 0.2s ease-out;

  ${props => props.theme.media.tablet_portrait_up`
    display: flex;
    border-bottom: none;
    padding: 4px 0;
    max-width: 600px;
  `};
`;
const SelectWrapper = styled.div`
  flex: 68%;
  position: relative;
  cursor: pointer;
`;
const Select = styled.select`
  padding-right: 50px;
  width: 100%;
  pointer-events: none;
  background: transparent;
  border: none:
  outline: none;
  border-radius: 4px;
  ${props => props.theme.components.text};


  ${props => props.theme.media.tablet_portrait_up`
    background-color: ${props => props.theme.colors.whiteTheme};
  `};

  &.hasValue {
    color: ${props => props.theme.colors.blackTheme};
  }
  &.hasFocus {
    box-shadow: none;
    background-color: transparent;

    ${props => props.theme.media.tablet_portrait_up`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.whiteTheme};
    `};
  }
`;

const Submit = styled.button`
  justify-content: flex-end;
`;

const TextArea = styled.textarea``;
const TextInput = styled.input`
  display: block;
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  border-radius: 4px;
  padding: 5px 20px 8px 0;
  align-self: center;
  ${props => props.theme.components.text};

  color: ${props => props.theme.colors.blackTheme};
  background-color: 0.1s ease-in, color 0.1s ease-in;
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

    flex: 32%;
    text-transform: none;
    align-self: center;
  `};

  &.has-focus {
    color: ${props => props.theme.colors.darkTheme};
  }
`;
