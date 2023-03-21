<script lang="ts">
    import type {Comment} from "../../../lib/DbInterfaces"
    export let comment: Comment;
</script>

<section class="comment mt-12">
    <h3 class="text-lg m-0">{comment.title}</h3>
    {#if comment.expand.creator}
    <div class="italic" aria-label="Posts author">Author: <a href={'/profile/'+comment.expand.creator.id}>{comment.expand.creator.username}</a></div>
    {/if}
    {#if comment.created}
    <div class="italic" aria-label="Post release date"><time datetime={comment.created}>{new Date(comment.created).toLocaleDateString('de')}</time></div>
    {/if}
    <p class="m-0 mx-2">
        {comment.content}
    </p>
</section>