<script lang="ts">
	import Profile from "../Profile.svelte";
    import { location } from "$lib/Location";
    export let data;
</script>

<main>
    <Profile user={data.user} share_url={$location}/>
</main>

<svelte:head>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@odydemeton"/>
    <meta name="twitter:title" content={`Mabla's Blog user: ${data.user.username}`} />
    <meta name="twitter:image" content="https://blog.mabla.name/favicon.png" />
</svelte:head>