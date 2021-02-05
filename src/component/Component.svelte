<script lang="ts">
  export let tooltip: string = "";
  export let item: Component;
</script>

<button data-tooltip={tooltip} class="button is-cleared is-rounded">
  {item.name}
</button>

<style>
  button {
    color:black !important;
    font-size: 14px;
    font-weight: 700;
    opacity: 75%;
  }
</style>
