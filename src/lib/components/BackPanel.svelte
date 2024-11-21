<script lang="ts" module>
    import { navigate } from "$lib/router/navigate";
    import Header from "./Header.svelte";
    import IconButton from "./IconButton.svelte";
</script>

<script lang="ts">
    let { children } = $props();
</script>

<Header id="BackPanel">
    <IconButton onclick={() => history.back()}>keyboard_arrow_left</IconButton>
    {@render children?.()}
</Header>
