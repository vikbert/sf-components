<script lang="ts">
    import PackageChart from './Chart.svelte';

    const fetchImage = (async () => {
        const response = await fetch(
            'https://raw.githubusercontent.com/vikbert/sf-components/master/public/packages.json',
        );

        return await response.json();
    })();
</script>

<div class="container centered-xy">
    {#await fetchImage}
        <p>Loading ...</p>
    {:then data}
        <PackageChart data={data.data} />
    {:catch error}
        <p>An error occurred</p>
    {/await}
</div>
