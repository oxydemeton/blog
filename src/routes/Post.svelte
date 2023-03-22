<script lang="ts">
    import type {Post, User} from "$lib/DbInterfaces"
    export let post: Post;
    let creator: User;
</script>

<article class="max-h-[40vh] overflow-y-auto mx-6">
    <div class="my-4">
        <h3 class="text-3xl my-0"><a href={"/post/" + post.id}>{post.title}</a></h3><br>
        <span class="italic">Author: <a href={'/profile/'+post.creator}>{post.creatorExtend?.username}</a></span>
    </div>
    <div class="more-post-content isolate">
        {@html post.content}
    </div>
</article>

<style lang="postcss">
    article {
        border-top: .2rem dotted theme(colors.accent-dark-sm);
    }
    @media(prefers-color-scheme: dark) {
        article {
            border-top: .2rem dotted theme(colors.accent-light-sm);
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