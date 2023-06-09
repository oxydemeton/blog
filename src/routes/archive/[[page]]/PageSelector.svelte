<script lang="ts">
    export let max_page: number
    export let current_page: number

    $: pages = new Array(max_page).fill(0).map((_, i) => i + 1)
</script>

<div>
    {#each pages as page}
        {#if current_page === page}
            <span>{page}</span>
        {:else}
            <a href={`/archive/${page}`}>{page}</a>
        {/if}
    {/each}
</div>

<style lang="postcss">
    div {
        display: flex;
        flex-wrap: wrap;
        gap: .1em;
    }
    a {
        text-decoration: none;
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.normal);
        padding-inline: .1em;
        color: inherit;
    }
    a:hover {
        color: theme(colors.accent-dark-lg);
    }
    a:focus-visible {
        outline: 2px dashed theme(colors.accent-dark-sm);
        border-radius: .5em;
    }
    span {
        color: inherit;
        color: theme(colors.accent-dark-sm);
        font-size: theme(fontSize.md);
        font-weight: theme(fontWeight.bold);
    }
    @media (prefers-color-scheme: dark) {
        a:hover {
            color: theme(colors.accent-light-lg);
        }
        a:focus-visible {
            outline: 2px dashed theme(colors.accent-light-sm);
        }
        span {
            color: theme(colors.accent-light-sm);
        }
    }
</style>