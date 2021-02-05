<script lang="ts">
  export let tooltip: string = "";
  export let item: Component;
</script>

<button data-tooltip={tooltip} class="item is-cleared is-rounded">
  {item.name}
</button>

<style>
  button {
    color:black !important;
    font-size: 20px;
  }
</style>
