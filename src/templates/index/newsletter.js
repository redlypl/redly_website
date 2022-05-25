import React from "react"

import {
  NewsletterWrapper,
  HeaderWrapper,
  NewsletterBody,
  SignSide,
  ImageDecoSide,

} from "../../styles/templates/index/newsletter.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <HeaderWrapper>
        <Header
          name="Zapisz się na nasz newsletter"
          emojiBase={EmojiData.openMailboxWithRaisedFlag}
        />
      </HeaderWrapper>
      <NewsletterBody>
        <SignSide>
          sign side - paragraph + email input
        </SignSide>
        <ImageDecoSide>
          deco image place
        </ImageDecoSide>
      </NewsletterBody>
    </NewsletterWrapper>
  )
}

export default Newsletter