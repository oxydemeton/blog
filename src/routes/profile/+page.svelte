<script lang="ts">
	import type { User } from "$lib/DbInterfaces";
    import {currentUser, pb} from "../../lib/pocketbase"
	import Profile from "./Profile.svelte";
    function sendVerify(){
        if ($currentUser)
            if ($currentUser.email) pb.collection('users').requestVerification($currentUser.email);
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
        <a href={"/profile/" + $currentUser.id}>Public Profile</a>
        <br><a href="#settings">Zu den Einstellungen</a>
        <Profile user={$currentUser}/>
        <hr>
        <article id="sttings">
            <h3>Einstellungen</h3>
            <h5 class="italic mt-0">More features coming soon!</h5>
            {#if !$currentUser.verified}
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