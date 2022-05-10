import React from "react"

import {
  NewsletterWrapper,
  HeaderWrapper,
  NewsletterBody,
  SignSide,
  ImageDecoSide,

} from "../../styles/templates/index/newsletter.style"

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <HeaderWrapper>
        header
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