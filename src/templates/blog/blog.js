import React from "react"

import {
    ArticlesWrapper,
    HeaderWrapper,
    ArticlesItemsWrapper,
    ArticleItem,
    ThumbnailImg,
    PostContentWrapper,
    Bar,
    TagPlaceholder,
    PublishedDate,
    Title,
    Description,
    SocialMediaWrapper,
    
} from "../../styles/templates/blog/blog.style"

import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const test_data = [
    {
        id: 1,
        name: 'test1'
    },
    {
        id: 2,
        name: 'test2'
    },
    {
        id: 3,
        name: 'test3'
    },
    {
        id: 4,
        name: 'test4'
    },
    {
        id: 5,
        name: 'test5'
    },
    {
        id: 6,
        name: 'test6'
    },
    {
        id: 7,
        name: 'test7'
    },
    {
        id: 8,
        name: 'test8'
    },
    ]

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
                {test_data.map((data) => {
                    return (
                        // <motion.div
                        // ref={ref}
                        // variants={ScaleOneShowAnimation}
                        // initial="hidden"
                        // animate={control}
                        // >
                        <ArticleItem key={data.id}>
                            <ThumbnailImg />
                            <PostContentWrapper>
                            <Bar>
                                <TagPlaceholder>Poradniki</TagPlaceholder>
                                <PublishedDate>26.02.2022</PublishedDate>
                            </Bar>
                            <Title>Najważniejsze narzędzia dla projektanta</Title>
                            <Description>Z tego artykułu dowiesz się jakie niezbędne narzędzi sdlfjhsodfdo hsfhsfioushdfiuhsdf uishdf sdbfsdh fsdh fhs fhsd fs df sdfh sdhf hsdfha posiada każdy projektant oraz jak z nich profesjonalnie korzystać.</Description>
                            </PostContentWrapper>
                        </ArticleItem>
                        // </motion.div>
                    )
                })}
            </ArticlesItemsWrapper>
            <SocialMediaWrapper>
                =ig_icon= =behance_icon= =github_icon=
            </SocialMediaWrapper>
        </ArticlesWrapper>
    )
}

export default Articles