<script lang="ts">
  import { components } from '../service/store';
  import Component from './Component.svelte';
  import ListHeader from './ListHeader.svelte';

  let items = [];
  let count = 0;
  components.subscribe((value) => {
    items = value;
  });

  $: count = items.length;
  $: console.log(count);

</script>

<div class="container">
  <ListHeader />
</div>
<div class="container">
  <div class="grid-row">
    {#each items as item}
      <div class="grid-item centered-xy">
        <Component tooltip={item.desc} {item} />
      </div>
    {/each}
  </div>
</div>

<style>
  .grid-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .grid-item {
    flex: 1 0 20%; /* NEW */
    margin: 5px;
    min-width: 190px;
    outline: 1px solid #dedede;
  }
</style>
