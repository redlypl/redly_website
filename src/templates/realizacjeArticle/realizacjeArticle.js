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
                <title>Realizacja {data.contentfulRealizacje.nazwaKlienta} | Agencja Kreatywna - Redly</title>
                <meta
                    name="description"
                    content={data.contentfulRealizacje.opis.opis}
                />
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
                resize(format: WEBP, height: 1000) {
                    src
                }
            }
            banerProjektu {
                resize(format: WEBP, height: 1000) {
                    src
                }
            }
            kilkaSlow {
                kilkaSlow
            }
            banerKlient {
                resize(format: WEBP, height: 1000) {
                    src
                }
            }
            banerWstep {
                resize(format: WEBP, height: 1000) {
                    src
                }
            }
            wyzwanie {
                wyzwanie
            }
            rozwizanie {
                rozwizanie
            }
            efekty {
                resize(format: WEBP, height: 1000) {
                    src
                }
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