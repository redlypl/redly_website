import React from "react"

import Layout from "../components/layout/layout"

import Realizacje from "../templates/realizacje/realizacje"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const RealizacjePage = () => {
    return (
        <Layout>
            <Realizacje />
            <Contact content={ ContactData.realizacje } />
        </Layout>
    )
}

export default RealizacjePage