<script lang="ts">
    import FilterButton from './FilterButton.svelte';
</script>

<div class="row filter-container text-centered">
    <div class="column">
        <h5 class="opacity-50">Filter by Feature</h5>
        <FilterButton tag="framework"/>
        <FilterButton tag="core"/>
        <FilterButton tag="application"/>
        <FilterButton tag="utility"/>
    </div>
</div>

<style>
  .filter-container {
    padding: 2rem 0;
  }

  h5 {
    margin-bottom: 0.4rem;
  }
</style>
