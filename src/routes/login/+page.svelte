<script>
	import LogInEmail from "./LogInEmail.svelte";
    import {currentUser, pb} from "../../lib/pocketbase"
	import RegisterEmail from "./RegisterEmail.svelte";
    let login_register = 0;
    const toggle_login_register = () => {
        if (login_register <= 0) {
            login_register = 1
        }else {
            login_register = 0
        }
    }
    async function logout() {
        pb.authStore.clear();
    }
</script>

<main>
    {#if $currentUser}
        <div class="my-12">
            <h3 class="my-4">Already logged in</h3>
            <button on:click={logout} class="font-medium text-lg">Logout</button>
            <a href="/profile" class="text-inherit decoration-inherit font-medium text-lg">Zum Profil</a>
            <hr>
        </div>
    {/if}
    <label for="login-register" class="font-bold text-lg">Login or register</label> <br>
    <input type="range" min="0" max="1" step="1" class="w-36" id="login-register"
        aria-details="0=login and 1=register" role="switch" aria-checked={login_register > 0}
        bind:value={login_register} >
    
    {#if login_register <= 0}
        <LogInEmail/>
    {:else}
        <RegisterEmail></RegisterEmail>
    {/if}
</main>