<script lang="ts" module>
    import { cards, activeCards } from '$lib/stores';
    import { pathName, pathParams } from '$lib/router/path';
    import { navigate } from '$lib/router/navigate';
    import Header from '$lib/components/Header.svelte';
    import View from '$lib/components/View.svelte';
    import Icon from '$lib/components/Icon/Icon.svelte';
    import IconButton from '$lib/components/Icon/IconButton.svelte';
    import CardList from '$lib/components/Card/CardList.svelte';
</script>

<script lang="ts">
    const menuIsOpen = $derived(
        $pathParams ? $pathParams.get('menu') === 'open' : false,
    );
</script>

<!-- Header -->
<Header id="MainHeader">
    <h5 class="text-logo">notty</h5>
    <div class="header-icons">
        <IconButton onclick={() => cards.add()}>add</IconButton>
        <IconButton onclick={() => navigate('/search')}>search</IconButton>
        <IconButton
            onclick={() =>
                menuIsOpen ? navigate('/') : navigate('/?menu=open')}
        >
            {menuIsOpen ? 'expand_less' : 'expand_more'}
        </IconButton>
    </div>
</Header>

<!-- Navigation -->
{#if menuIsOpen}
    <View
        id="Navigation"
        zIndex={10}
        background="var(--gradient)"
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

<!-- CardList -->
<View id="CardList" paddingTop="90px">
    <CardList data={$activeCards}>
        <p>Tap <Icon>add</Icon> to add new card</p>
    </CardList>
</View>

<style>
    /* Logo */
    h5.text-logo {
        padding: var(--padding-s);
        font-size: 1.25rem;
        font-family: var(--font-family-headline);
    }

    /* Navigation */
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
