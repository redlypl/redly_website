import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../../components/layout/layout"
import ArticleContentWrapper from "../../components/article-content-wrapper/article-content-wrapper"
import Contact from "../universal/contact"
import SocialMediaInset from "../../components/socialMediaInset/socialMediaInset"

import { ContactData } from "../universal/contactData"
import { articleOptions } from "./richTextOptions"

const RealizacjeArticle = ({ data }) => {
    const bodyArticle = data.contentfulRealizations.body

    return (
        <Layout>

            <ArticleContentWrapper />




            {/* <h1>{data.contentfulRealizations.title}</h1>
            <div>
                {
                    renderRichText(bodyArticle, articleOptions)
                }
            </div> */}
            <SocialMediaInset />
            <Contact content={ ContactData.realizationsArticle } />
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String) {
        contentfulRealizations(slug: {eq: $slug}) {
            title
            category
            createdAt(formatString: "DD-MM-YYYY")
            number
            poster {
                resize(format: JPG, height: 10, width: 10) {
                    src
                }
            }
            body {
                raw
                references {
                    url
                }
            }
        }
    }
`

export default RealizacjeArticle