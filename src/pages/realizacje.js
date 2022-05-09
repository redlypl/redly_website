import React from "react"

import Layout from "../components/layout/layout"

import Realizacje from "../templates/realizacje/realizacje"
import Contact from "../templates/universal/contact"

const RealizacjePage = () => {
    return (
        <Layout>
            <Realizacje />
            <Contact />
        </Layout>
    )
}

export default RealizacjePage