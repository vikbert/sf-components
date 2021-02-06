<script lang="ts">
  export let tooltip: string = 'no description';
  export let item: Component;

  const limit = 80;
  let validTooltip: string = tooltip;
  $: {
    if (tooltip && tooltip.length > limit) {
      validTooltip = tooltip.substring(0, limit + 1) + ' ...';
    }
  }
</script>

<a href={'https://symfony.com/components/' + item.name} target="_blank">
  <div class="grid-item centered-xy" data-tooltip={validTooltip}>
    {item.name}
  </div>
</a>
