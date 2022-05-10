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

const About = () => {
  return (
    <AboutWrapper>
      <HeaderWrapper>
        header
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
        btn
      </BtnWrapper>
    </AboutWrapper>
  )
}

export default About