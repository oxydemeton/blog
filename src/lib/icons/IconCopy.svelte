<script lang="ts">
    export let width = 128
    export let height = 128
    import Icon from "./Icon.svelte"
    import Img from "@assets/CopyIcon.png"
</script>
<Icon {width} {height} src={Img} alt="Click to copy Icon"/>