import React from "react"

import Layout from "../components/layout/layout"

import Oferta from "../templates/oferta/oferta"
import Contact from "../templates/universal/contact"

const OfertaPage = () => {
    return (
        <Layout>
            <Oferta />
            <Contact />
        </Layout>
    )
}

export default OfertaPage