<script lang="ts">
  import { searchKey } from '../service/store';
  import Github from './GitHub.svelte';

  let search: string = '';
  searchKey.subscribe((value) => {
    search = value;
  });

  const submitSearch = () => {
    searchKey.set(search);
  };
</script>

<nav class="topbar">
  <div class="container space-between">
    <div class="logo">
      <a href="https://components.xzhou.vercel.app/">
        <span
          class="iconify"
          data-icon="mdi:symfony"
          data-inline="false"
          width="30"
        /></a
      >
      <span class="mx-1 bold hide-mobile">Symfony Components</span>
    </div>
    <div class="input-wrapper">
      <input
        type="text"
        placeholder="search by name and description"
        bind:value={search}
        on:keyup={submitSearch}
      />
      <span class="iconify" data-icon="fluent:search-28-filled" width="20" />
    </div>
    <Github projectName="sf-components" />
  </div>
</nav>

<style>
  a {
    line-height: 1.4rem;
  }
  .input-wrapper {
    display: grid;
    grid-template-columns: 1fr 17px;
    gap: 8px;
    justify-content: space-between;
    padding: 1px 15px;
    width: 350px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 20px;
    border: 1px solid #bdb9b9;
  }
  @media screen and (max-width: 500px) {
    .input-wrapper {
      width: 200px;
    }
  }
  input {
    border: none;
    outline: none;
    padding: 0;
    height: 2.8rem;
  }
  input:focus {
    border: none;
    outline: none !important;
  }
</style>
