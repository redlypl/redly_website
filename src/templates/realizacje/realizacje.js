import React from "react"
import { motion } from "framer-motion";
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

import { OneItemForChild } from "../../styles/animations/framer-animations"

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
    let invertDetectorAll = 0
    if (window.location.pathname === "/realizacje") {
        invertDetectorAll = 1
    } else if (window.location.pathname === "/realizacje/"){
        invertDetectorAll = 1
    } else {
        invertDetectorAll = 0
    }
    
    return (
        <RealizacjeWrapper>
                <HeaderWrapper>
                    <motion.div variants={OneItemForChild}>
                        <Header
                            name={headerContext}
                            emojiBase={EmojiData.hammer}
                        />
                    </motion.div>
                </HeaderWrapper>
                <motion.div variants={OneItemForChild}>
                    <CategoryFilterBar>
                        <p>Kategoria: </p>
                        <Label
                            invertValue={invertDetectorAll}
                            to="/realizacje"
                        >Wszystko</Label>
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
                </motion.div>
                <RealizationsItemsWrapper>
                    {querySource.map(( {node} ) => {
                        return (
                            <motion.div
                                variants={OneItemForChild}
                                key={node.number}
                            >
                                <RealizationItem  to={'/realizacje/' + node.slug}>
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
                            </motion.div>
                        )
                    })}
                </RealizationsItemsWrapper>
                <SocialMediaInset />
        </RealizacjeWrapper>
    )
}

export default Realizacje