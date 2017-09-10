module.exports = {
  siteMetadata: {
    title: `The Unfound Door`,
    mainEmail: `ely@theunfounddoor.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    }
  ]
}