import React from 'react';
import PageHeaderContainer from '../components/page/PageHeaderContainer';
import ApplyComponent from './ApplyComponent';
import bgImg from '../../common/assets/img/social.jpg';

const ApplyContainer = () => (
  <div>
    <PageHeaderContainer heading="Work at Industry" subHeading="" bgImg={bgImg} />
    <ApplyComponent />
  </div>
);

export default ApplyContainer;
