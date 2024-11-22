<script lang="ts" module>
    import { navigate } from '$lib/router/navigate';
    import Header from './Header.svelte';
    import IconButton from './Icon/IconButton.svelte';
    import type { Snippet } from 'svelte';
</script>

<script lang="ts">
    let { children }: { children?: Snippet } = $props();
</script>

<Header id="BackPanel">
    <IconButton onclick={() => navigate('/')}>keyboard_arrow_left</IconButton>
    {@render children?.()}
</Header>
