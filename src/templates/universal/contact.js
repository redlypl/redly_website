import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion";

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

import { OneItemForChild } from "../../styles/animations/framer-animations"

const Contact = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        featureimg: file(relativePath: {eq: "contactDeco/contactdecoFirst.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

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
            <ImageDecorationContact ContactImage={data.featureimg.childImageSharp.fluid.srcWebp}  />
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