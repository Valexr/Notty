<script lang="ts" module>
    import { autofocus } from '$lib/actions/autofocus';
    import { searchText, searchedCards } from '$lib/stores';
    import View from '$lib/components/View.svelte';
    import BackPanel from '$lib/components/BackPanel.svelte';
    import CardList from '$lib/components/Card/CardList.svelte';
</script>

<script lang="ts">
    $searchText = '';
</script>

<BackPanel>
    <input
        type="text"
        class="search"
        placeholder="Start your search here"
        use:autofocus
        bind:value={$searchText}
    />
</BackPanel>

<View id="CardListSearch" paddingTop="90px">
    <CardList data={$searchedCards} swipeable={false}>
        <p>Can't find anything</p>
    </CardList>
</View>

<style>
    input.search {
        width: 100%;
        background: transparent;
        padding: var(--padding-s);
        border: none;
        line-height: 1.5rem;
        transition: border var(--transition);
        -webkit-touch-callout: default;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
</style>
