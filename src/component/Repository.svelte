<script lang="ts">
    export let width: number = 30;
    export let githubAuthor: string='';
    export let githubProjectName: string = '';

    let info: [string, string] = [githubAuthor, githubProjectName];
</script>

<div class="github">
    <a href={'https://github.com/' + info.join('/')}>
    <span
        class="iconify"
        data-icon="ant-design:github-outlined"
        data-inline="false"
        {width}
    ></span>
    </a>
</div>

<style>
  a {
    line-height: 1.5rem;
  }
</style>
