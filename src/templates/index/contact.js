import React from "react"

import {
  ContactWrapper,
  HeaderWrapper,
  UnderHeaderWrapper,
  ContactBody,
  ImageDeco,
  ContactFormWrapper,

} from "../../styles/templates/index/contact.style"

const Contact = () => {
  return (
    <ContactWrapper>
      <HeaderWrapper>
        header
      </HeaderWrapper>
      <UnderHeaderWrapper>
        under header<br />
        two lines
      </UnderHeaderWrapper>
      <ContactBody>
        <ImageDeco>
          deco image place
        </ImageDeco>
        <ContactFormWrapper>
          contact form
        </ContactFormWrapper>
      </ContactBody>
    </ContactWrapper>
  )
}

export default Contact