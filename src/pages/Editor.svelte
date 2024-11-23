<script lang="ts" module>
    import { onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
    import { expoOut } from 'svelte/easing';
    import { cards } from '$lib/stores';
    import { pathParams } from '$lib/router/path';
    import { autofocus } from '$lib/actions/autofocus';
    import BackPanel from '$lib/components/BackPanel.svelte';
</script>

<script lang="ts">
    const ID = $state($pathParams.get('id'));
    const CARD = cards.id(ID);

    let innerHeight = $state(0);

    onDestroy(() => cards.edit(CARD));
</script>

<svelte:window bind:innerHeight />

<BackPanel />
<textarea
    use:autofocus
    class="editor"
    name="Editor"
    placeholder="Type here..."
    style="height: {innerHeight}px;"
    in:fly={{ y: 16, delay: 35, duration: 300, easing: expoOut }}
    bind:value={CARD.content}
>
</textarea>

<style>
    textarea {
        display: block;
        width: 100%;
        height: auto;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 calc(50vw - 300px + var(--padding));
        padding-top: 90px;
        padding-bottom: var(--padding);
        overflow-y: overlay;
        overflow-x: hidden;
        border: none;
        background: var(--background);
        line-height: var(--line-height);
        resize: none;
        -webkit-touch-callout: default;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }

    @media only screen and (max-width: 700px) {
        textarea {
            padding: 0 calc(4.5vw + var(--padding));
            padding-top: 90px;
            padding-bottom: var(--padding);
        }
    }
</style>
