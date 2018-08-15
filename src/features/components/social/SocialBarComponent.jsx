import React from 'react';
import styled from 'styled-components';
import grungeBorder from '../../common/assets/img/grunge_border_v3.svg';

const SocialBarComponent = props => (
  <SocialBarWrapper>
    <div />
  </SocialBarWrapper>
);

export default SocialBarComponent;

const SocialBarWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 10vh;
  background-image: linear-gradient(90deg, #110c02 80%, #110c02 0%);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 125px;
    top: -65px;
    left: 0;
    background-image: url(${grungeBorder});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
