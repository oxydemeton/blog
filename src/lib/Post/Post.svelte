<script lang="ts">
    import type {Post, User} from "$lib/DbInterfaces"
    import Date from "$lib/Date.svelte";
    import CopyText from "$lib/Components/CopyText.svelte"
    export let post: Post;
</script>

<article class="max-h-[40vh] overflow-y-auto mx-2 my-12 p-4 shadow-md">
    <div>
        <h3 class="text-3xl my-0"><a href={"/post/" + post.id} data-sveltekit-preload-code="viewport" data-sveltekit-preload-data="hover">{post.title}</a></h3><br>
        <div>
            <div class="italic">Author: <a href={'/profile/'+post.creator} data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">{post.creatorExtend?.username}</a></div>
            <div>Veröffentlicht: <Date date={post.created} lang="de"/></div>
        </div>
    </div>
    <div class="more-post-content isolate my-1">
        {@html post.content}
    </div>
    <div class="text-sm font-light italic">Article Id: <CopyText txt={post.id}/></div>
</article>

<style lang="postcss">
    article {
        border-top: .1rem dotted theme(colors.accent-dark-sm);
        border-bottom: .1rem solid theme(colors.accent-dark-sm);
    }
    @media(prefers-color-scheme: dark) {
        article {
            border-top: .1rem dotted theme(colors.accent-light-sm);
            border-bottom: .1rem solid theme(colors.accent-light-sm);
        }
    }
    a {
        text-decoration: none;
    }
    .more-post-content {
        margin: 1rem;
    }
    :global(.more-post-content h1) {
        font-size: theme(fontSize.xl);
        font-weight: theme(fontWeight.black);
        margin-block: 1.5rem;
    }
    :global(.more-post-content h2) {
        font-size: theme(fontSize.lg);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.more-post-content h3) {
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.more-post-content h4) {
        font-size: theme(fontSize.base);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.more-post-content h5) {
        font-size: theme(fontSize.base);
        font-weight: theme(fontWeight.bold);
        margin-block: 1.2rem;
    }
    :global(.more-post-content h6) {
        font-size: theme(fontSize.sm);
        font-weight: theme(fontWeight.bold);
        margin-block: 1.2rem;
    }
    :global(.more-post-content *) {
        font-size: theme(fontSize.sm);
    }
</style>