<script lang="ts" module>
    import { contextMenu } from '$lib/stores';
    import Route from '$lib/router/Route.svelte';
    import Home from '$pages/Home.svelte';
    import Editor from '$pages/Editor.svelte';
    import Search from '$pages/Search.svelte';
    import Archive from '$pages/Archive.svelte';
    import Settings from '$pages/Settings.svelte';
    import ContextMenu from '$lib/components/ContextMenu.svelte';
</script>

<Route path="/">
    <Home />
</Route>
<Route path="/editor">
    <Editor />
</Route>
<Route path="/search">
    <Search />
</Route>
<Route path="/archive">
    <Archive />
</Route>
<Route path="/settings">
    <Settings />
</Route>

{#if $contextMenu.isOpen === true}
    <ContextMenu />
{/if}
