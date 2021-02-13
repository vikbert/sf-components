<script lang="ts">
    import Countdown from './CountDown.svelte';
    import type { Flow } from '../type/Flow';

    export let item: Flow;
    export let openPopup: boolean;
    export let closeCallback: () => void;
</script>

<div class="overlay" class:open={openPopup}>
    <div class="card">
        <div class="content">
            <img src={'flows/' + item.file + '.gif'} alt={item.name} />
        </div>
        <div class="actions space-between">
            <Countdown countdown={item.duration} />
            <button
                class="is-secondary is-outlined is-rounded"
                on:click={closeCallback}
            >
                close
            </button>
        </div>
    </div>
</div>

<style>
    .content {
        padding: 0 1rem;
        min-width: 76rem;
        min-height: 40rem;
    }
    .actions {
        padding: 0 2rem;
    }
</style>
