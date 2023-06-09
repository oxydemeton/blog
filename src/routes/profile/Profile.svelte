<script lang="ts">
    import type {Post, User} from "$lib/DbInterfaces"
    import Comment from '$lib/Comment.svelte';
    import CopyText from "$lib/Components/CopyText.svelte";
    import PostList from "$lib/Post/PostList.svelte";
	import Share from "$lib/Components/Share.svelte";
    export let user: User
    export let share_url: URL | undefined = undefined
    $: posts = (user.expand['posts(creator)'] as Post[]).map(post => {
        post.creatorExtend = user
        return post
    })
</script>

<section>
    <article>
        <h2>{user.username? user.username : 'Unknown'}</h2>
        <ul>
            <li>Username: {user.username? user.username : 'Unknown'}</li>
            <li>Erstellungs Datum: <time datetime={user.created}>{new Date(user.created).toLocaleDateString('de')}</time></li>
            {#if user.email}
                <li>Email: {user.email} <span class="italic font-light">(Not Public)</span></li>
            {/if}
            {#if share_url && user.id}
                <li>Share: <Share data={share_url} title="Some Stuff">Teilen</Share></li>
            {/if}
            <li>Id: <CopyText txt={user.id}/></li>
        </ul>
    </article>
    {#if posts}
        {#if user.expand['comments(creator)']}
            <a href="#comments">Zu den Kommentaren</a>
        {/if}
        <hr>
        <section id="posts">
            <h3>Posts</h3>
            <PostList posts={posts}/>
        </section>
    {/if}
    {#if user.expand['comments(creator)']}
    <hr>
    <section id="comments">
        <h3>Kommentare</h3>
        <ul style="list-style: none;">
            {#each user.expand['comments(creator)'] as comment}
            <li>
                <Comment comment={comment}/>
                <div class="m-0.5"> Post:<a href={"/post/" + comment.expand.post.id}>{comment.expand.post.title}</a></div>
            </li>
        {/each}
        </ul>
    </section>
    {/if}
</section>