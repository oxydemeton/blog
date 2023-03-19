<script lang="ts">
	import type { User } from "$lib/DbInterfaces";
	import { readable } from "svelte/store";
    import {currentUser, pb} from "../../lib/pocketbase"
	import Profile from "./Profile.svelte";
    let user = $currentUser as unknown as User;

    function sendVerify(){
        if (user.email) pb.collection('users').requestVerification(user.email);
    }
    async function updateEmail() {
        await pb.collection('users').requestEmailChange(newmail).catch((reason)=> {
            newmail_msg = "An error occurred: " + reason
        })
    }
    let newmail = ""
    let newmail_msg = ""
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
            <form on:submit={updateEmail}>
                <fieldset>
                    <legend class="text-lg">Update Email address</legend>
                    <input type="email" name="newmail" placeholder="new email" bind:value={newmail} class="text-md">
                    <button type="submit" class="text-md">Change Mail</button>
                    <span class="block italic"> {newmail_msg}</span>
                </fieldset>
            </form>
        </article>

    {:else}
    <h2>Not Logged in</h2>
        <a href="/login" class="font-medium text-lg">Pleas login</a>
    {/if}
</main>