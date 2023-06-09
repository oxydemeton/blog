<script lang="ts">
    export let width = "auto"
    export let height = "auto"
    export let disabled = false

    export let href: string
</script>

<style>
    a {
        display: inline-block;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        aspect-ratio: 382/92;
        background-image: url(../../assets/google_login/light/normal.png);
    }
    a:disabled {
        background-image: url(../../assets/google_login/light/disabled.png);
    }
    a:focus-visible {
        background-image: url(../../assets/google_login/light/focus.png);
    }
    a:active {
        background-image: url(../../assets/google_login/light/pressed.png);
    }
    @media (prefers-color-scheme: dark) {
        a {
            background-image: url(../../assets/google_login/dark/normal.png);
        }
        a:disabled {
            background-image: url(../../assets/google_login/dark/disabled.png);
        }
        a:focus-visible {
            background-image: url(../../assets/google_login/dark/focus.png);
        }
        a:active {
            background-image: url(../../assets/google_login/dark/pressed.png);
        }
    }

</style>
<a href={href} aria-disabled={disabled}
    style={`width: ${width}; height: ${height};`}>
</a>