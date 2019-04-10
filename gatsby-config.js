module.exports = {
  siteMetadata: {
    title: `Bread and Roses DSA`,
    description: `Bread and Roses DSA is committed to building a democratic socialist world, one that ends the exploitation and oppression that define capitalism and guarantees everyone the right to live freely and creatively.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: "Where We Stand",
        link: "/",
      },
      {
        name: "Tasks for 2019",
        link: "/tasks/",
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#FF1717",
        },
      },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
