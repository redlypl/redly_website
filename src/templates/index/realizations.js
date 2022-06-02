import React from "react"

import {
  RealizationsWrapper,
  HeaderWrapper,
  RealizationsItemsWrapper,
  RealizationItem,
  BtnWrapper,
  ContentItemWrapper,
  ThumbnailItemWrapper,
  DecoLine,
  Number,
  HeaderWrapperItemItem,
  TitleParagraph,
  CategoryParagraph,
  DateParagraph

} from "../../styles/templates/index/realizations.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"
import Button from "../../components/button/button"

import wroconsult from "../../images/portfolio/wroconsult.jpg"
import redly from "../../images/portfolio/redly.jpg"
import unknown from "../../images/portfolio/unknown.jpg"

const RealizationData = [
  {
    id: '03',
    name: 'Wroconsult',
    category: 'Strona internetowa',
    date: '23 sierpień 2022',
    thumbnail: wroconsult
  },
  {
    id: '02',
    name: 'Redly',
    category: 'Kampania reklamowa',
    date: '23 sierpień 2022',
    thumbnail: redly
  },
  {
    id: '01',
    name: 'Unknow art',
    category: 'Branding',
    date: '23 sierpień 2022',
    thumbnail: unknown
  },
]

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
        {RealizationData.map((item) => {
          return (
            <RealizationItem key={item.id}>
              <ContentItemWrapper>
                <DecoLine />
                <Number>{item.id}</Number>
                <HeaderWrapperItemItem>
                  <TitleParagraph>{item.name}</TitleParagraph>
                  <CategoryParagraph>{item.category}</CategoryParagraph>
                  <DateParagraph>{item.date}</DateParagraph>
                </HeaderWrapperItemItem>
              </ContentItemWrapper>
              <ThumbnailItemWrapper
                className="hoverBg"
                background={item.thumbnail}
              />
            </RealizationItem>
          )
        })}
      </RealizationsItemsWrapper>
      <BtnWrapper>
        <Button name="Zobacz więcej" to="/realizacje" />
      </BtnWrapper>
    </RealizationsWrapper>
  )
}

export default Realizations