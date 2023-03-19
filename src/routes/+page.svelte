<script lang="ts">
	import type { Post } from "$lib/DbInterfaces";
	import LatestPost from "./LatestPost.svelte";

    export let data: {latest_post: Post};
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
    <h2 class="mb-4">Latest Post</h2>
    <section class="latest-post-sec md:px-24 max-h-[50vh] overflow-y-auto">
        <LatestPost post={data.latest_post}/>
    </section>
</main>