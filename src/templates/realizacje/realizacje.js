import React from "react"
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

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
    const location = useLocation()
    const dataAll = useStaticQuery(graphql`
        query {
        allContentfulRealizacje(
                sort: {order: DESC, fields: liczbaPorzdkowaRealizacji}
        ) {
            edges {
                node {
                    liczbaPorzdkowaRealizacji
                    createdAt(formatString: "DD-MM-YYYY")
                    nazwaKlienta
                    slug
                    kategoriaRealizacji
                    kanaly
                    uslugi
                    opis {
                        opis
                    }
                    logotypKlienta {
                        url
                    }
                    banerProjektu {
                        url
                    }
                    kilkaSlow {
                        kilkaSlow
                    }
                    banerKlient {
                        url
                    }
                    banerWstep {
                        url
                    }
                    wyzwanie {
                        wyzwanie
                    }
                    rozwizanie {
                        rozwizanie
                    }
                    efekty {
                        url
                    }
                    opinia {
                        opinia
                    }
                    imieNazwisko
                    stanowisko
                }
                }
                distinct(field: kategoriaRealizacji)
            }
        }
    `)

    function camelToUnderscore(key) {
        var result = key.replace( /([A-Z])/g, "$1" );
        return result.split(' ').join('_').toLowerCase();
    }
    let headerContext = null
    let querySource = null
    if ( location.pathname === "/realizacje" ) {
        headerContext = "Wszystkie realizacje"
        querySource = dataAll.allContentfulRealizacje.edges
    } else if ( location.pathname === "/realizacje/" ) {
        headerContext = "Wszystkie realizacje"
        querySource = dataAll.allContentfulRealizacje.edges
    } else {
        headerContext = "Realizacje"
        querySource = props.titleFilteredByCategory
    }
    let invertDetectorAll = 0
    if (location.pathname === "/realizacje") {
        invertDetectorAll = 1
    } else if (location.pathname === "/realizacje/"){
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
                        {dataAll.allContentfulRealizacje.distinct.map(name => {
                            let SculpingHref = location.pathname.replace("/realizacje/kategoria/", "")
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
                                key={node.liczbaPorzdkowaRealizacji}
                            >
                                <RealizationItem  to={'/realizacje/' + node.slug}>
                                    <ContentItemWrapper>
                                        <DecoLine />
                                        <Number>{node.liczbaPorzdkowaRealizacji}</Number>
                                        <HeaderWrapperItemItem>
                                        <TitleParagraph>{node.nazwaKlienta}</TitleParagraph>
                                        <CategoryParagraph>{node.kategoriaRealizacji}</CategoryParagraph>
                                        <DateParagraph>{node.createdAt}</DateParagraph>
                                        </HeaderWrapperItemItem>
                                    </ContentItemWrapper>
                                    <ThumbnailItemWrapper
                                        className="hoverBg"
                                        background={node.banerProjektu.url}
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