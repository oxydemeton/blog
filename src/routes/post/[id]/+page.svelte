<script>
	import Post from '../../Post.svelte';
	import Comment from '../../../lib/Comment.svelte';
    export let data;
    import {currentUser, pb} from "$lib/pocketbase"

    let comment_title = ""
    let comment_content = ""
    let comment_notice = ""
    async function publishComment() {
        if($currentUser) {
            const new_post = {
                "title": comment_title,
                "content": comment_content,
                "creator": $currentUser.id,
                "post": data.post.id
            };

            const record = await pb.collection('comments').create(new_post);
            if (data.post.expand['comments(post)'] && record) {
                // @ts-ignore
                data.post.expand['comments(post)'].push(record)
                comment_content = ""
                comment_title = ""
            } else {
                comment_notice = "Irgendwas ist schief gelaufen beim erstellen."
            }
        }else {
            comment_notice = "Du muss eingeloggt sein um einen Kommentar zu schreiben."
        }
    }
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
        <form>
            <fieldset disabled={!$currentUser} aria-disabled={!$currentUser}>
                <legend>Write a new comment</legend>
                {#if !$currentUser} 
                    <i class="block">Logge dich ein um einen Kommentar zu verfassen.</i>
                {/if}
                <input class="m-1" type="text" aria-label="Title of new Comment" minlength="2" required placeholder="Titel" bind:value={comment_title}> <br>
                <textarea class="m-1" cols="30" rows="10" aria-label="Area to write a new Comments" placeholder="Kommentar" bind:value={comment_content}></textarea><br>
                <button class="m-1" type="submit" on:submit={publishComment}>Kommentar veröffentlichen</button><br>
                <span class="font-medium"></span>
            </fieldset>
        </form>
        {#each data.post.expand['comments(post)'] as comment}
            <Comment comment={comment}/>
        {/each}
    </section>
</main>

<style lang="postcss">
    textarea {
        width: 100%;
        resize: vertical;
    }
</style>