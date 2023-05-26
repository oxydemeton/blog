<script lang="ts">
	import Profile from "../Profile.svelte";

    export let data;
    $: url = new URL(window.location.href)
</script>

<main>
    <Profile user={data.user} share_url={new URL(window.location.href)}/>
</main>