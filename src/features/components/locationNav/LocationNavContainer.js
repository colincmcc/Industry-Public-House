import React from 'react';
import MobileChooserComponent from './MobileChooserComponent';

const LocationNavContainer = (props) => {
  const { isMobile } = props;

  if (isMobile) return <MobileChooserComponent />;
};

export default LocationNavContainer;
