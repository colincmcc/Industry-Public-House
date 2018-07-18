import React from 'react'
import SvgIcon from "@material-ui/core/SvgIcon";


const PhoneButton = (props) => {
  return (
    <SvgIcon {...props}>
      <title>phone_24</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M23.13,1.15,18.25,0A1.13,1.13,0,0,0,17,.68L14.71,5.93A1.12,1.12,0,0,0,15,7.24l2.84,2.32a17.37,17.37,0,0,1-8.31,8.31L7.25,15a1.12,1.12,0,0,0-1.31-.32L.68,17A1.14,1.14,0,0,0,0,18.25l1.12,4.87a1.12,1.12,0,0,0,1.1.87A21.75,21.75,0,0,0,24,2.25,1.12,1.12,0,0,0,23.13,1.15Z"/>

    </SvgIcon>
  )
}
PhoneButton.displayName = 'PhoneButton';

PhoneButton.muiName = 'SvgIcon';

export default PhoneButton
