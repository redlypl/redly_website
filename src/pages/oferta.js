import React from "react"

import Layout from "../components/layout/layout"

import Oferta from "../templates/oferta/oferta"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const OfertaPage = () => {
    return (
        <Layout>
            <Oferta />
            <Contact content={ ContactData.oferta } />
        </Layout>
    )
}

export default OfertaPage