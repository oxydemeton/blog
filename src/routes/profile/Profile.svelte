<script lang="ts">
    import type {User} from "$lib/DbInterfaces"
    import Comment from '$lib/Comment.svelte';
    import CopyText from "$lib/Components/CopyText.svelte";
    export let user: User
</script>

<section>
    <article>
        <h2>{user.username? user.username : 'Unknown'}</h2>
        <ul>
            <li>Username: {user.username? user.username : 'Unknown'}</li>
            <li>Creation: <time datetime={user.created}>{new Date(user.created).toLocaleDateString('de')}</time></li>
            {#if user.email}
                <li>Email: {user.email}</li>
            {/if}
            <li>Id: <CopyText txt={user.id}/></li>
        </ul>
    </article>
    {#if user.expand['comments(creator)']}
    <hr>
    <section class="comments">
        <h3>Comments</h3>
        {#each user.expand['comments(creator)'] as comment}
            <Comment comment={comment}/>
            <div class="m-0.5"> Post:<a href={"/post/" + comment.expand.post.id}>{comment.expand.post.title}</a></div>
        {/each}
    </section>
    {/if}
</section>