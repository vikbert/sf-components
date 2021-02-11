<script lang="ts">
    import PackageChart from './Chart.svelte';

    const fetchImage = (async () => {
        const response = await fetch(
            'https://sf-components.vercel.app/packages.json',
        );

        return await response.json();
    })();
</script>

<div class="container centered-xy">
    {#await fetchImage}
        <p>Loading ...</p>
    {:then packages}
        <PackageChart data={packages.data} />
    {:catch error}
        <p>An error occurred</p>
    {/await}
</div>
