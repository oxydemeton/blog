<script>
    import {currentUser, pb} from "../../lib/pocketbase"
</script>

<main>
    {#if $currentUser}
        <h2>{$currentUser.username}</h2>
    {:else}
    <h2>Not Logged in</h2>
        <a href="/login" class="font-medium text-lg">Pleas login</a>
    {/if}
</main>