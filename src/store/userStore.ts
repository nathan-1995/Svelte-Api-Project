import { writable } from 'svelte/store';
import { supabase } from '../supabaseClient';

type UserRole = {
  role: string | null;
};

// Initialize the `user` store with a default structure
export const user = writable<UserRole | null>({ role: null });

export async function fetchUserRole() {
  const userResponse = await supabase.auth.getUser();

  // Check if user data is available
  if (userResponse.data && userResponse.data.user) {
    const userId = userResponse.data.user.id;

    // Fetch the role from the 'users' table
    const { data: userRoleData } = await supabase
      .from('users')
      .select('role')
      .eq('auth_uid', userId)
      .single();

    user.set({ role: userRoleData?.role || 'user' }); // If `role` is null, default to 'user'
  } else {
    user.set({ role: null }); // Set user to null if no user data is found
  }
}
