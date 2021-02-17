<script lang="ts">
    import Show from './Show.svelte';
    import type { Flow } from '../type/Flow';
    export let item: Flow;
    let openPopup: boolean = false;

    const handleOpenPopup = () => {
        openPopup = true;
    };

    const handleClosePopup = () => {
        openPopup = false;
    };
</script>

{#if openPopup}
    <Show {item} {openPopup} closeCallback={handleClosePopup} />
{/if}

<div class="card shadow-lg" data-tooltip={item.description}>
    <div class="title">
        <h5 class="opacity-75">{item.name}</h5>
    </div>
    <div class="content text-centered">
        <a href="#/" alt="open for play">
            <img
                src={'flows/' + item.file + '.png'}
                alt={item.name}
                on:click={handleOpenPopup}
            />
        </a>
    </div>
    <div class="action px-2">
        <span
            class="iconify"
            data-icon="fa-solid:play-circle"
            data-inline="false"
        />
        <a href="#/" on:click={handleOpenPopup}>
            <span>play</span>
        </a>
        <span class="licence opacity-75">MIT</span>
    </div>
</div>

<style>
    .content {
        padding: 1rem 2rem;
    }
    .action {
        border-top: 1px solid #dededeaf;
        height: 50px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 30px 1fr 30px;
        align-items: center;
    }
    .licence {
        font-size: 13px;
    }
</style>
