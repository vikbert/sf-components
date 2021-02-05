<script lang="ts">
  import Github from './component/github.svelte';
import { components } from './service/store';
  export let name: string;

  let items = [];
  const unsubscribe = components.subscribe((value) => {
    items = value;
  });
</script>

<header class="header">
  <nav class="topbar">
    <div class="container space-between">
      <div class="logo">
        <span
          class="iconify"
          data-icon="mdi:symfony"
          data-inline="false"
          width="30" />
        <span class="mx-1 bold">Symfony Components</span>
      </div>
      <Github projectName='sf-components'/>
    </div>
  </nav>
</header>
<main class="main">

</main>

<footer class="footer">
  <div class="container centered-xy">
   <div>
    vikbert
    <span class="iconify" data-icon="bx:bx-copyright" data-inline="false"></span>
    2021
   </div>
  </div>
</footer>
