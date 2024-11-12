<script lang="ts">
    export let data: { product: { id: number; title: string; description: string; price: number; thumbnail: string; rating: number; brand: string } };

    const { product } = data; //product is the object that contains the product details
</script>

<!-- Display the product details -->
{#if product}
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating} ⭐</p>
    <p>Brand: {product.brand}</p>
    <img src="{product.thumbnail}" alt="{product.title}" width="150" />
{:else}
    <p>Product not found.</p>
{/if}

<!-- Link to go back to the product list -->
<a href="/">Back to Product List</a>
