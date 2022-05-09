import React from "react"

import Layout from "../components/layout/layout"

import Hero from "../templates/index/hero"
import Articles from "../templates/index/articles"
import Realizations from "../templates/index/realizations"
import Newsletter from "../templates/index/newsletter"
import About from "../templates/index/about"
import Contact from "../templates/universal/contact"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Articles />
      <Realizations />
      <Newsletter />
      <About />
      <Contact />
    </Layout>
  )
}

export default Index