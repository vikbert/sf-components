<script lang="ts">
  export let count: number = 0;
</script>

<div class="text-centered">
  <div class="row title-container">
    <div class="column">
      <h1>Symfony 5.2</h1>
      <h3>Full List of {count}x Components</h3>
    </div>
  </div>
  <div class="column meta">
    <h2>26x NEW components</h2>
    <h3>*compared to 2.0</h3>
  </div>
</div>

<style>
  .title-container {
    padding: 10rem;
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
