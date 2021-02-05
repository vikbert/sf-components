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
        <Component tooltip={item.desc} {item} />
    {/each}
  </div>
</div>

<svelte:head>
<style>
  .grid-row {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .grid-item {
    flex: 1 0 20%;
    padding: 2rem 0;
    margin: 0.8rem;
    min-width: 150px;
    outline: 1px solid #dedede;
    color: black;
    font-size: 14px;
    font-weight: 500;
  }
  .grid-item:hover {
    background-color: #7b2083;
    color: white;
  }
</style>
</svelte:head>
