import React from "react"

import {
    RealizacjeWrapper,
    HeaderWrapper,
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

import wroconsult from "../../images/portfolio/wroconsult.jpg"
import redly from "../../images/portfolio/redly.jpg"
import unknown from "../../images/portfolio/unknown.jpg"

const RealizationData = [
    {
        id: '06',
        name: 'Wroconsult',
        category: 'Strona internetowa',
        date: '23 sierpień 2022',
        thumbnail: wroconsult
    },
    {
        id: '05',
        name: 'Redly',
        category: 'Kampania reklamowa',
        date: '23 sierpień 2022',
        thumbnail: redly
    },
    {
        id: '04',
        name: 'Unknow art',
        category: 'Branding',
        date: '23 sierpień 2022',
        thumbnail: unknown
    },
    {
        id: '03',
        name: 'Redly',
        category: 'Kampania reklamowa',
        date: '23 sierpień 2022',
        thumbnail: redly
    },
    {
        id: '02',
        name: 'Wroconsult',
        category: 'Strona internetowa',
        date: '23 sierpień 2022',
        thumbnail: wroconsult
    },
    {
        id: '01',
        name: 'Unknow art',
        category: 'Branding',
        date: '23 sierpień 2022',
        thumbnail: unknown
    }
]

const Realizacje = () => {
    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                <Header
                    name="Wszystkie realizacje"
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
            <SocialMediaInset />
        </RealizacjeWrapper>
    )
}

export default Realizacje