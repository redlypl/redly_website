import React from "react"

import {
    ArticlesWrapper,
    HeaderWrapper,
    ArticlesItemsWrapper,
    ArticleItem,
    BtnWrapper,

} from "../../styles/templates/blog/blog.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const Articles = () => {
    return (
        <ArticlesWrapper>
        <HeaderWrapper>
            <Header
                name="Wszystkie artykuły"
                emojiBase={EmojiData.books}
            />
        </HeaderWrapper>
        <ArticlesItemsWrapper>
            <ArticleItem>first-item</ArticleItem>
            <ArticleItem>second-item</ArticleItem>
            <ArticleItem>third-item</ArticleItem>
            <ArticleItem>first-item</ArticleItem>
            <ArticleItem>second-item</ArticleItem>
            <ArticleItem>third-item</ArticleItem>
            <ArticleItem>first-item</ArticleItem>
            <ArticleItem>second-item</ArticleItem>
            <ArticleItem>third-item</ArticleItem>
            <ArticleItem>first-item</ArticleItem>
            <ArticleItem>second-item</ArticleItem>
            <ArticleItem>third-item</ArticleItem>
            <ArticleItem>second-item</ArticleItem>
        </ArticlesItemsWrapper>
        <BtnWrapper>
            btn
        </BtnWrapper>
        </ArticlesWrapper>
    )
}

export default Articles