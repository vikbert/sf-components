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
    /**
    * ----------------------------------------
    * animation tilt-in-fwd-tr
    * ----------------------------------------
    */
    .tilt-in-fwd-tr {
      -webkit-animation: tilt-in-fwd-tr 0.6s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes tilt-in-fwd-tr {
      0% {
        -webkit-transform: rotateY(20deg) rotateX(35deg)
          translate(300px, -300px) skew(-35deg, 10deg);
        transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
          skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
          skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    }
    @keyframes tilt-in-fwd-tr {
      0% {
        -webkit-transform: rotateY(20deg) rotateX(35deg)
          translate(300px, -300px) skew(-35deg, 10deg);
        transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
          skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
          skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
    }
  </style>
</svelte:head>
