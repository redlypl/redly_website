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
                {dataAll.allContentfulRealizations.edges.map(({node}) => {

                    function camelToUnderscore(key) {
                        var result = key.replace( /([A-Z])/g, "$1" );
                        return result.split(' ').join('_').toLowerCase();
                    }
                    
                    // function NonDuplicates() {
                    //     const Rdata = new Set 
                    //     const filter = Rda
                    // }


                    
                    return (
                        <Label key={node.id} to={'/realizacje/kategoria/' + `${camelToUnderscore(node.category)}`}>
                            {/* {NonDuplicates()} */}
                            sdfsdf
                        </Label>
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