<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    const fetchMarkdown = (async () => {
        const response = await fetch('https://raw.githubusercontent.com/sitepoint-editors/awesome-symfony/master/README.md');
        const data = await response.blob();

        return await data.text();
    })();
</script>

<div class="container awesome">
    {#await fetchMarkdown}
        loading markdown ...
    {:then result}
        <SvelteMarkdown source={result} />
    {:catch error}
        laoding markdown failed : {error}
    {/await}
</div>
<style>
    h1 {
        text-align: center;
    }
</style>
