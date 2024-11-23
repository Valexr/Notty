<script lang="ts" module>
    import { cards, activeCards } from '$lib/stores';
    import { navigate } from '$lib/router/navigate';
    import Header from '$lib/components/Header.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import View from '$lib/components/View.svelte';
    import Icon from '$lib/components/Icon/Icon.svelte';
    import IconButton from '$lib/components/Icon/IconButton.svelte';
    import CardList from '$lib/components/Card/CardList.svelte';
</script>

<script lang="ts">
    let menuIsOpen = $state(false);
</script>

<Header id="MainHeader">
    <h5 class="text-logo">notty</h5>
    <div class="header-icons">
        <IconButton onclick={() => cards.add()}>add</IconButton>
        <IconButton onclick={() => navigate('/search')}>search</IconButton>
        <IconButton onclick={() => (menuIsOpen = !menuIsOpen)}>
            {menuIsOpen ? 'expand_less' : 'expand_more'}
        </IconButton>
    </div>
</Header>

<Menu open={menuIsOpen} />

<View id="CardList" paddingTop="90px">
    <CardList data={$activeCards}>
        <p>Tap <Icon>add</Icon> to add new card</p>
    </CardList>
</View>

<style>
    .text-logo {
        padding: var(--padding-s);
        font-size: 1.25rem;
        font-family: var(--font-family-headline);
    }
</style>
