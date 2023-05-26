<script>
    import { currentUser, pb } from "$lib/pocketbase";
    export let data
    pb.authStore.loadFromCookie(data.usr)
</script>

<main>
    You are logged in as {pb.authStore.model?.id}
</main>