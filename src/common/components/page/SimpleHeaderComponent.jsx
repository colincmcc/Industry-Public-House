import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import theme from "../../styled/theme";

const SimpleHeaderComponent = props => {
  return (
    <PageHeaderWrapper bgImg={props.bgImg}>
      <BGOverlay />
      <PageHeadContent>
        <PageHeading>{props.heading} </PageHeading>

        <PageSubHeading>{props.subHeading}</PageSubHeading>
      </PageHeadContent>
    </PageHeaderWrapper>
  );
};

export default SimpleHeaderComponent;

const PageHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  height: 85vh;
  width: 100%;
  overflow: hidden;
  z-index: -2;
`;
const BGOverlay = styled.div`
  width: 100%;
  height: 85vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(17, 12, 2, 0.6);
`;
const PageHeadContent = styled.div`
  margin: auto;
  max-width: 720px;
  z-index: 2;
`;

const PageHeading = styled.div`
  ${props => props.theme.components.heading};
`;
const PageSubHeading = styled.div`
  ${props => props.theme.components.subheading};
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  padding: 3em;
  max-width: 500px;
`;
