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
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })

  // Contentful pages

const content = await graphql(`
  query {
    allContentfulSimpleContent {
      edges {
        node {
          bodyRichText {
            raw
            references {
              ... on ContentfulAsset {
                 contentful_id
                 fluid {
                  src
                }
              }
            }
          }
          title
          slug
        }
      }
    }
  }
`)

  content.data.allContentfulSimpleContent.edges.forEach(({ node }) => {

    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/content.js`),
      context: node
    })

  })



}