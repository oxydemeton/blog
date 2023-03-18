<script>
    export let data;
    console.log(data.search_term);
</script>

<main>
    <h2>
        Search Results for:
        <q aria-label="Entered Search term" class="text-2xl font-medium">{data.search_term}</q>
    </h2>
</main>