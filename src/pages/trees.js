import React from "react";
import { Link, graphql } from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Layout from '../components/layout.js';
import * as styles from '../styles/trees.module.scss';


const ProductsPage = ({ data }) => {

  return (
      <Layout>
        <div className={`page-width ${styles.trees}`}>
          <h1>The Trees</h1>
          <section className={styles.productGrid}>
            {data.allShopifyProduct.edges.map(({ node }) => (
                <div key={node.shopifyId} className={styles.productCard}>
                  <Link to={`/trees/${node.handle}`}>
                    <figure className={styles.figure}>
                    <GatsbyImage loading="eager" height="200" image={getImage(node.images[0].localFile)} alt={node.title}/>
                    </figure>
                    <figcaption className={styles.figcaption}>
                      <span>{node.title}</span>
                      <span>£{node.priceRange.minVariantPrice.amount}</span>
                    </figcaption>
                  </Link>
                </div>
            ))}
          </section>
        </div>
    </Layout>
  )
}

export default ProductsPage

export const query = graphql`
{
  allShopifyProduct {
    edges {
      node {
        title
        shopifyId
        priceRange {
          maxVariantPrice {
            currencyCode
            amount
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images {
          originalSrc
          localFile {
            childImageSharp {
						gatsbyImageData(
             height: 200
             placeholder: BLURRED
             formats: [AUTO, WEBP, AVIF]
       			)
            }
          }
        }
        handle
      }
    }
  }
}
`