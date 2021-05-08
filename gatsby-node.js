const path = require(`path`);

exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const shopifyProducts = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
              localFile {
                childImageSharp {
                gatsbyImageData(
                 height: 400
                 placeholder: BLURRED
                 formats: [AUTO, WEBP, AVIF]
                 )
                }
              }
            }
            shopifyId
            handle
            description
            availableForSale
            variants {
                id
                price
                shopifyId
                title
                sku
              }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  shopifyProducts.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/trees/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })

  // Prismic pages

  const content = await graphql(`
    query {
      allPrismicGeneralContent {
        nodes {
          data {
            body {
              raw
            }
          }
          uid
        }
      }
    }
  `)

  content.data.allPrismicGeneralContent.nodes.forEach(page => {

    createPage({
      path: `/${page.uid}`,
      component: path.resolve(`./src/templates/content.js`),
      context: { ...page }
    })
  })

}