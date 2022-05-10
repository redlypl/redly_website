import React from "react"

import {
  ContactWrapper,
  HeaderWrapper,
  UnderHeaderWrapper,
  ContactBody,
  ImageDeco,
  ContactFormWrapper,

} from "../../styles/templates/universal/contact.style"

const Contact = (props) => {

  let underHeader = '' 

  if ( props.isIndex === true ) {
    underHeader = <HeaderWrapper> header </HeaderWrapper>
  }

  return (
    <ContactWrapper>
      { underHeader }
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