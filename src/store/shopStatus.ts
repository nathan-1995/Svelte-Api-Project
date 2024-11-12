import { writable } from 'svelte/store';
import { supabase } from '../supabaseClient';

export const shopStatus = writable<'Open' | 'Closed'>('Open');
let shopStatusId: string | null = null;

async function fetchShopStatus() {
    const { data, error } = await supabase
        .from('shop_status')
        .select('id, status')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        console.error('Error fetching shop status:', error);
    } else {
        shopStatusId = data?.id || null;
        shopStatus.set(data?.status || 'Open');

        // Set up the real-time listener after fetching the initial status
        setupRealtimeListener();
    }
}

// Set up a real-time listener for shop status updates
function setupRealtimeListener() {
    if (!shopStatusId) return;

    supabase
        .channel('shop_status_updates')
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'shop_status', filter: `id=eq.${shopStatusId}` },
            (payload) => {
                const updatedStatus = payload.new.status;
                shopStatus.set(updatedStatus);
            }
        )
        .subscribe();
}

// Fetch the initial shop status
fetchShopStatus();
