import React from "react"

import Layout from "../components/layout/layout"

import NotFound from "../templates/404/404"
import Contact from "../templates/universal/contact"

const NotFoundPage = () => {
    return (
        <Layout>
            <NotFound />
            <Contact />
        </Layout>
    )
}

export default NotFoundPage