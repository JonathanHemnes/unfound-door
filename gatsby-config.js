module.exports = {
    siteMetadata: {
        title: `The Unfound Door`,
        mainEmail: `ely@theunfounddoor.com`,
        mainPageSubText: 'Discover Your Creative Possibilities'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-glamor`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        }
    ]
}
