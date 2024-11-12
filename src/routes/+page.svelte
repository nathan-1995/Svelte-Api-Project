<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { shopStatus } from '../store/shopStatus';
  import { user, fetchUserRole } from '../store/userStore';
  import { supabase } from '../supabaseClient';


  // Product type for API response
  type Product = {
      id: number;
      title: string;
      price: number;
      thumbnail: string;
      rating: number;
      brand: string;
  };

  export let data: { products: Product[], total: number, page: number, limit: number };
  const totalPages = Math.ceil(data.total / data.limit);

  //store the current user role
  let userRole: string | null = null;

  //subscribe to the user store to get the role //Subscribe to shopStatus changes to monitor if the shop is closed.
  user.subscribe((userInfo) => {
    userRole = userInfo?.role || null;
  });

  function goToPage(page: number) {
      window.location.href = `?page=${page}`;
  }

  //Redirect if the shop is closed
  let unsubscribe: () => void;

//onMount is called when the component is mounted to the DOM
  onMount(() => {
    //Fetch user role on mount
    fetchUserRole();

    //unsubscribe is a function to stop listening for changes in shopStatus. 
    unsubscribe = shopStatus.subscribe((status) => {
      if (status === 'Closed') {
        goto('/closed');  //Redirect to the closed page
      }
    });
  });

  onDestroy(() => { //destoryed means the component is removed from the DOM
    if (unsubscribe) unsubscribe();
  });
</script>

<!-- Toggle Login/Logout Button based on user role -->
{#if userRole}
  <button on:click={async () => {
      await supabase.auth.signOut();
      user.set(null);
      userRole = null;
      goto('/login'); // Redirect to login page after logout
  }} style="position: absolute; top: 10px; right: 10px;">
    Logout
  </button>
{:else}
  <button on:click={() => goto('/login')} style="position: absolute; top: 10px; right: 10px;">
    Login
  </button>
{/if}

<!-- Show Cart button if user role is 'user' -->
{#if userRole === 'user'}
  <button on:click={() => goto('/cart')} style="position: absolute; top: 10px; right: 70px;">
    Cart
  </button>
{/if}

{#if $shopStatus === 'Open'}
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
        <a href={`/product/${product.id}`}>View Product</a>
      </li>
    {/each}
  </ul>

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
  <p>The shop is currently closed.</p>
{/if}
