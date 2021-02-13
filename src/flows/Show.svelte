<script lang="ts">
    import Countdown from './CountDown.svelte';
    import type { Flow } from '../type/Flow';

    export let item: Flow;
    const imageUrl = 'flows/' + item.file + '.gif';
    const fetchImage = (async () => {
        return await fetch(imageUrl);
    })();

    export let openPopup: boolean;
    export let closeCallback: () => void;
</script>

<div class="overlay" class:open={openPopup}>
    <div class="card centered-xy">
        <div class="close" on:click={closeCallback}>
            <span
                class="iconify"
                data-icon="ei:close"
                data-inline="false"
                width="5vw"
            />
        </div>
        <div class="content">
        {#await fetchImage}
            <div>loading the image ...</div>
        {:then data}
            <img src={data.url} alt={item.name} />
            <div class="actions space-between">
                <Countdown countdown={item.duration} />
            </div>
        {:catch error}
            <div>loading image failed: {error}</div>
        {/await}
    </div>
    </div>
</div>

<style>
    .card {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .close {
        position: fixed;
        top: 1rem;
        right: 1rem;
    }
    .iconify {
        color: #dedede;
    }
    .iconify:hover {
        color: red;
    }
    .content {
        padding: 0 1rem;
        min-width: 76rem;
        min-height: 40rem;
    }
    .actions {
        padding: 0 2rem;
    }
</style>
