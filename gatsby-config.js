require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// let URL;
// if (process.env.NODE_ENV === 'production') {
//   URL = 'https://gatbsy-ecommerce-demo.netlify.com';
// } else {
//   URL = 'localhost:8000';
// }


module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl:'http://localhost:8000',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
       spaceId: "3w5kflo1riht",
       accessToken: "wIpdAYI35OOWUHtD2plHXM3ttteqsm0bzZIjVtK65r4",
       },
    },
  // {
  //   resolve: 'gatsby-plugin-snipcart',
  //   options: {
  //     apiKey: process.env.SNIPCART_API,
  //     autopop: true,
  //     js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
  //     styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css',
  //   },
  // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
