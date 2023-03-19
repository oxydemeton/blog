<script lang="ts">
    import type {User} from "$lib/DbInterfaces"
    export let user: User
</script>

<main>
    <article>
        <h2>{user.username}</h2>
        <ul>
            <li>Username: {user.username}</li>
            <li>Creation: <time datetime={user.created}>{new Date(user.created).toLocaleDateString('de')}</time></li>
            <li>Id: <span class="select-all italic font-extralight">{user.id}</span></li>
        </ul>
    </article>
</main>