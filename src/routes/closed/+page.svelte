<script lang="ts">
    import { shopStatus } from '../../store/shopStatus';
    import { goto } from '$app/navigation';
  
    //listewn for shop status changes
    $: if ($shopStatus === 'Open') {
      goto('/'); //redirect to home page if shop is open
    }
  </script>
  
  <h1>Shop Closed</h1>
  <p>We're sorry, but the shop is currently closed. Please check back later.</p>
  