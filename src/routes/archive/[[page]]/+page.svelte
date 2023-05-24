<script lang="ts">
	import { page } from '$app/stores';
    import PostList from '$lib/Post/PostList.svelte';
    import PageSelector from './PageSelector.svelte';
    export let data
    
    $: next_url = () => {
        const url = new URL($page.url)
        if($page.url.pathname == "/archive") url.pathname += "/2"
        else url.pathname = url.pathname.replace(/\/\d+$/, `/${data.page + 1}`)
        return url;
    }
    $: prev_url = () => {
        const url = new URL($page.url)
        if($page.url.pathname == "/archive") url.pathname += "/1"
        else if (data.page == 1) url.pathname = url.pathname.replace(/\/\d+$/, `/${data.page}`)
        else url.pathname = url.pathname.replace(/\/\d+$/, `/${data.page - 1}`)
        return url;
    }
</script>

<main>
    <h2>Alle Posts</h2>
    <PageSelector current_page={data.page} next={next_url()} prev={prev_url()}/>
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