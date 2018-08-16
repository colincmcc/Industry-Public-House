import React from 'react';
import styled from 'styled-components';

const FormRow = ({ children }) => <Row className="form-item">{children}</Row>;
export default FormRow;

const Row = styled.div`
  padding: 8px 13px 2px 17px;
  transition: opacity 0.2s ease-in, height 0.2s ease-out;
  position: relative;
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
