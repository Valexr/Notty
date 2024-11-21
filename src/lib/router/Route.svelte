<script lang="ts">
    import { pathname, pathparams } from "./path";

    let { path = "/", title = document.title, children } = $props();

    function onpopstate() {
        $pathname = location.pathname;
        $pathparams = new URL(String(location)).searchParams;

        if (path === $pathname) {
            document.title = title;
        }
    }
</script>

<svelte:window {onpopstate} />

{console.log($pathname, path, location)}
{#if $pathname.includes(path)}
    {@render children?.()}
{/if}
