import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../../styles/globalStyles"

import {
    LayoutWrapper,

} from "./layout.style"

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <Helmet>
                <title>Redly - Agencja Reklamowa</title>
            </Helmet>
            { props.children }
        </LayoutWrapper>
    )
}

export default Layout