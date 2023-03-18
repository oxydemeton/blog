<script>
    import "../app.css";
    import "../color-scheme.css";
    import "../base.postcss";
</script>

<style lang="postcss">
    :root {
        --cs-cfg-main-dark: theme(colors.neutral.900);
        --cs-cfg-main-light: theme(colors.neutral.100);
        --cs-cfg-accent-dark-sm: theme(colors.orange.900);
        --cs-cfg-accent-dark-lg: theme(colors.orange.700);
        --cs-cfg-accent-light-sm: theme(colors.orange.100);
        --cs-cfg-accent-light-lg: theme(colors.orange.400);
    }
    :global(body) {
        margin-inline: auto;
        max-width: min(max(80vw, 800px), 2000px);
    }
</style>

<header>
    <h1>Heading</h1>
</header>
<slot />

<footer>

</footer>