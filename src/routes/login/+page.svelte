<script lang="ts">
  import { supabase } from '../../supabaseClient';
  import { fetchUserRole } from '../../store/userStore';
  import { user } from '../../store/userStore';
  import { goto } from '$app/navigation';

  let email: string = '';
  let password: string = '';
  let errorMessage: string | null = null;

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      errorMessage = 'Error logging in: ' + error.message;
    } else {
      await fetchUserRole(); // Fetch user role after login
      user.subscribe(userInfo => {
        if (userInfo?.role === 'admin') {  // Accessing role correctly
          goto('/admin-dashboard');  // Redirect to admin dashboard if role is 'admin'
        } else if (userInfo?.role === 'user') {
          goto('/');  // Redirect to homepage if role is 'user'
        }
      });
    }
  }
</script>

<div>
  <h2>Login</h2>
  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}
  <form on:submit|preventDefault={handleLogin}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Log In</button>
  </form>
</div>
