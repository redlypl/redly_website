import React from "react"

import {
  ArticlesWrapper,
  HeaderWrapper,
  ArticlesItemsWrapper,
  ArticleItem,
  BtnWrapper,

} from "../../styles/templates/index/articles.style"

const Articles = () => {
  return (
    <ArticlesWrapper>
      <HeaderWrapper>
        header
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