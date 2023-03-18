<script>
    import "../app.postcss";
    import "../color-scheme.css";
    import "../base.postcss";
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
    <h1 class="text-2xl inline text-center"><a class="no-underline" href="/">Mabla's Meinung</a></h1>
    <nav class="flex align-middle justify-center flex-wrap-reverse shrink-0">
        <a href="/archive">Archive</a>
        <a href="/projects">Projects</a>
        <form class="mx-2 p-1 rounded-md flex flex-nowrap
            hover:outline outline-accent-light-sm
                    dark:outline-accent-dark-sm"
                rel="search" action="/search" method="get" on:submit={()=>refresh={}}>
            <input type="search" placeholder="search blog" name="search"/>
            <button type="submit" class="font-bold">Search</button>
        </form>
    </nav>
    {#if $currentUser}
        {$currentUser.username}
    {/if}
</header>
{#key refresh}
<slot />
{/key}
<footer>

</footer>