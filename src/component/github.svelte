<script lang="ts">
  export let projectName: string = '';
  export let width: number = 30;
</script>

<div class="github">
  <a href={'https://github.com/vikbert/' + projectName}>
    <span
      class="iconify"
      data-icon="ant-design:github-outlined"
      data-inline="false"
      {width} />
  </a>
</div>
