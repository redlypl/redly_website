import React from "react"

import {
  RealizationsWrapper,
  HeaderWrapper,
  RealizationsItemsWrapper,
  RealizationItem,
  BtnWrapper,

} from "../../styles/templates/index/realizations.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const Realizations = () => {
  return (
    <RealizationsWrapper>
      <HeaderWrapper>
        <Header
          name="Ostatnie realizacje"
          emojiBase={EmojiData.hammer}
        />
      </HeaderWrapper>
      <RealizationsItemsWrapper>
        <RealizationItem>first-item</RealizationItem>
        <RealizationItem>second-item</RealizationItem>
        <RealizationItem>third-item</RealizationItem>
      </RealizationsItemsWrapper>
      <BtnWrapper>
        btn
      </BtnWrapper>
    </RealizationsWrapper>
  )
}

export default Realizations