<script lang="ts" module>
    import { fade } from 'svelte/transition';
    import { contextMenu, cards } from '$lib/stores';
    import { outclick } from '$lib/actions/outclick';
    import Icon from './Icon/Icon.svelte';
</script>

<script lang="ts">
    const x = $derived(
        $contextMenu.pos.x + 200 > window.innerWidth
            ? $contextMenu.pos.x - 200
            : $contextMenu.pos.x,
    );
    const y = $derived(
        $contextMenu.pos.y + 200 > window.innerHeight
            ? $contextMenu.pos.y - 204
            : $contextMenu.pos.y,
    );

    const menu = $state([
        {
            action: async (e) => {
                await cards.copy(e.currentTarget.id);
                $contextMenu.isOpen = false;
            },
            icon: 'notes',
            text: 'Copy all',
        },
        {
            action: (e) => {
                cards.archive(e.currentTarget.id);
                $contextMenu.isOpen = false;
            },
            icon: 'access_time',
            text: $contextMenu.cardState === 'active' ? 'Archive' : 'Unarchive',
        },
        {
            action: (e) => {
                cards.delete(e.currentTarget.id);
                $contextMenu.isOpen = false;
            },
            icon: 'delete',
            text: 'Delete',
        },
    ]);
</script>

<menu
    class="card-menu"
    style="top: {y}px; left: {x}px;"
    transition:fade={{ duration: 100 }}
    use:outclick={() => ($contextMenu.isOpen = false)}
>
    {#each menu as { action, icon, text }}
        <button id={$contextMenu.cardID} class="list-item" onclick={action}>
            <Icon>{icon}</Icon>
            {text}
        </button>
    {/each}
</menu>

<style>
    .card-menu {
        position: absolute;
        padding: 0.5rem 0;
        z-index: 10000;
        background: var(--background);
        min-width: 200px;
        border: 1px solid var(--contrast);
        border-radius: 0.4rem;
    }

    .list-item {
        display: flex;
        align-items: center;
        line-height: 1;
        padding: var(--padding-s) calc(var(--padding-s) + 0.5rem);
        transition: background var(--transition);
        cursor: pointer;
        font-weight: bold;
        background: transparent;
        border: 0;
        width: 100%;
    }

    .list-item:hover {
        background: var(--hover);
    }

    .card-menu > .list-item :global(> i) {
        margin-right: var(--padding-s);
    }
</style>
