<script lang="ts">
	import type { User } from "$lib/DbInterfaces";
    import {currentUser, pb} from "../../lib/pocketbase"
	import Profile from "./Profile.svelte";
    let user = $currentUser as unknown as User;

    function sendVerify(){
        if (user.email) pb.collection('users').requestVerification(user.email);
    }
</script>

<style lang="postcss">
    .btn-verify {
        @apply text-md font-medium;
        color: theme(colors.accent-dark-sm);
    }
    @media (prefers-color-scheme: dark) {
        .btn-verify {
            color: theme(colors.accent-light-sm);
        }
    }
</style>

<main>
    {#if $currentUser}
        <Profile user={user}/>

        <article>
            <h3>Einstellungen</h3>
            {#if !user.verified}
                <div>
                    <h6 class="inline">Deine Email ist nicht verifiziert.</h6>
                    <button on:click={sendVerify} class="btn-verify">Email senden </button>
                </div>
            {/if}
        </article>

    {:else}
    <h2>Not Logged in</h2>
        <a href="/login" class="font-medium text-lg">Pleas login</a>
    {/if}
</main>