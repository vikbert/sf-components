<script lang="ts">
    import type { Flow } from '../type/Flow';

    export let item: Flow;
    const imageUrl = 'flows/' + item.file + '.gif';
    const fetchImage = (async () => {
        const response = await fetch(imageUrl);

        return await response.json();
    })();
</script>

{#await fetchImage}
    <p>loading the image ...</p>
{:then data}
    <img src={data.message} alt={item.name} />
{:catch error}
    <p>loading image failed</p>
{/await}
