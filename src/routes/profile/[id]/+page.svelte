<script lang="ts">
	import Profile from "../Profile.svelte";
    import { location } from "$lib/Location";
    export let data;
</script>

<main>
    <Profile user={data.user} share_url={$location}/>
</main>