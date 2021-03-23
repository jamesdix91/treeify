module.exports = {
  siteMetadata: {
    title: "Treeify",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "tree-well",
        accessToken: "fdb9cbd04611b0956fafc414485cec82",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
  ],
};
