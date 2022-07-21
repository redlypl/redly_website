import React from "react"

import { SocialMediaIcon, SocialMediaLink } from "../../global/socialMediaData"

import {
  FooterWrapper,
  FooterContent,
  BreakVerticalLine,
  SocialMediaBar,
  SocialLink,
  SocialItem
} from "./footer.style"

const SocialMediaData = [
  {
    icon: SocialMediaIcon.facebook,
    url: SocialMediaLink.facebook,
    size: '30%',
    aria: 'Facebook'
  },
  {
    icon: SocialMediaIcon.instagram,
    url: SocialMediaLink.instagram,
    size: '48%',
    aria: 'Instagram'
  },
  {
    icon: SocialMediaIcon.github,
    url: SocialMediaLink.github,
    size: '52%',
    aria: 'Github'
  },
  {
    icon: SocialMediaIcon.linkedin,
    url: SocialMediaLink.linkedin,
    size: '45%',
    aria: 'Linkedin'
  },
  {
    icon: SocialMediaIcon.behance,
    url: SocialMediaLink.behance,
    size: '63%',
    aria: 'Behance'
  },
]

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        &copy; Redly {new Date().getFullYear()}&nbsp;&nbsp;
        <BreakVerticalLine />
        <SocialMediaBar>
          {SocialMediaData.map((item) => {
            return (
              <SocialLink aria-label={item.aria} href={item.url}>
                <SocialItem iconBg={item.icon} sizeBg={item.size} />
              </SocialLink>
            )
          })}
        </SocialMediaBar>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer