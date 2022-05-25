import React from "react"

import {
  ArticlesWrapper,
  HeaderWrapper,
  ArticlesItemsWrapper,
  ArticleItem,
  BtnWrapper,

} from "../../styles/templates/index/articles.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const Articles = () => {
  return (
    <ArticlesWrapper>
      <HeaderWrapper>
        <Header
          name="Najnowsze artykuły"
          emojiBase={EmojiData.books}
        />
      </HeaderWrapper>
      <ArticlesItemsWrapper>
        <ArticleItem>first-item</ArticleItem>
        <ArticleItem>second-item</ArticleItem>
        <ArticleItem>third-item</ArticleItem>
      </ArticlesItemsWrapper>
      <BtnWrapper>
        btn
      </BtnWrapper>
    </ArticlesWrapper>
  )
}

export default Articles