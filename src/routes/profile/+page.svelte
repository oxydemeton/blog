<script lang="ts">
    import {currentUser, pb} from "../../lib/pocketbase"
	import Profile from "./Profile.svelte";
    import { location } from "$lib/Location";
    
    function sendVerify(){
        if ($currentUser)
            if ($currentUser.email) pb.collection('users').requestVerification($currentUser.email);
    }
    async function updateEmail() {
        await pb.collection('users').requestEmailChange(new_mail).catch((reason)=> {
            new_mail_msg = "An error occurred: " + reason
        })
    }
    async function updateName() {
        if($currentUser) await pb.collection('users').update($currentUser.id, {username: new_name}).catch((reason)=> {
            new_name_msg = "An error occurred: " + reason
        })
    }
    let new_mail = ""
    let new_mail_msg = ""
    let new_name = ""
    let new_name_msg = ""
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
        <Profile user={$currentUser} share_url={new URL(`${$location.href}/${$currentUser.id}`)}/>
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
            <form on:submit={updateName}>
                <fieldset>
                    <legend class="text-lg">Update username</legend>
                    <input type="text" name="newmail" placeholder="new name" bind:value={new_name} class="text-md">
                    <button type="submit" class="text-md">Change Name</button>
                    <span class="block italic"> {new_name_msg}</span>
                </fieldset>
            </form>
            <form on:submit={updateEmail}>
                <fieldset>
                    <legend class="text-lg">Update Email address</legend>
                    <input type="email" name="newmail" placeholder="new email" bind:value={new_mail} class="text-md">
                    <button type="submit" class="text-md">Change Mail</button>
                    <span class="block italic"> {new_mail_msg}</span>
                </fieldset>
            </form>
        </article>

    {:else}
    <h2>Not Logged in</h2>
        <a href="/login" class="font-medium text-lg">Pleas login</a>
    {/if}
</main>