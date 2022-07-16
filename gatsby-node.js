//==============
//the whole function to create a new page for all realizations
//==============
exports.createPages = async function({actions, graphql}) {

    //==============
    //import all slugs and categories
    //==============
    const { data } = await graphql(`
        { allContentfulRealizacje {
                edges {
                    node {
                        slug
                        kategoriaRealizacji
                    }
                }
            }
        }
    `
    )

    //==============
    // Create single blog posts
    //==============
    data.allContentfulRealizacje.edges.forEach(edge => {
        const slug = edge.node.slug
        actions.createPage({
            path: "/realizacje/" + slug,
            component: require.resolve(`./src/templates/realizacjeArticle/realizacjeArticle.js`),
            context: { slug }
        })
    })

    //==============
    // Convert any string format to snake case format URL link friendly
    //==============
    function camelToUnderscore(key) {
        var result = key.replace( /([A-Z])/g, "$1" );
        return result.split(' ').join('_').toLowerCase();
    }

    //==============
    // Create a whole category lists pages
    //==============
    data.allContentfulRealizacje.edges.forEach(edge => {
        const category = edge.node.kategoriaRealizacji
        actions.createPage({
            path: "/realizacje/kategoria/" + `${camelToUnderscore(category)}`,
            component: require.resolve(`./src/pages/realizacje.js`),
            context: { category }
        })
    })
}