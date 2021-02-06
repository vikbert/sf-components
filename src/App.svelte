<script lang="ts">
  import FooterShape from './component/FooterShape.svelte';
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

<FooterShape>
  <div class="centered-xy">
    vikbert ® 2021
  </div>
</FooterShape>
<style>
  .copyright {
    padding: 5rem 0;
  }
</style>
