import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../../styles/globalStyles"

import {
    LayoutWrapper,

} from "./layout.style"
import Footer from "../footer/footer"
import Navbar from "../nav/nav"

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Helmet>
                <title>Redly - Agencja Reklamowa</title>
            </Helmet>
            <Navbar />
            { props.children }
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout