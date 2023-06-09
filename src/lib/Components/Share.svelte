<script lang="ts">
    export let data: File[] | string | URL 
    export let title: string | undefined = undefined

    export let active = true
    export let show_if_unsupported = true

    $: share_obj = () => {
        if (data instanceof Array) {
            return {
                files: data,
                title: title
            }
        } else if (data instanceof URL) {
            return {
                url: data.toString(),
                title: title
            }
        } else {
            return {
                text: data,
                title: title
            }
        }
    }

    $: activated = active && navigator.canShare != undefined && navigator.canShare(share_obj())
</script>

<style>
    button {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        text-decoration: underline;
    }
    button:disabled {
        font-style: italic;
        text-decoration: underline dotted;
        text-decoration-thickness: 1px;
        opacity: 0.7;
    }
</style>

<button on:click={() => navigator.share(share_obj())} disabled={!activated}>
    {#if show_if_unsupported || activated}
        <slot/>
    {/if}
</button>
