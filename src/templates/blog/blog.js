import React from "react"

import {
    ArticlesWrapper,
    HeaderWrapper,
    ArticlesItemsWrapper,
    ArticleItem,
    BtnWrapper,

} from "../../styles/templates/blog/blog.style"

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