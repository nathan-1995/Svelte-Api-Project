<script lang="ts">
    import { onMount } from 'svelte';

    // Define the type of each product
    type Product = {
      id: number;
      title: string;
      price: number;
      thumbnail: string;
      rating: number;
      brand: string;
    };
  
    export let data: { products: Product[], total: number, page: number, limit: number }; // Data from the server
    
    const totalPages = Math.ceil(data.total / data.limit); // Calculate total pages

    let shopStatus: 'Open' | 'Closed' = 'Open'; // Default to "Open"
    
    function toggleShop() {
        shopStatus = shopStatus === 'Open' ? 'Closed' : 'Open';
    }

    function goToPage(page: number) {
        window.location.href = `?page=${page}`;
    }

    // Redirect if the shop is closed
    onMount(() => {
        if (shopStatus === 'Closed') {
            window.location.href = '/closed';
        }
    });
</script>

<!-- Toggle Button -->
<button on:click={toggleShop}>
    {shopStatus === 'Open' ? 'Close Shop' : 'Open Shop'}
</button>

{#if shopStatus === 'Open'}
  <!-- Product List -->
  <h1>Product List</h1>
  <ul>
    {#each data.products as product}
      <li>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating} ⭐</p>
        <p>Brand: {product.brand}</p>
        <img src="{product.thumbnail}" alt="{product.title}" width="100" />
        <!-- View Product Button -->
        <a href={`/product/${product.id}`}>View Product</a>
      </li>
    {/each}
  </ul>

  <!-- Pagination Controls -->
  <div>
    {#if data.page > 1}
      <button on:click={() => goToPage(data.page - 1)}>Previous</button>
    {/if}

    <span>Page {data.page} of {totalPages}</span>

    {#if data.page < totalPages}
      <button on:click={() => goToPage(data.page + 1)}>Next</button>
    {/if}
  </div>
{:else}
  <!-- If shop is closed, redirect to /closed route -->
  <script>
    window.location.href = '/closed';
  </script>
{/if}
