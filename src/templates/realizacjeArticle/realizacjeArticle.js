import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout/layout"
import ArticleContentWrapper from "../../components/article-content-wrapper/article-content-wrapper"
import Contact from "../universal/contact"
import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"

import { ContactData } from "../universal/contactData"

const RealizacjeArticle = ({ data }) => {
    const bodyArticle = data.contentfulRealizacje

    return (
        <Layout>
            <Helmet>
                <title>Realizacja {data.contentfulRealizacje.nazwaKlienta} | Agencja Reklamowa - Redly</title>
            </Helmet>
            <ArticleContentWrapper contentGraph={bodyArticle}/>
            <SocialMediaInset />
            <Contact content={ ContactData.realizationsArticle } />
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String) {
        contentfulRealizacje(slug: {eq: $slug}) {
            liczbaPorzdkowaRealizacji
            createdAt(formatString: "DD.MM.YYYY")
            nazwaKlienta
            slug
            kategoriaRealizacji
            kanaly
            uslugi
            opis {
                opis
            }
            logotypKlienta {
                url
            }
            banerProjektu {
                url
            }
            kilkaSlow {
                kilkaSlow
            }
            banerKlient {
                url
            }
            banerWstep {
                url
            }
            wyzwanie {
                wyzwanie
            }
            rozwizanie {
                rozwizanie
            }
            efekty {
                url
            }
            opinia {
                opinia
            }
            imieNazwisko
            stanowisko
        }
    }
`

export default RealizacjeArticle