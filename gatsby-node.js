exports.createPages = async function({actions, graphql}) {
    const { data } = await graphql(`
        { allContentfulArtykul {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `
    )

// Create single blog posts

data.allContentfulArtykul.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
        path: "/realizacje/" + slug,
        component: require.resolve(`./src/templates/article/article.js`),
        context: { slug }
    })
})

}