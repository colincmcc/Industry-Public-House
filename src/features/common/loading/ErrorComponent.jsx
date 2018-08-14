import React from 'react';
import styled from 'styled-components';
import Gear from '../../../common/assets/img/gear.svg';
import Heading from '../Heading';

const ErrorComponent = props => (
  <ErrorWrapper {...props}>
    <Error {...props}>
      <StuckGear />
      <Heading
        style={{ color: '#110C02' }}
        center
        text="An error has occured"
      />
    </Error>
  </ErrorWrapper>
);

export default ErrorComponent;
const ErrorWrapper = styled.div`
  height: ${props => (props.large ? '100vh' : '100%')};
  width: 100%;
  background-color: transparent;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: auto;
  color: ${props => props.theme.colors.warning};
`;

const StuckGear = styled(Gear)`
  color: ${props => props.theme.colors.warning};
  width: 10rem;
  height: 10rem;
`;
