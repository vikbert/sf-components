<script lang="ts">
  import Header from './component/Header.svelte';
  import Components from './component/List.svelte';
</script>

<header class="header">
  <Header />
</header>

<main class="main">
  <Components />

  <div class="copyright centered-xy">
    <h5 class="opacity-75">vikbert © 2021</h5>
  </div>
</main>

<style>
  main {
    padding-top: 2rem;
    height: 100vh;
  }
  .copyright {
    padding: 5rem 0;
  }
</style>
