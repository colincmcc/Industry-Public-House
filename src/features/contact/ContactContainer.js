import React from 'react'
import ContactComponent from './ContactComponent'
import PageHeaderContainer from '../../common/components/page/PageHeaderContainer'
import bgImg from '../../common/assets/img/header_bg_clean.jpg'
const ContactContainer = () => {
  return (
    <div>
      <PageHeaderContainer heading="Contact" subHeading="" bgImg={bgImg} />
      <ContactComponent />
    </div>
  )
}

export default ContactContainer
