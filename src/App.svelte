<script lang="ts">
  import Components from './component/List.svelte';
  import Github from './component/github.svelte';
</script>

<header class="header">
  <nav class="topbar">
    <div class="container space-between">
      <div class="logo">
        <span
          class="iconify"
          data-icon="mdi:symfony"
          data-inline="false"
          width="30"
        />
        <span class="mx-1 bold">Symfony Components</span>
      </div>
      <Github projectName="sf-components" />
    </div>
  </nav>
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
