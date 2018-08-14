import React from 'react';
import styled from 'styled-components';

const FormLabel = (props) => {
  const { htmlFor, children } = props;
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default FormLabel;

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
