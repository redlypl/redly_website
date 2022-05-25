import React from "react"

import Layout from "../components/layout/layout"

import Contact from "../templates/universal/contact"
import { ContactData } from "../templates/universal/contactData"

const KontaktPage = () => {
    return (
        <Layout>
            <Contact isIndex= { true } content={ ContactData.kontakt } />
        </Layout>
    )
}

export default KontaktPage