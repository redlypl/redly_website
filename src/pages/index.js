import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"

import Hero from "../templates/index/hero"
// import Articles from "../templates/index/articles"
import Realizations from "../templates/index/realizations"
// import Newsletter from "../templates/index/newsletter"
import About from "../templates/index/about"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero
        SculptureImageProps={data.sculpture.childImageSharp.fluid.srcWebp}
        SculptureDecoXImageProps={data.sculptureDecoX.childImageSharp.fluid.srcWebp}
        GradientCircle={data.gradientCircle.childImageSharp.fluid.srcWebp}
      />
      {/* <Articles /> enable when articles be avaible and ready to launch */}
      <Realizations />
      {/* <Newsletter /> enable when newsletter be avaible and ready to launch */}
      <About />
      <Contact
        isIndex={ true }
        content={ ContactData.index }

      />
    </Layout>
  )
}

export const query = graphql`
query images {
    sculpture: file(relativePath: {eq: "heroImg/sculpture.png"}) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    sculptureDecoX: file(relativePath: {eq: "heroImg/sculptureDecoX.png"}) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    gradientCircle: file(relativePath: {eq: "gradientCircle.png"}) {
      childImageSharp {
        fluid(quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage