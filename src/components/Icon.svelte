<i class="material-icons-outlined" style="font-size: {fontSize} !important;">
    <slot />
</i>

<script>
    export let fontSize = '1.5rem';
</script>

<style>
    i.material-icons-outlined {
        display: inline-block;
        color: inherit;
    }
</style>
