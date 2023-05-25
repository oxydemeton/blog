<script lang="ts">
    import IconCopy from "$lib/icons/IconCopy.svelte";
    export let txt: string
    function copy () {
        navigator.clipboard.writeText(txt)
        alert(`Copied "${txt}" to clipboard.`)
    }
</script>
<style lang="postcss">
    button {
        unset: all;
        text-decoration: inherit;
        border: unset;
        color: inherit;
        background: none;
        font: inherit;
    }
</style>
<button on:click={copy} aria-label="Click to Copy">{txt}<IconCopy height={16} width={16}/></button>