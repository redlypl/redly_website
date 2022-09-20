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
    title: `Redly - Agencja Kreatywna`,
    siteUrl: `https://www.redly.pl`
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-8NN2HBELV0", // Google Analytics / GA
         // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
         // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  {
    resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "spaceId": `${process.env.CONTENTFUL_SPACE_ID}`
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": `./src/images/favicons/icon.png`,
      "icons": [
        {
          src: `./src/images/favicons/icon-48x48.png`,
          sizes: `48x48`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-72x72.png`,
          sizes: `72x72`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-96x96.png`,
          sizes: `96x96`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-144x144.png`,
          sizes: `144x144`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-256x256.png`,
          sizes: `256x256`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-384x384.png`,
          sizes: `384x384`,
          type: `image/png`,
          purpose: "any"
        },
        {
          src: `./src/images/favicons/icon-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
          purpose: "any"
        },
      ],
      "name": "Redly - Agencja Kreatywna",
      "short_name": `Agencja Kreatywna z nowoczesnym podejściem do marketingu`,
      "description": 'Jesteśmy agencją kreatywną z nowoczesnym spojrzeniem na marketing. Nasze założenia są bardzo proste - Ty zajmiesz się tym na czym najbardziej się znasz, a my sprawimy że odpowiednie osoby dowiedzą się o twojej działalności.',
      "orientation": 'any',
      "start_url": `/`,
      "scope": ".",
      "background_color": `#fff`,
      "theme_color": `#fff`,
      "display": `standalone`,
    }
  }, 'gatsby-plugin-offline',
  "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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