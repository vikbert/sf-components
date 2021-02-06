<script lang="ts">
  import { filterTag } from '../service/store';
  export let tag: string = '';

  const setFilterTag = () => {
    filterTag.set(tag);
  };
</script>

<button
  class="is-rounded"
  class:is-warning={tag === 'framework'}
  class:is-info={tag === 'core'}
  class:is-primary={tag === 'application'}
  class:is-success={tag === 'utility'}
  on:click={setFilterTag}
>
  {tag}
</button>

<style>
  button {
    font-size: 1.3rem;
    padding: 0.1rem 1.5rem;
  }
</style>
