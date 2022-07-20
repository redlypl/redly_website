if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.prod`
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
  })
}

module.exports = {
  siteMetadata: {
    title: `Redly - Agencja Reklamowa`,
    siteUrl: `https://www.redly.pl`
  },
  plugins: [{
    resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    resolve: 'gatsby-source-contentful',
    options: {
      // "accessToken": `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      // "spaceId": `${process.env.CONTENTFUL_SPACE_ID}`
      "accessToken": `UmEaUAQ-sbH8ZONRvbgFSf8rdGT1kq6wDDU6guB4CsQ`,
      "spaceId": `jqub8nvgwkb4`
    }
  }, "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-8NN2HBELV0"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png",
      "name": "Redly - Agencja Reklamowa",
      "short_name": `Agencja Reklamowa z nowoczesnym podejściem do marketingu`,
      "start_url": `/`,
      //"background_color": `#f7f0eb`,
      //"theme_color": `#a2466c`,
      "display": `standalone`,
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};