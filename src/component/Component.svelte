<script lang="ts">
  export let tooltip: string = "";
  export let item: Component;
</script>

<button data-tooltip={tooltip} class="item is-outlined is-rounded">
  {item.name}
</button>
