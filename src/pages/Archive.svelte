<script>
    import { cards } from "$lib/stores";
    import View from "$components/View.svelte";
    import BackPanel from "$components/BackPanel.svelte";
    import CardList from "$components/CardList.svelte";

    $: data = $cards.filter((card) => {
        if (card.state === "archived") return true;
        return false;
    });
</script>

<BackPanel />
<View id="CardListArchive" paddingTop="90px">
    <CardList {data} editable={false}>
        <p>Archive is empty</p>
    </CardList>
</View>
