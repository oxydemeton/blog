<script lang="ts">
    import type {Post} from "$lib/DbInterfaces"
    export let post: Post;
</script>

<article>
    <h3 class="text-3xl mb-4">{post.title}</h3>
    <div class="latest-post-content isolate">
        {@html post.content}
    </div>
</article>

<style lang="postcss">
    .latest-post-content {
        margin: 1rem;
    }
    :global(.latest-post-content h1) {
        font-size: theme(fontSize.2xl);
        font-weight: theme(fontWeight.black);
        margin-block: 1.5rem;
    }
    :global(.latest-post-content h2) {
        font-size: theme(fontSize.xl);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.latest-post-content h3) {
        font-size: theme(fontSize.lg);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.latest-post-content h4) {
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.extrabold);
        margin-block: 1.5rem;
    }
    :global(.latest-post-content h5) {
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.bold);
        margin-block: 1.2rem;
    }
    :global(.latest-post-content h6) {
        font-size: theme(fontSize.base);
        font-weight: theme(fontWeight.bold);
        margin-block: 1.2rem;
    }
</style>