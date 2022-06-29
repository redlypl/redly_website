import React from "react"

import Layout from "../components/layout/layout"

import Blog from "../templates/blog/blog"
import Contact from "../templates/universal/contact"

import { ContactData } from "../templates/universal/contactData"

const BlogPage = () => {
    return (
        <Layout>
            <Blog />
            <Contact content={ ContactData.blog } />
        </Layout>
    )
}

export default BlogPage