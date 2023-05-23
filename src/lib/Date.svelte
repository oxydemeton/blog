<script lang="ts">
    export let lang: string
    export let date: Date | string
    $: _date = new Date(date)
</script>
<time datetime={_date.getTime().toString()}>{_date.toLocaleDateString(lang)}</time>