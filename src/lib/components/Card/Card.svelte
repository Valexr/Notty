<script lang="ts" module>
    import { onMount } from 'svelte';
    import { navigate } from '$lib/router/navigate';
    import { cards, contextMenu } from '$lib/stores';
    import { moveElement, deleteElement } from '$lib/utils';
    import { swipe } from '$lib/actions/swipe';
    import { longpress } from '$lib/actions/longpress';
</script>

<script lang="ts">
    let { card, editable = true, swipeable = true } = $props();

    let cardElement = $state<HTMLElement | null>(null);

    function clickHandler() {
        editable === true ? navigate('/editor?id=' + card.id) : null;
    }
    function contextMenuHandler(e: MouseEvent) {
        e.preventDefault();
        $contextMenu = {
            isOpen: true,
            cardID: card.id,
            cardState: card.state,
            pos: { x: e.pageX, y: e.pageY },
        };
    }
    function contextMenuLongpress(e) {
        e.preventDefault();
        $contextMenu = {
            isOpen: true,
            cardID: card.id,
            cardState: card.state,
            pos: { x: e.detail.x, y: e.detail.y },
        };
    }

    // Swipes
    swipeable ? onMount(() => swipe(cardElement, toggleState)) : null;

    // Actions
    function toggleState() {
        if (card.content !== '') {
            card.state === 'active'
                ? (card.state = 'archived')
                : (card.state = 'active');
            $cards = moveElement($cards, $cards.indexOf(card), 0);
        } else {
            deleteCard();
        }
    }
    function deleteCard() {
        $cards = deleteElement($cards, $cards.indexOf(card));
    }

    // Visual transition for delete/toggleState
    function cardOut(action) {
        cardElement.style.setProperty(
            'transition',
            'transform var(--transition), opacity var(--transition), margin-bottom var(--transition)',
        );
        cardElement.style.setProperty('transform', 'translateX(450px)');
        cardElement.style.setProperty('opacity', '0');
        cardElement.style.setProperty(
            'margin-bottom',
            cardElement.offsetHeight * -1 + 'px',
        );
        setTimeout(action, 300);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<card-item
    id={card.id}
    class="block"
    role="button"
    tabindex="0"
    use:longpress
    onlongpress={contextMenuLongpress}
    oncontextmenu={contextMenuHandler}
    onclick={clickHandler}
    bind:this={cardElement}
>
    {card.content}
</card-item>

<style>
    card-item {
        margin-bottom: var(--padding);
        background: var(--surface);
        line-height: var(--line-height);
        overflow: hidden;
        cursor: pointer;
        white-space: pre-wrap;
        word-wrap: break-word;
        border-radius: 0.9rem;
    }

    card-item:empty:before {
        content: 'Empty card';
        color: var(--color-secondary);
    }
</style>
