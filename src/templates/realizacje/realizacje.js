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

const Realizacje = (props) => {
    const dataAll = useStaticQuery(graphql`
        query {
            allContentfulRealizations(
                sort: {order: DESC, fields: number}
            ) {
                edges {
                    node {
                        id
                        number
                        title
                        slug
                        category
                        createdAt(formatString: "DD-MM-YYYY")
                        thumbnail {
                            resize(width: 720, height: 320, format: JPG) {
                                src
                            }
                        }
                    }
                }
                distinct(field: category)
            }
        }
    `)

    function camelToUnderscore(key) {
        var result = key.replace( /([A-Z])/g, "$1" );
        return result.split(' ').join('_').toLowerCase();
    }
    let headerContext = null
    let querySource = null
    if ( window.location.pathname === "/realizacje" ) {
        headerContext = "Wszystkie realizacje"
        querySource = dataAll.allContentfulRealizations.edges
    } else if ( window.location.pathname === "/realizacje/" ) {
        headerContext = "Wszystkie realizacje"
        querySource = dataAll.allContentfulRealizations.edges
    } else {
        headerContext = "Realizacje"
        querySource = props.titleFilteredByCategory
    }

    return (
        <RealizacjeWrapper>
            <HeaderWrapper>
                <Header
                    name={headerContext}
                    emojiBase={EmojiData.hammer}
                />
            </HeaderWrapper>
            <CategoryFilterBar>
                <p>Kategoria: </p>
                {dataAll.allContentfulRealizations.distinct.map(name => {
                    let SculpingHref = window.location.pathname.replace("/realizacje/kategoria/", "")
                    let invertDetector = 0
                    if (camelToUnderscore(name) === SculpingHref) {invertDetector = 1}
                    return (
                        <Label
                            invertValue={invertDetector}
                            to={'/realizacje/kategoria/' + camelToUnderscore(name)}
                        >
                            {name}
                        </Label>
                    )
                })}
            </CategoryFilterBar>
            <RealizationsItemsWrapper>
                {querySource.map(( {node} ) => {
                    return (
                        <RealizationItem key={node.number} to={'/realizacje/' + node.slug}>
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
                                background={node.thumbnail.resize.src}
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