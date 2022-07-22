import React from "react"
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../../styles/globalStyles"
import { useLocation } from "@reach/router"

import {
    LayoutWrapper,

} from "./layout.style"
import Footer from "../footer/footer"
import Navbar from "../nav/nav"

import { ShowUpDelay } from "../../styles/animations/framer-animations"

const Layout = (props) => {
    let TitlePagePath = useLocation().pathname
    function upperCaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const PageDinamicalTitleFunction = upperCaseFirstLetter(useLocation().pathname.replace('/','').replace('/','').replace('-',' '))
    let PageDinamicalTitle = ''

    if (TitlePagePath === '/') {
        PageDinamicalTitle = <title>Redly - Agencja Reklamowa</title>
    } else if (TitlePagePath.startsWith('/realizacje/kategoria') === true ) {
        PageDinamicalTitle = <title>Realizacje | Agencja Reklamowa - Redly</title>
    } else {
        PageDinamicalTitle = <title>{PageDinamicalTitleFunction} | Agencja Reklamowa - Redly</title>
    } 

    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Helmet htmlAttributes={{
                lang: 'en',
            }}>
                {PageDinamicalTitle}
                <meta
                    name="description"
                    content="Jesteśmy agencją reklamową z nowoczesnym spojrzeniem na marketing. Nasze założenia są bardzo proste - Ty zajmiesz się tym na czym najbardziej się znasz, a my sprawimy że odpowiednie osoby dowiedzą się o twojej działalności."
                />
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Helmet>
            <Navbar />
                <motion.div
                    variants={ShowUpDelay}
                    initial="hidden"
                    animate="show"
                >
                    { props.children }
                </motion.div>
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout