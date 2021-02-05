<script lang="ts">
  import { components } from '../service/store';
  import Component from './Component.svelte';

  let items = [];
  components.subscribe((value) => {
    items = value;
  });
</script>

<div class="container">
  <div class="list">
    {#each items as item}
      <Component tooltip={'hello world'} {item} />
    {/each}
  </div>
</div>

<style>
  .list {
    padding-top: 20px;
  }
</style>
