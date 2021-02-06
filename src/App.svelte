<script lang="ts">
  import Header from './component/Header.svelte';
import Components from './component/List.svelte';
</script>

<header class="header">
  <Header/>
</header>

<main class="main">
  <Components />
</main>

<footer class="footer">
  <div class="container centered-xy">
    <div>
      vikbert
      <span class="iconify" data-icon="bx:bx-copyright" data-inline="false" />
      2021
    </div>
  </div>
</footer>

<style>
  main {
    padding-top: 2rem;
  }
</style>
