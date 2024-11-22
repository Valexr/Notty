<script lang="ts">
    let { fontSize = "1.5rem", children } = $props();
</script>

<i class="material-icons-outlined" style="--font-size: {fontSize};">
    {@render children?.()}
</i>

<style>
    i.material-icons-outlined {
        font-size: var(--font-size);
        display: inline-block;
        color: inherit;
    }
</style>
