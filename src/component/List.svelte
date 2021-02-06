<script lang="ts">
  import { components, searchKey } from '../service/store';
  import Component from './Component.svelte';
  import ListFilter from './ListFilter.svelte';
  import ListHeader from './ListHeader.svelte';

  let items: any[] = [],
    filteredItems: any[] = [],
    count: number = 0,
    search: string = '';

  components.subscribe((value) => {
    items = value;
  });

  searchKey.subscribe((value) => {
    search = value;
  });

  $: {
    count = items.length;

    if (search && search.length !== 0) {
      filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      filteredItems = items;
    }
  }
</script>

<div class="container">
  <ListFilter />
</div>
<div class="container">
  <div class="grid-row">
    {#each filteredItems as item}
      <Component tooltip={item.desc} {item} />
    {/each}
  </div>
</div>

<div class="container">
  <ListHeader {count} />
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
      outline: 1px solid #8f8b8b;
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
