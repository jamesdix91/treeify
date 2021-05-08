import React from "react";
import Client from 'shopify-buy';
import Layout from '../components/layout.js';
import * as styles from '../styles/product.module.scss';
import {GatsbyImage, getImage} from "gatsby-plugin-image";


const ProductTemplate = ({ pageContext }) => {

    const { product } = pageContext;

    const checkout = async () => {
        
        // build client
        const client = Client.buildClient({
            storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
            domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`
        })

        // create a checkout
        const checkout = await client.checkout.create()

        // create an array of line items
        console.log(product)
        const variantId = product.variants[0].shopifyId
        const lineItemsToAdd = [{ variantId, quantity: 1 }]

        console.log(`variantId: ${variantId}`)
        
        // add line items to the checkout
        const checkoutId = checkout.id
        const newCheckout = await client.checkout.addLineItems(
            checkoutId,
            lineItemsToAdd
        )
        
        // go to checkout page
        window.open(checkout.webUrl)
    }

    return (
        <Layout>
            <section className={`${styles.imagery}`}>
                <div className={styles.primary}>
                    <GatsbyImage width={400} image={getImage(product.images[0].localFile)} alt={product.title}/>
                </div>
                <div className={styles.alternative}>
                    {product.images.map(img => 
                        <GatsbyImage loading="eager" height={100} image={getImage(img.localFile)} alt={product.title}/>
                    )}
                </div>
                
            </section>
            <section className={`${styles.info}`}>
                <h1>{product.title}</h1>
                <p className={styles.price}>£{parseFloat(product.priceRange.maxVariantPrice.amount).toFixed(2)}</p>
                <p>Tax Included</p>
                <button class={styles.addToCart} onClick={checkout}>Add to Cart</button>
                <div class={styles.description}>{product.description}</div>
            </section>

        </Layout>
    )
}

export default ProductTemplate