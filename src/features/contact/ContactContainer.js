import React from 'react'
import ContactComponent from './ContactComponent'
import PageHeaderComponent from '../../common/components/page/PageHeaderComponent'
import bgImg from '../../common/assets/img/header_bg_clean.jpg'
const ContactContainer = () => {
  return (
    <div>
      <PageHeaderComponent heading="Contact" subHeading="" bgImg={bgImg} />
      <ContactComponent />
    </div>
  )
}

export default ContactContainer
