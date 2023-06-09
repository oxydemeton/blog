<script lang="ts">
    import {currentUser, pb} from "$lib/pocketbase"
    import GoogleSignIn from "$lib/icons/GoogleSignIn.svelte";
    async function logout() {
        pb.authStore.clear();
    }
</script>

<main>
    <h2>Anmelden/Registrieren</h2>
    
        {#if $currentUser}
            <h3>Bereits Angemeldet</h3>
            <div class="nav-wrapper">
                <nav>
                    <a href="/profile" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">Profil</a>
                    <a href="/login" on:click={logout} data-sveltekit-reload>Abmelden</a>
                </nav>
            </div>
        {:else}
            <div class="nav-wrapper">
                <nav>
                    <a href="/login/email" data-sveltekit-preload-code="eager" data-sveltekit-preload-data="hover" data-sveltekit-keepfocus>Anmelden mit Email/Username</a>
                    <a href="/login/register/email" data-sveltekit-preload-code="eager" data-sveltekit-preload-data="hover" data-sveltekit-keepfocus>Registrieren mit Email</a>
                    <GoogleSignIn width="25%" href="/login/register/google"/>
                </nav>
            </div>
            <slot/>
        {/if}
</main>

<style lang="postcss">
    h2 {
        text-align: center;
    }
    a {
        padding: .11em;
    }
    .nav-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
    nav {
        font-size: theme(fontSize.md);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    nav > * {
        text-align: center;
        align-self: center;
        width: fit-content;
        border: solid .1em theme(colors.gray.300);
        border-radius: 0.5em;
        margin: 0.5em;
    }
</style>

<svelte:head>
    <title>Login</title>
</svelte:head>