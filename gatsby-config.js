/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site-2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
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
    __key: "pages",
    
  },
  // {
  //   resolve: 'gatsby-source-remote-file',
  //   options: {
  //     url: 'https://superloop-cms1.rokt.dev/slp-api/static-file/1-residential.json',
  //     name: 'residential-landing',
  //   },
  // },
  // {
  //   resolve: 'gatsby-source-remote-file',
  //   options: {
  //     url: 'https://superloop-cms1.rokt.dev/slp-api/static-file/2-residential.json',
  //     name: 'residential-nbn',
  //   },
  // },
  {
    resolve: '@directus/gatsby-source-directus',
    options: {
      url: process.env.DIRECTUS_URL, // Fill with your Directus instance address
      auth: {
        // token: 'my_secret_token', // You can use a static token from an user

        // Or you can use the credentials of an user
        email: process.env.DIRECTUS_USER,
        password: process.env.DIRECTUS_PASSWORD,
      },
    },
  }
  ]
};