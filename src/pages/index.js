import React from "react"

import Layout from "../components/layout/layout"

import Hero from "../templates/index/hero"
// import Articles from "../templates/index/articles"
import Realizations from "../templates/index/realizations"
// import Newsletter from "../templates/index/newsletter"
import About from "../templates/index/about"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
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

export default IndexPage