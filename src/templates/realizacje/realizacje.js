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
    const dataAll = useStaticQuery(graphql`
        query RealizationsQueryAll {
            allContentfulRealizations {
                edges {
                    node {
                        id
                        number
                        title
                        slug
                        category
                        createdAt(formatString: "DD-MM-YYYY")
                        thumbnail {
                            url
                        }
                    }
                }
            }
        }
    `)

    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                <Header
                    name="Wszystkie realizacje"
                    emojiBase={EmojiData.hammer}
                />
            </HeaderWrapper>
            <CategoryFilterBar>
                <p>Kategoria: </p>
                {CategoryList.map((item) => {

                    // if (document.getElementById('branding').clicked == true) {
                    //     alert('branding was checked')
                    // } else if (document.getElementById('strona_internetowa').clicked == true) {
                    //     alert('strona internetowa was checked')
                    // } else {
                    //     alert('nothing was checked')
                    // }
                    // if(element) {
                    //     element.addEventListener("click", () => {
                    //         return (
                    //             <p>branding was checked</p>
                    //         )
                    //     })
                    // }

                    // let element = document.getElementById('branding').clicked

                    // function returnConst() {
                    
                    //     if (element == true) {
                    //         alert('branding was checked')
                    
                    //         return (
                    //             <p>test</p>
                    //         )
                    //     }
                    // }

                    return (
                        <>
                        <Label id={item.id}>{item.category}</Label>
                
        
                        </>
                    )
                })}
            </CategoryFilterBar>
            <RealizationsItemsWrapper>
                {dataAll.allContentfulRealizations.edges.map(( {node} ) => {
                    return (
                        <RealizationItem key={node.id} to={node.slug}>
                            <ContentItemWrapper>
                                <DecoLine />
                                <Number>{node.number}</Number>
                                <HeaderWrapperItemItem>
                                <TitleParagraph>{node.title}</TitleParagraph>
                                <CategoryParagraph>{node.category}</CategoryParagraph>
                                <DateParagraph>{node.createdAt}</DateParagraph>
                                </HeaderWrapperItemItem>
                            </ContentItemWrapper>
                            <ThumbnailItemWrapper
                                className="hoverBg"
                                background={node.thumbnail.url}
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