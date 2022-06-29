import React from "react"

import {
  AboutWrapper,
  HeaderWrapper,
  AboutBody,
  ContentSide,
  InsideContentHalf,
  ImagePlace,
  BtnWrapper,

} from "../../styles/templates/index/about.style"

import Header from "../../components/header/header"
import Button from "../../components/button/button"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const About = () => {
  return (
    <AboutWrapper>
      <HeaderWrapper>
        <Header
          name="Kilka słów o nas"
          emojiBase={EmojiData.pushpin}
        />
      </HeaderWrapper>
      <AboutBody>
        <ContentSide>
          <InsideContentHalf>
            paragraph
          </InsideContentHalf>
          <InsideContentHalf>
            <ImagePlace>
              image
            </ImagePlace>
            <ImagePlace>
              image
            </ImagePlace>
          </InsideContentHalf>
        </ContentSide>
        <ContentSide>
          <InsideContentHalf>
            paragraph
          </InsideContentHalf>
          <InsideContentHalf>
            <ImagePlace>
              image
            </ImagePlace>
            <ImagePlace>
              image
            </ImagePlace>
          </InsideContentHalf>
        </ContentSide>
      </AboutBody>
      <BtnWrapper>
        <Button name="Przeczytaj więcej" to="/o-nas" />
      </BtnWrapper>
    </AboutWrapper>
  )
}

export default About