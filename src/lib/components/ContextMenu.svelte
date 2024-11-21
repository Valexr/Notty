<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { contextMenu } from "$lib/stores";
    import Icon from "./Icon.svelte";

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

    onMount((event) => {
        window.addEventListener("click", (event) => {
            $contextMenu = {
                isOpen: false,
                card: $contextMenu.card,
                pos: { x: $contextMenu.pos.x, y: $contextMenu.pos.y },
                toggleState: () => $contextMenu.toggleState,
                deleteCard: () => $contextMenu.deleteCard,
            };
        });
    });

    let copyCard = () => {
        let thisCard = document.getElementById($contextMenu.card.id);
        const isSafari = !!navigator.userAgent.match(
            /Version\/[\d\.]+.*Safari/,
        );
        isSafari
            ? (thisCard.style.webkitUserSelect = "all")
            : (thisCard.style.userSelect = "text");
        window.getSelection().selectAllChildren(thisCard);
        document.execCommand("copy");
        setTimeout(
            () =>
                isSafari
                    ? (thisCard.style.webkitUserSelect = null)
                    : (thisCard.style.userSelect = null),
            100,
        );
    };
</script>

<menu
    class="card-menu"
    style="top: {y}px; left: {x}px;"
    in:fade={{ duration: 100 }}
>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <li class="list-item" onclick={copyCard}>
        <Icon fontSize="1.4rem">notes</Icon>
        Copy all
    </li>
    <li class="list-item" onclick={contextMenu.toggleState}>
        <Icon fontSize="1.4rem">access_time</Icon>
        {$contextMenu.card.state === "active" ? "Archive" : "Unarchive"}
    </li>
    <li class="list-item" onclick={contextMenu.deleteCard}>
        <Icon fontSize="1.4rem">delete</Icon>
        Delete
    </li>
</menu>

<style>
    menu.card-menu {
        position: absolute;
        padding: 0.5rem 0;
        z-index: 10000;
        background: var(--background);
        min-width: 200px;
        border: 1px solid var(--contrast);
        border-radius: 0.4rem;
    }

    li.list-item {
        display: flex;
        align-items: center;
        line-height: 1;
        padding: var(--padding-s) calc(var(--padding-s) + 0.5rem);
        transition: background var(--transition);
        cursor: pointer;
        font-weight: bold;
    }

    li.list-item:hover {
        background: var(--hover);
    }

    :global(menu.card-menu > li.list-item > i) {
        margin-right: calc(var(--padding-s) + 0.5rem);
    }
</style>
