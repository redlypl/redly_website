import React from "react"
import AppleEmojis from "../../components/apple-emojis/apple-emojis"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import Button from "../../components/button/button"

import {
  HeroWrapper,
  Top,
  Bottom,
  ContentSide,
  SculptureSide,
  SocialMediaSection,
  PoweredBy,
  WroconsultLogo,
  Sculpture,
  DecoSculpture,
  WrapperContent,
  Header,
  UnderHeader,
  SocialItem,


  
} from "../../styles/templates/index/hero.style"

const HeroData = {
  Header: 'Nowoczesna agencja reklamowa ',
  UnderHeader: 'Jesteśmy agencją reklamową z nowoczesnym spojrzeniem na marketing. Nasze założenia są bardzo proste - Ty zajmiesz się tym na czym najbardziej się znasz, a my sprawimy że odpowiednie osoby dowiedzą się o twojej działalności.',
  HeroBtn: 'Zobacz naszą ofertę',
}

const socialMediaData = [
  {
    title: 'Instagram / ',
    url: 'https://www.instagram.com/redly.pl/'
  },
  {
    title: 'Behance / ',
    url: 'https://www.behance.net/redlyagency'
  },
  {
    title: 'Github',
    url: 'https://github.com/redlyagency'
  },
]

const Hero = () => {
  return (
    <HeroWrapper>
      <Top>
        <ContentSide>
          <Header>{HeroData.Header}</Header>
          <UnderHeader>{HeroData.UnderHeader}</UnderHeader>
          <Button name={HeroData.HeroBtn} to="/oferta" />
        </ContentSide>
        <SculptureSide>
          <DecoSculpture>
            <Sculpture />
          </DecoSculpture>
        </SculptureSide>
      </Top>
      <Bottom>
        <SocialMediaSection>
          {socialMediaData.map((item) => {
            return (
              <SocialItem key={item.title} href={item.url} >{item.title}</SocialItem>
            )
          })}
        </SocialMediaSection>
        <PoweredBy><p>Wspierane przez </p><WroconsultLogo href="https://wroconsult.pl" /></PoweredBy>
      </Bottom>
    </HeroWrapper>
  )
}

export default Hero