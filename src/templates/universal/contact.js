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

import { motion } from "framer-motion";
import { OneItemForChild } from "../../styles/animations/framer-animations"

const Contact = (props) => {

  let underHeader = '' 

  if ( props.isIndex === true ) {
    underHeader = (
      <HeaderWrapper>
        <motion.div variants={OneItemForChild}>
          <Header
            name="Skontaktuj się z nami"
            emojiBase={EmojiData.envelope}
          />
        </motion.div>
      </HeaderWrapper>
    )
  }

  return (
    <ContactWrapper>
      { underHeader }
      <UnderHeaderWrapper>
        <motion.div variants={OneItemForChild}>
          { props.content }
        </motion.div>
      </UnderHeaderWrapper>
      <motion.div variants={OneItemForChild}>
        <ContactBody>
          <ImageDeco>
            <ImageDecorationContact />
          </ImageDeco>
          <ContactFormWrapper>
            <ContactForm />
          </ContactFormWrapper>
        </ContactBody>
      </motion.div>
    </ContactWrapper>
  )
}

export default Contact