import React from "react"

import Layout from "../../components/layout/layout"

import Contact from "../universal/contact"

import { ContactData } from "../universal/contactData"

const RealizacjeArticle = () => {
    return (
        <Layout>
            <Contact content={ ContactData.realizationsArticle } />
        </Layout>
    )
}

export default RealizacjeArticle