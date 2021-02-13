<script lang="ts">
    import type { Flow } from '../type/Flow';

    export let item: Flow;
    const imageUrl = 'flows/' + item.file + '.gif';
    const fetchImage = (async () => {
        return await fetch(imageUrl);
    })();
</script>

{#await fetchImage}
    <div>loading the image ...</div>
{:then data}
    <img src={data.url} alt={item.name} />
{:catch error}
    <div>loading image failed: {error}</div>
{/await}
