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
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-74121258-1",
            },
        }
    ]
}
