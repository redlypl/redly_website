import React from "react"
import Button from "../../components/button/button"
import { motion } from "framer-motion";

import { SocialMediaLink } from "../../global/socialMediaData";

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
  Header,
  UnderHeader,
  SocialItem,
} from "../../styles/templates/index/hero.style"
import {
  HeaderAnimation,
  UnderHeaderAnimation,
  ButtonAnimation,
} from "../../styles/animations/framer-animations"

const HeroData = {
  Header: 'Nowoczesna agencja reklamowa ',
  UnderHeader: 'Jesteśmy agencją reklamową z nowoczesnym spojrzeniem na marketing. Nasze założenia są bardzo proste - Ty zajmiesz się tym na czym najbardziej się znasz, a my sprawimy że odpowiednie osoby dowiedzą się o twojej działalności.',
  HeroBtn: 'Zobacz naszą ofertę',
}

const socialMediaData = [
  {
    title: 'Instagram / ',
    url: SocialMediaLink.instagram
  },
  {
    title: 'Behance / ',
    url: SocialMediaLink.behance
  },
  {
    title: 'Github',
    url: SocialMediaLink.github
  },
]

const Hero = () => {
  return (
    <HeroWrapper>
      <Top>
        <ContentSide>
          <motion.div
            variants={HeaderAnimation}
            initial="initial"
            animate="animate"
          >
            <Header>{HeroData.Header}</Header>
          </motion.div>
          <motion.div
            variants={UnderHeaderAnimation}
            initial="initial"
            animate="animate"
          >
            <UnderHeader>{HeroData.UnderHeader}</UnderHeader>
          </motion.div>
          <motion.div
            variants={ButtonAnimation}
            initial="initial"
            animate="animate"
          >
            <Button name={HeroData.HeroBtn} to="/oferta" />
          </motion.div>
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