<script lang="ts" module>
    import Icon from "./Icon.svelte";
</script>

<script lang="ts">
    let { onclick, children } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<icon-button {onclick}>
    <Icon>
        {@render children?.()}
    </Icon>
</icon-button>

<style>
    icon-button {
        display: inline-block;
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

    icon-button:active {
        background: var(--hover);
        transform: scale(0.925);
    }
</style>
