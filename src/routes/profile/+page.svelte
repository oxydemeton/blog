<script lang="ts">
	import type { User } from "$lib/DbInterfaces";
    import {currentUser, pb} from "../../lib/pocketbase"
	import Profile from "./Profile.svelte";
    let user = $currentUser as unknown as User;
</script>

<main>
    {#if $currentUser}
        <Profile user={user}/>
    {:else}
    <h2>Not Logged in</h2>
        <a href="/login" class="font-medium text-lg">Pleas login</a>
    {/if}
</main>