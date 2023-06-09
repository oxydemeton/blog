<script lang="ts">
	import { page } from '$app/stores';
    import PostList from '$lib/Post/PostList.svelte';
    import PageSelector from './PageSelector.svelte';
    export let data
    
</script>

<main>
    <h2>Alle Posts</h2>
    <PageSelector max_page={data.pages_count} current_page={data.page}/>
    <details>
        <summary>Filter</summary>
        <fieldset>
            Work in Progress
        </fieldset>
    </details>
    
    <PostList posts={data.posts}/>
</main>

<style lang="postcss">
    summary {
        font-size: var(--ft-size-lg);
        font-weight: theme(fontWeight.semibold);
    }
    .page-count {
        font-style: italic;
        font-size: var(--ft-size-sm);
    }
</style>

<svelte:head>
    <title>Archive</title>
</svelte:head>