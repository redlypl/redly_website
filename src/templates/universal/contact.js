import React from "react"

import {
  ContactWrapper,
  HeaderWrapper,
  UnderHeaderWrapper,
  ContactBody,
  ImageDeco,
  ContactFormWrapper,

} from "../../styles/templates/universal/contact.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

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