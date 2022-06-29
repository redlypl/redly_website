import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"

import Realizacje from "../templates/realizacje/realizacje"

import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const RealizacjePage = ({
    pageContext: { category },
    data
}) => {

    let querySwitcherCat = null
    if ( category === null ) {
        querySwitcherCat = null
    } else {
        querySwitcherCat = data.allContentfulRealizations.edges
    }

    return (
        <Layout>
            <Realizacje
                titleFilteredByCategory={querySwitcherCat}
            />
            <Contact content={ ContactData.realizacje } />
        </Layout>
    )
}

export const query = graphql`
    query ($category: String) {
        allContentfulRealizations(
        sort: {order: DESC, fields: number}
        filter: {category: {eq: $category}}
        ) {
            edges {
                node {
                    id
                    number
                    title
                    slug
                    category
                    createdAt(formatString: "DD-MM-YYYY")
                    thumbnail {
                        resize(width: 720, height: 320, format: JPG) {
                            src
                        }
                    }
                }
            }
            distinct(field: category)
        }
    }
`

export default RealizacjePage