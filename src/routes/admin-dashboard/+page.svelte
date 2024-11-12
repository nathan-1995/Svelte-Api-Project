<script lang="ts">
    import { shopStatus } from '../../store/shopStatus';
    import { supabase } from '../../supabaseClient';
    import { onMount } from 'svelte';
  
    let currentStatus: 'Open' | 'Closed' = 'Open'; //Default to 'Open'
  
    // get the current shop status db
    onMount(async () => {
      const { data, error } = await supabase
        .from('shop_status')
        .select('status')
        .limit(1)
        .single();
  
      if (error) {
        console.error('Error fetching shop status:', error.message);
      } else if (data) {
        currentStatus = data.status;
        shopStatus.set(currentStatus); //update home with returned status
      }
    });
  
    //btn function to toggle the shop status
    async function toggleShopStatus() {
      const newStatus = currentStatus === 'Open' ? 'Closed' : 'Open';
      
      //update db with the new status
      const { error } = await supabase
        .from('shop_status')
        .update({ status: newStatus })
        .eq('id', '1191e090-4bad-4286-9877-fcaf1c28ae16'); //row id in `shop_status` table
      
      if (error) {
        console.error('Error updating shop status:', error.message);
      } else {
        currentStatus = newStatus;
        shopStatus.set(newStatus); //changing the value of shopstatus the Svelte store
      }
    }
  </script>
  
  <h1>Admin Dashboard</h1>
  <p>Current Shop Status: {currentStatus}</p>
  <button on:click={toggleShopStatus}>
    {currentStatus === 'Open' ? 'Close Shop' : 'Open Shop'}
  </button>
  
  <style>
    button {
      padding: 8px 16px;
      font-size: 1rem;
      margin-top: 10px;
    }
  </style>
  