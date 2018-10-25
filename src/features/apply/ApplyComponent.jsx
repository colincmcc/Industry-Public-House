import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/page/PageWrapper';
import ApplyForm from './ApplyForm';

const ApplyComponent = () => (
  <PageWrapper>
    <FormContainer>
      <ApplyForm />
    </FormContainer>
  </PageWrapper>
);

export default ApplyComponent;

const FormContainer = styled.section`
  border-radius: 4px;
  max-width: 645px;
  width: 100%;
  background: ${props => props.theme.colors.whiteTheme};
  margin: auto;
  box-shadow: 0 50px 100px ${props => `${props.theme.colors.darkTheme}1A`},
    0 15px 35px ${props => `${props.theme.colors.darkTheme}26`},
    0 5px 15px rgba(0, 0, 0, 0.1);

  ${props => props.theme.media.tablet_landscape_up`
    margin: 0
  `};
`;
