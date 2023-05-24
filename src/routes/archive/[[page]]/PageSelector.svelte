<script lang="ts">
    export let current_page: number
    export let prev: URL
    export let next: URL
</script>

<div>
    <a href={prev.href} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="viewport">&lt;</a>
    <span class="page-count">{current_page}</span>
    <a href={next.href} data-sveltekit-preload-data="hover" data-sveltekit-preload-code="viewport">&gt;</a>
</div>

<style lang="postcss">
    a {
        text-decoration: none;
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.bold);
        padding-inline: .1em;
        color: inherit;
    }
    .page-count {
        font-size: theme(fontSize.md);;
        font-weight: theme(fontWeight.normal);
    }
</style>