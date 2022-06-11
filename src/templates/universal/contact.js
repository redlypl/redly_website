import React from "react"

import {
  ContactWrapper,
  HeaderWrapper,
  UnderHeaderWrapper,
  ContactBody,
  ImageDeco,
  ContactFormWrapper,
  ImageDecorationContact,

} from "../../styles/templates/universal/contact.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import ContactForm from "../../components/contactForm/contactForm"



const Contact = (props) => {

  let underHeader = '' 

  if ( props.isIndex === true ) {
    underHeader = (
      <HeaderWrapper>
        <Header
          name="Skontaktuj się z nami"
          emojiBase={EmojiData.envelope}
        />
      </HeaderWrapper>
    )
  }

  return (
    <ContactWrapper>
      { underHeader }
      <UnderHeaderWrapper>
        { props.content }
      </UnderHeaderWrapper>
      <ContactBody>
        <ImageDeco>
          <ImageDecorationContact />
        </ImageDeco>
        <ContactFormWrapper>
          <ContactForm />
        </ContactFormWrapper>
      </ContactBody>
    </ContactWrapper>
  )
}

export default Contact