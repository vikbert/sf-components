<script lang="ts">
  import { filterTag } from '../service/store';
  export let tooltip: string = 'no description';
  export let item: Component;

  const limit = 80;

  let tagFromStore: string = '';
  filterTag.subscribe((value) => {
    tagFromStore = value;
  });

  let validTooltip: string = tooltip;
  let colorClass: string = '';
  $: {
    console.log('🔥' + tagFromStore);
    if (tagFromStore !== item.tag) {
      colorClass = '';
    }

    if (tagFromStore === item.tag && tagFromStore === 'framework') {
      colorClass = 'is-warning';
    }
    if (tagFromStore === item.tag && tagFromStore === 'core') {
      colorClass = 'is-info';
    }
    if (tagFromStore === item.tag && tagFromStore === 'application') {
      colorClass = 'is-primary';
    }
    if (tagFromStore === item.tag && tagFromStore === 'utility') {
      colorClass = 'is-success';
    }

    if (tooltip && tooltip.length > limit) {
      validTooltip = tooltip.substring(0, limit + 1) + ' ...';
    }
  }
</script>

<a href={'https://symfony.com/components/' + item.name} target="_blank">
<<<<<<< Updated upstream
  <div class="grid-item centered-xy" data-tooltip={validTooltip}>
=======
  <div
  class={"grid-item centered-xy tilt-in-fwd-tr " + colorClass}
  data-tooltip={validTooltip}>
>>>>>>> Stashed changes
    {item.name}
  </div>
</a>
