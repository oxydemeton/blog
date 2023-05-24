<script lang="ts">
    import PostList from "$lib/Post/PostList.svelte";
	import LatestPost from "./LatestPost.svelte";

    export let data;
</script>
<style lang="postcss">
    .latest-post-sec {
        border-bottom: .1rem dashed theme(colors.accent-light-sm);
        border-top: .1rem dashed theme(colors.accent-light-sm);
    }
    @media (prefers-color-scheme: dark) {
        .latest-post-sec {
            border-bottom: .1rem dashed theme(colors.accent-dark-sm);
            border-top: .1rem dashed theme(colors.accent-dark-sm);
        }
    }
</style>
<main>
    <h2 class="mb-4">Neuster Post</h2>
    <section class="latest-post-sec md:px-24 max-h-[50vh] overflow-y-auto shadow-xl">
        <LatestPost post={data.posts[0]}/>
    </section>
    <section class="shadow-xl">
        <h2>Weitere neue Posts</h2>
        <PostList posts={data.posts.filter((_, i) => i !== 0)}/>
    </section>
</main>