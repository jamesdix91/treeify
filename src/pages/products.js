import React from "react"
import { Link, graphql } from "gatsby"

//import Layout from "../components/layout"

const ProductsPage = ({ data }) => {
  return (
      <main>
        <h1>Products</h1>
        <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
            <li key={node.shopifyId}>
            <h3>
                <Link to={`/products/${node.handle}`}>{node.title}</Link>
                {" - "}${node.priceRange.minVariantPrice.amount}
            </h3>
            <p>{node.description}</p>
            </li>
        ))}
        </ul>
    </main>
  )
}

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          variants {
            id
            price
            shopifyId
            title
            sku
          }
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`