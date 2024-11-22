<script lang="ts" module>
    import { cards } from '$lib/stores';
    import BackPanel from '$lib/components/BackPanel.svelte';
    import View from '$lib/components/View.svelte';
</script>

<BackPanel />
<View id="Settings" paddingTop="90px">
    <menu class="settings">
        <section>
            <button class="list-item" onclick={cards.clear}>
                Clear ALL data
            </button>
        </section>
        <section style="padding: var(--padding)">
            Find a bug? Have a problem, question or idea? Contact me @valexr -
            telegram
        </section>
    </menu>
</View>

<style>
    section {
        display: block;
        width: 100%;
        padding: var(--padding-s) 0;
        background: var(--surface);
        line-height: var(--line-height);
        overflow: hidden;
        border-radius: 0.9rem;
        margin-bottom: 1.25rem;
    }

    .list-item {
        display: flex;
        align-items: center;
        line-height: 1;
        padding: var(--padding) var(--padding);
        transition: background var(--transition);
        cursor: pointer;
        background: transparent;
        border: 0;
        width: 100%;
    }

    .list-item:hover {
        background: var(--hover);
    }
</style>
