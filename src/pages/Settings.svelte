<script>
    import { cards } from "$lib/stores";
    import BackPanel from "$lib/components/BackPanel.svelte";
    import View from "$lib/components/View.svelte";
</script>

<BackPanel />
<View id="Settings" paddingTop="90px">
    <menu class="settings">
        <section>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <li
                class="list-item"
                onclick={() => {
                    localStorage.setItem("cards", "[]");
                    $cards = JSON.parse(localStorage.getItem("cards"));
                }}
            >
                Clear ALL data
            </li>
        </section>
        <section style="padding: var(--padding)">
            Find a bug? Have a problem, question or idea? Contact me @ayndqy -
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

    li.list-item {
        display: flex;
        align-items: center;
        line-height: 1;
        padding: var(--padding) var(--padding);
        transition: background var(--transition);
        cursor: pointer;
    }

    li.list-item:hover {
        background: var(--hover);
    }
</style>
