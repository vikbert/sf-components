<script lang="ts">
  export let tooltip: string = 'no description';
  export let item: Component;

  const limit = 80;
  let validTooltip: string = tooltip;
  $: {
    if (tooltip.length > limit) {
      validTooltip = tooltip.substring(0, limit + 1) + ' ...';
    }
  }
</script>

<a href={'https://symfony.com/components/' + item.name}>
  <button data-tooltip={validTooltip} class="button is-cleared is-rounded">
    {item.name}
  </button>
</a>

<style>
  button {
    color: black !important;
    font-size: 14px;
    font-weight: 700;
    opacity: 75%;
  }
</style>
