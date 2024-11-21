<script>
    import Card from "./Card.svelte";

    let { data, editable = true, swipeable = true, children } = $props();
</script>

<main class="card-list" class:empty={data.length === 0}>
    {#each data as card (card.id)}
        <Card {card} {editable} {swipeable} />
    {:else}
        {@render children?.()}
    {/each}
</main>

<style>
    main {
        width: 100%;
        overflow-x: initial;
    }

    main.empty {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: var(--color-secondary);
        animation: fade var(--transition);
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    :global(main.card-list.empty i) {
        display: inline-flex;
        vertical-align: -0.45rem;
        margin-right: 0.15rem;
        color: var(--color-secondary);
    }
</style>
