import React from "react"
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../../styles/globalStyles"

import {
    LayoutWrapper,

} from "./layout.style"
import Footer from "../footer/footer"
import Navbar from "../nav/nav"

import { ShowUpDelay } from "../../styles/animations/framer-animations"

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Helmet>
                <title>Redly - Agencja Reklamowa</title>
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