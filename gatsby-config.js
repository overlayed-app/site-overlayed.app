module.exports = {
  siteMetadata: {
    title: `Overlayed - Overlays for broadcasters.`,
    description: `A simple platform for customizable broadcaster overlays.`,
    author: `@bengreenier`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `overlayed.app`,
        short_name: `Overlayed`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#071435`,
        display: `minimal-ui`,
        icon: `src/images/overlayed-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://app.us4.list-manage.com/subscribe/post?u=a807d5f2a6f795b71179ceac6&amp;id=998558970e",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
