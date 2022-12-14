module.exports = {
  siteMetadata: {
    title: `FIFA World Cup Qatar 2022™ `,
    description: `A simple bootstrap 5 and Sass starter for Gatsby. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@r-ichard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thegroups`,
        path: `${__dirname}/src/pages/thegroups`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `groupA`,
        path: `${__dirname}/src/groupA`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `groupB`,
        path: `${__dirname}/src/groupB`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `groupC`,
        path: `${__dirname}/src/groupC`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `groupD`,
        path: `${__dirname}/src/groupD`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
