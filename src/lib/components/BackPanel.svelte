<script>
    import { navigate } from "$lib/router/navigate";
    import Header from "./Header.svelte";
    import IconButton from "./IconButton.svelte";
</script>

<Header id="BackPanel">
    <IconButton on:click={() => history.back()}>keyboard_arrow_left</IconButton>
    <slot />
</Header>
