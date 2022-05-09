import React from "react"

import Layout from "../components/layout/layout"

import ONas from "../templates/o-nas/o-nas"
import Contact from "../templates/universal/contact"

const ONasPage = () => {
    return (
        <Layout>
            <ONas />
            <Contact />
        </Layout>
    )
}

export default ONasPage