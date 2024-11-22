<script lang="ts" module>
    import { pathName, pathParams } from './path';
</script>

<script lang="ts">
    let { path = '/', title = document.title, children } = $props();

    function onpopstate() {
        pathName.set(window.location.pathname);
        pathParams.set(new URL(String(location)).searchParams);

        if (path === $pathName) {
            document.title = title;
        }
    }
</script>

<svelte:window {onpopstate} />

{#if path === $pathName}
    {@render children?.()}
{/if}
