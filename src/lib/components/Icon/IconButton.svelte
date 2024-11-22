<script lang="ts" module>
    import Icon from './Icon.svelte';
</script>

<script lang="ts">
    let { onclick, children } = $props();
</script>

<button {onclick}>
    <Icon>{@render children?.()}</Icon>
</button>

<style>
    button {
        display: inline-block;
        background: transparent;
        border: 0;
        padding: calc(var(--padding-s) * 1.5);
        margin: calc(-0.5 * var(--padding-s));
        cursor: pointer;
        transition:
            background var(--transition),
            transform var(--transition);
        transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
        border-radius: 3rem;
        z-index: 10;
        line-height: 0;
    }

    button:active {
        background: var(--hover);
        transform: scale(0.925);
    }
</style>
