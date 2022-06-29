import React from "react"

import Layout from "../components/layout/layout"

import ONas from "../templates/o-nas/o-nas"
import Contact from "../templates/universal/contact"
import { ContactData } from "../templates/universal/contactData"

const ONasPage = () => {
    return (
        <Layout>
            <ONas />
            <Contact content={ ContactData.onas } />
        </Layout>
    )
}

export default ONasPage