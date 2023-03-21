<script>
	import Post from '../../Post.svelte';


    export let data;
</script>

<main>
    <h2>{data.post.title}</h2>
    <div class="italic" aria-label="Posts author">Author: <a href={'/profile/'+data.post.creator}>{data.post.creatorExtend?.username}</a></div>
    <div class="italic" aria-label="Post release date"><time datetime={data.post.created}>{new Date(data.post.created).toLocaleDateString('de')}</time></div>
    <hr>
    <article>
        {@html data.post.content}
    </article>
</main>