module.exports = {
  siteMetadata: {
    title: `Vincent Humeau`,
    description: `Web Developer based in London, UK`,
    author: `@vinceumo`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vincent-humeau`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `hsl(0, 0%, 11%)`,
        theme_color: `hsl(0, 0%, 11%)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/sections`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
  ],
}
