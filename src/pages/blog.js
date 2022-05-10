import React from "react"

import Layout from "../components/layout/layout"

import Blog from "../templates/blog/blog"
import Contact from "../templates/universal/contact"

const BlogPage = () => {
    return (
        <Layout>
            <Blog />
            <Contact />
        </Layout>
    )
}

export default BlogPage