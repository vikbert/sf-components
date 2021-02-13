<script lang="ts">
    import Countdown from './CountDown.svelte';
    import type { Flow } from '../type/Flow';
    export let item: Flow;
    export let openPopup: boolean;
    export let closeCallback: any = () => {};

    let done: boolean = false;
    let open = openPopup;
</script>

<div class="overlay" class:open>
    <div class="card">
        <div class="content">
            <img src={'flows/' + item.file + '.gif'} alt={item.name} />
        </div>
        <div class="actions space-between">
            <Countdown countdown={item.duration} on:completed={() => done} />
            <button class="is-secondary is-outlined is-rounded" on:click={closeCallback}>
                close
            </button>
        </div>
    </div>
</div>

<style>
    .content {
        padding: 0 1rem;
    }
    .actions {
        padding: 0 2rem;
    }
</style>
