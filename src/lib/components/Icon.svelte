<script lang="ts">
    let { fontSize = "1.5rem", children } = $props();
</script>

<i class="material-icons-outlined" style="font-size: {fontSize} !important;">
    {@render children?.()}
</i>

<style>
    i.material-icons-outlined {
        display: inline-block;
        color: inherit;
    }
</style>
