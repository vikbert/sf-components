<script lang="ts">
  import ListItem from './ListItem.svelte';
  import { components, searchKey, filterTag } from '../service/store';
  import ListFilter from './ListFilter.svelte';
  import ListHeader from './ListHeader.svelte';

  let items: any[] = [],
    filteredItems: any[],
    count: number,
    tag: string,
    search: string;

  components.subscribe((value) => {
    items = value;
  });

  searchKey.subscribe((value) => {
    search = value;
  });

  filterTag.subscribe((value) => {
    tag = value;
  });

  $: {
    count = items.length;

    if (!search || !tag) {
      filteredItems = items;
    }

    if (search && search.length !== 0) {
      const searchLowerCase = search.toLowerCase();
      filteredItems = items.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchLowerCase) ||
          item.desc.toLowerCase().includes(searchLowerCase)
        );
      });
    }
  }
</script>

<div class="container">
  <ListFilter />
</div>
<div class="container text-centered">
  <div class="grid-row">
    {#each filteredItems as item}
      <ListItem tooltip={item.desc} {item} />
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
      max-width: 99rem;
      margin: 0 auto;
    }
  </style>
</svelte:head>
