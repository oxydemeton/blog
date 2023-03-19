<script lang="ts">
    import type {User} from "$lib/DbInterfaces"
    export let user: User
</script>

<main>
    <h2>{user.username}</h2>
</main>