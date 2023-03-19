<script lang="ts">
	import Profile from "../Profile.svelte";

    export let data;
</script>

<main>
    <Profile user={data.user}/>
</main>