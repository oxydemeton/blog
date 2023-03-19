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
    <div class="my-16 w-fit">
    <h2 id="login-register" class="m-0">Login or Register</h2> <br>
    <input type="range" min="0" max="1" step="1" class="w-3/4 m-auto block"
        aria-details="0=login and 1=register" role="switch" aria-checked={login_register > 0}
        aria-labelledby="login-register"
        bind:value={login_register} >
    </div>
    {#if login_register <= 0}
        <LogInEmail/>
    {:else}
        <RegisterEmail></RegisterEmail>
    {/if}
</main>