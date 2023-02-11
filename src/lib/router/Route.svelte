<script lang="ts">
    import { pathname, pathparams } from "./path";

    export let path = "/",
        title = document.title;

    window.addEventListener("popstate", () => {
        $pathname = location.pathname;
        $pathparams = new URL(String(location)).searchParams;

        if (path === $pathname) {
            document.title = title;
        }
    });
</script>

{console.log($pathname, path, location)}
{#if $pathname.includes(path)}
    <slot />
{/if}
