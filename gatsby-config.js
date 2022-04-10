module.exports = {
  siteMetadata: {
    title: `Curtis Cartier`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "8ce2e7d5dd463052a6895eb28d2457",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "a",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/public/static/fonts/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Sharp-Grotesk, sans-serif"],
          urls: ["./src/fonts/fonts.css"],
        },
      },
    },
  ],
};
