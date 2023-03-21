<script>
	import Post from '../../Post.svelte';
	import Comment from './Comment.svelte';


    export let data;
</script>

<main>
    <section>
        <h2>{data.post.title}</h2>
        <div class="italic" aria-label="Posts author">Author: <a href={'/profile/'+data.post.creator}>{data.post.creatorExtend?.username}</a></div>
        <div class="italic" aria-label="Post release date"><time datetime={data.post.created}>{new Date(data.post.created).toLocaleDateString('de')}</time></div>
    </section>
    <hr>
    <article>
        {@html data.post.content}
    </article>
    <hr>
    <section class="comments">
        <h2>Comments</h2>
        {#each data.post.expand['comments(post)'] as comment}
            <Comment comment={comment}/>
        {/each}
    </section>
</main>