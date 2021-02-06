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
</main>

<FooterShape>
  <div class="centered-xy">vikbert ® 2021</div>
</FooterShape>
