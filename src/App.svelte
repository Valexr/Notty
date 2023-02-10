<script>
    import { onMount } from "svelte";
    import { cards, contextMenu } from "$lib/stores";
    import { pathparams } from "$components/Router/path";
    import { navigate } from "$components/Router/navigate";
    import Route from "$components/Router/Route.svelte";
    import Home from "$pages/home.svelte";
    import Editor from "$pages/editor.svelte";
    import Search from "$pages/search.svelte";
    import Archive from "$pages/archive.svelte";
    import Settings from "$pages/settings.svelte";
    import ContextMenu from "$components/ContextMenu.svelte";

    // Share target action and initial redirect
    const parsedUrl = new URL(window.location);
    if (parsedUrl.searchParams.get("text") !== null) {
        window.addEventListener("DOMContentLoaded", () => {
            $cards = [
                {
                    id: Date.now(),
                    type: "text",
                    content: parsedUrl.searchParams.get("text"),
                    state: "active",
                },
                ...$cards,
            ];
            navigate("/editor?id=" + $cards[0].id);
        });
    } else {
        onMount(() => navigate("/"));
    }
</script>

<!-- Routes -->
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
