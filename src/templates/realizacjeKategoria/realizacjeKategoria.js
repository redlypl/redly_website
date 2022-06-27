import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
    RealizacjeWrapper,
    HeaderWrapper,
    CategoryFilterBar,
    Label,
    RealizationsItemsWrapper,
    RealizationItem,
    ContentItemWrapper,
    DecoLine,
    Number,
    HeaderWrapperItemItem,
    TitleParagraph,
    CategoryParagraph,
    DateParagraph,
    ThumbnailItemWrapper,

} from "../../styles/templates/realizacje/realizacje.style"

import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"
import Header from "../../components/header/header"
import { EmojiData } from "../../components/apple-emojis/emojiData"

const CategoryList = [
    {
        id: 'branding',
        category: 'Branding'
    },
    {
        id: 'strona_internetowa',
        category: 'Strona internetowa'
    },
    {
        id: 'kampania_reklamowa',
        category: 'Kampania reklamowa'
    }
]

const Realizacje = () => {


    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                <Header
                    name="Wszystkie asdasd"
                    emojiBase={EmojiData.hammer}
                />
            </HeaderWrapper>
            <CategoryFilterBar>
                <p>Kategoria: </p>
               
            </CategoryFilterBar>
            <RealizationsItemsWrapper>
               dfgdfg
            </RealizationsItemsWrapper>
            <SocialMediaInset />
        </RealizacjeWrapper>
    )
}

export default Realizacje