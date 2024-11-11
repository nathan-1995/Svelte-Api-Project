// src/routes/product/[id]/+page.ts

export async function load({ params, fetch }) {
    const productId = params.id; // Get the product ID from the URL
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await response.json();

    return {
        product
    };
}
