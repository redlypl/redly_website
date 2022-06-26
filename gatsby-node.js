exports.createPages = async function({actions, graphql}) {
    const { data } = await graphql(`
         { allContentfulRealizations {
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

data.allContentfulRealizations.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
        path: "/realizacje/" + slug,
        component: require.resolve(`./src/templates/realizacjeArticle/realizacjeArticle.js`),
        context: { slug }
    })
})

}