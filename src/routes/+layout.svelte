<script>
    import "../base.postcss";
    import "../color-scheme.css";
    import "../app.postcss";
    
    import {currentUser, pb} from "../lib/pocketbase"
	import { onDestroy } from "svelte";

    onDestroy(()=> {
        pb.authStore.clear();
    })
    let refresh = {};
</script>

<style lang="postcss">
    a {
        @apply mx-1 p-1;
    }
</style>

<header class="mb-8 pb-4 border-b-4 shadow-xl grid grid-cols-1 xl:grid-cols-2 items-center">
    <h1 class="text-2xl inline text-center"><a class="no-underline" href="/" aria-label="Homepage">Mabla's Meinung</a></h1>
    <nav class="flex align-middle justify-center flex-wrap shrink-0">
        <a href="/archive">Archive</a>
        <a href="/projects">Projects</a>
        <form class="mx-2 p-1 rounded-md flex flex-nowrap
            hover:outline outline-accent-light-sm
                    dark:outline-accent-dark-sm"
                rel="search" action="/search" method="get" on:submit={()=>refresh={}}
                role="search">
            <input type="search" placeholder="search blog" name="search"/>
            <button type="submit" class="font-bold">Search</button>
        </form>
        {#if $currentUser}
            <div>
                <a href="/profile" aria-label="Profile">{$currentUser.username}</a>
                <button type="button" on:click={()=>pb.authStore.clear()} aria-label="Logout" class="font-medium text-base">Logout</button>
            </div>
        {:else}
            <a href="/login" aria-label="Login">Login</a>
        {/if}
    </nav>
    
</header>
{#key refresh}
<slot />
{/key}
<footer>

</footer>