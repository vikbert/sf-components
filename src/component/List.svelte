<script lang="ts">
  import { components } from '../service/store';
  import Component from './Component.svelte';

  let items = [];
  components.subscribe((value) => {
    items = value;
  });

  $: console.log(items);
</script>

<div class="container">
  <div class="row title-container">
    <div class="column title">
      <h1>Symfony 5.2</h1>
      <h3>Full List of Components</h3>
    </div>
    <div class="column title text-right meta">
      <h2>26x NEW components</h2>
      <h3>*compared to 2.0</h3>
    </div>
  </div>
  <div class="row">
    {#each items as item}
      <Component tooltip={item.versions.join(', ')} {item} />
    {/each}
  </div>
</div>

<style>
  .container {
    padding-top: 40px;
  }
  .title-container {
    padding-bottom: 10px;
  }
  .title {
    letter-spacing: -1px;
  }
  h1,
  h2 {
    margin-bottom: 1px;
    font-weight: 900;
  }
  .meta {
    color: rgba(0, 128, 0, 0.63);
  }
</style>
