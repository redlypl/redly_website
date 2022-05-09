import React from "react"

import {
  HeroWrapper,
  ContentSide,
  SculptureSide,
  SocialMediaSlide,
  
} from "../../styles/templates/index/hero.style"

const Hero = () => {
  return (
    <HeroWrapper>
      <ContentSide>
        ContentSide
      </ContentSide>
      <SculptureSide>
        SculptureSide
      </SculptureSide>
      <SocialMediaSlide>
        social media
      </SocialMediaSlide>
    </HeroWrapper>
  )
}

export default Hero