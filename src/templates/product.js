import React from "react";
import Client from 'shopify-buy';

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
        <div>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <button onClick={checkout}>Buy</button>
        </div>
    )
}

export default ProductTemplate