<script lang="ts" module>
    import { archivedCards } from "$lib/stores";
    import View from "$lib/components/View.svelte";
    import BackPanel from "$lib/components/BackPanel.svelte";
    import CardList from "$lib/components/Card/CardList.svelte";
</script>

<BackPanel />
<View id="CardListArchive" paddingTop="90px">
    <CardList data={$archivedCards} editable={false}>
        <p>Archive is empty</p>
    </CardList>
</View>
