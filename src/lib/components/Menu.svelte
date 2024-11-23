<script lang="ts" module>
    import { navigate } from '$lib/router/navigate';

    import View from '$lib/components/View.svelte';
    import Icon from '$lib/components/Icon/Icon.svelte';
</script>

<script lang="ts">
    let { open = false } = $props();
</script>

{#if open}
    <View
        id="Navigation"
        background="var(--gradient)"
        zIndex={10}
        flyIn={-32}
        flyOut={-16}
    >
        <nav>
            <button class="list-item" onclick={() => navigate('/archive')}>
                Archive <Icon>access_time</Icon>
            </button>
            <button class="list-item" onclick={() => navigate('/settings')}>
                Settings <Icon>settings</Icon>
            </button>
        </nav>
    </View>
{/if}

<style>
    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 100vh;
        padding: 0 calc(var(--padding) - var(--padding-s));
        padding-top: 82px;
        border: none;
    }

    .list-item {
        width: 145px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--padding-s);
        margin-bottom: var(--padding-s);
        cursor: pointer;
        transition:
            background var(--transition),
            transform var(--transition);
        transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
        border-radius: 3rem;
        z-index: 10;
        font-weight: bold;
        background: transparent;
        border: 0;
    }

    .list-item:hover {
        background: var(--hover);
    }

    .list-item:active {
        background: var(--hover);
        transform: scaleX(0.985) scaleY(0.95);
    }

    nav > .list-item :global(i) {
        margin-left: var(--padding-s);
    }
</style>
