<script lang="ts">
    import type {Post as IPost} from "$lib/DbInterfaces"
    import Post from "./Post.svelte";
    export let posts: IPost[]
</script>

<ol>
    {#each posts as post}
        <li>
            <Post {post}/>
        </li>
    {/each}
</ol>

<style lang="postcss">
    ol {
        list-style-type: none;
    }
</style>