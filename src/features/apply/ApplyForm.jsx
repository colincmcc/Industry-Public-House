import React, { Component } from 'react';
import styled from 'styled-components';
import ApplyFormSectionZero from './ApplyFormSectionZero';
import ApplyFormSectionOne from './ApplyFormSectionOne';

class ApplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  handleNext = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { step } = this.state;
    const states = [
      { label: 'Alaska', value: 'Alaska' },
      { label: 'Alabama', value: 'Alabama' },
      { label: 'Arkansas', value: 'Arkansas' },
      { label: 'American Samoa', value: 'American Samoa' },
      { label: 'Arizona', value: 'Arizona' },
      { label: 'California', value: 'California' },
      { label: 'Colorado', value: 'Colorado' },
      { label: 'Connecticut', value: 'Connecticut' },
      { label: 'District of Columbia', value: 'District of Columbia' },
      { label: 'Delaware', value: 'Delaware' },
      { label: 'Florida', value: 'Florida' },
      { label: 'Georgia', value: 'Georgia' },
      { label: 'Guam', value: 'Guam' },
      { label: 'Hawaii', value: 'Hawaii' },
      { label: 'Iowa', value: 'Iowa' },
      { label: 'Idaho', value: 'Idaho' },
      { label: 'Illinois', value: 'Illinois' },
      { label: 'Indiana', value: 'Indiana' },
      { label: 'Kansas', value: 'Kansas' },
      { label: 'Kentucky', value: 'Kentucky' },
      { label: 'Louisiana', value: 'Louisiana' },
      { label: 'Massachusetts', value: 'Massachusetts' },
      { label: 'Maryland', value: 'Maryland' },
      { label: 'Maine', value: 'Maine' },
      { label: 'Michigan', value: 'Michigan' },
      { label: 'Minnesota', value: 'Minnesota' },
      { label: 'Missouri', value: 'Missouri' },
      { label: 'Mississippi', value: 'Mississippi' },
      { label: 'Montana', value: 'Montana' },
      { label: 'North Carolina', value: 'North Carolina' },
      { label: ' North Dakota', value: ' North Dakota' },
      { label: 'Nebraska', value: 'Nebraska' },
      { label: 'New Hampshire', value: 'New Hampshire' },
      { label: 'New Jersey', value: 'New Jersey' },
      { label: 'New Mexico', value: 'New Mexico' },
      { label: 'Nevada', value: 'Nevada' },
      { label: 'New York', value: 'New York' },
      { label: 'Ohio', value: 'Ohio' },
      { label: 'Oklahoma', value: 'Oklahoma' },
      { label: 'Oregon', value: 'Oregon' },
      { label: 'Pennsylvania', value: 'Pennsylvania' },
      { label: 'Puerto Rico', value: 'Puerto Rico' },
      { label: 'Rhode Island', value: 'Rhode Island' },
      { label: 'South Carolina', value: 'South Carolina' },
      { label: 'South Dakota', value: 'South Dakota' },
      { label: 'Tennessee', value: 'Tennessee' },
      { label: 'Texas', value: 'Texas' },
      { label: 'Utah', value: 'Utah' },
      { label: 'Virginia', value: 'Virginia' },
      { label: 'Virgin Islands', value: 'Virgin Islands' },
      { label: 'Vermont', value: 'Vermont' },
      { label: 'Washington', value: 'Washington' },
      { label: 'Wisconsin', value: 'Wisconsin' },
      { label: 'West Virginia', value: 'West Virginia' },
      { label: 'Wyoming', value: 'Wyoming' },
    ];

    const locationOptions = [
      { value: 'LV', label: 'Lawrenceville' },
      { value: 'NF', label: 'North Fayette' },
    ];
    const renderForm = () => {
      switch (step) {
        case 1:
          return (
            <ApplyFormSectionOne
              {...this.props}
              handleSubmit={handleSubmit}
              locationOptions={locationOptions}
            />
          );
        default:
          return (
            <ApplyFormSectionZero
              {...this.props}
              states={states}
              handleNext={this.handleNext}
              locationOptions={locationOptions}
            />
          );
      }
    };

    return (
      <Form onSubmit={handleSubmit}>
        {renderForm()}
      </Form>
    );
  }
}


export default ApplyForm;

const Form = styled.form`
  padding: 10px 10px 13px 15px;
  width: 100%;
  ${props => props.theme.media.tablet_portrait_up`
          padding:10px 18px 20px 24px;
  `};
`;
