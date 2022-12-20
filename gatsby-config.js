/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Blog`,
    description: "Example blog using Gatsby",
  },
    plugins: [
    "gatsby-plugin-mdx",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
        options: {
          name: `My Blog`,
          short_name: `Blog`,
          description: `An example Gatsby blog`,
          start_url: `/`,
          background_color: `#0a68f0`,
          theme_color: `#0a68f0`,
          display: `standalone`,
          icon: `src/images/icon.png`,
        },
      },
      "gatsby-plugin-offline",*/
  ],
}
