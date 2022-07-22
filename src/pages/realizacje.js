import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"

import Realizacje from "../templates/realizacje/realizacje"

import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const RealizacjePage = ({
        pageContext: { kategoriaRealizacji },
        data
    }) => {

    let querySwitcherCat = null
    if ( kategoriaRealizacji === null ) {
        querySwitcherCat = null
    } else {
        querySwitcherCat = data.allContentfulRealizacje.edges
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
    query ($kategoriaRealizacji: String) {
        allContentfulRealizacje(
            sort: {order: DESC, fields: liczbaPorzdkowaRealizacji}
            filter: {kategoriaRealizacji: {eq: $kategoriaRealizacji}}
        ) {
            edges {
                node {
                    liczbaPorzdkowaRealizacji
                    createdAt(formatString: "DD-MM-YYYY")
                    nazwaKlienta
                    slug
                    kategoriaRealizacji
                    banerProjektu {
                        url
                    }
                }
            }
            distinct(field: kategoriaRealizacji)
        }
    }
`

export default RealizacjePage