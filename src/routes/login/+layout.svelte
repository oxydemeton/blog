<script lang="ts">
    import {currentUser, pb} from "$lib/pocketbase"
    async function logout() {
        pb.authStore.clear();
    }
</script>

<main>
    <h2>Anmelden/Registrieren</h2>
    {#if $currentUser}
        <h3>Bereits Angemeldet</h3>
        <nav>
            <a href="/profile" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">Profil</a>
            <a href="/login" on:click={logout} data-sveltekit-reload>Abmelden</a>
        </nav>
    {:else}
        <nav>
            <a href="/login/email" data-sveltekit-preload-code="eager" data-sveltekit-preload-data="hover" data-sveltekit-keepfocus>Anmelden mit Email/Username</a>
            <a href="/login/register/email" data-sveltekit-preload-code="eager" data-sveltekit-preload-data="hover" data-sveltekit-keepfocus>Registrieren mit Email</a>
        </nav>
        <slot/>
    {/if}
</main>

<style lang="postcss">
    nav {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10%;
        padding-inline: 5%;
    }
    nav > * {
        flex: 1;
        text-align: center;
        border: solid .1em theme(colors.gray.300);
        border-radius: 0.5em;
    }
</style>