import React from "react"

import {
  RealizationsWrapper,
  HeaderWrapper,
  RealizationsItemsWrapper,
  RealizationItem,
  BtnWrapper,

} from "../../styles/templates/index/realizations.style"

const Realizations = () => {
  return (
    <RealizationsWrapper>
      <HeaderWrapper>
        header
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