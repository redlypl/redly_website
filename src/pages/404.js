import React from "react"

import Layout from "../components/layout/layout"

import NotFound from "../templates/404/404"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const NotFoundPage = () => {
    return (
        <Layout>
            <NotFound />
            <Contact content={ ContactData.notfound } />
        </Layout>
    )
}

export default NotFoundPage