<script>
    import { onMount, onDestroy } from 'svelte';
    export let countdown = 0;

    let timer = null;
    const clearTimer = () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    };

    onMount(() => {
        timer = setInterval(() => {
            --countdown;
        }, 1000);
    });

    onDestroy(() => {
        clearTimer();
    });

    $: {
        if (countdown === 0) {
            clearTimer();
        }
    }
</script>

{#if countdown}
    <div class="countdown">
        <span>{countdown}</span>
    </div>
{:else}
   <span> Animation is now repeated.</span>
{/if}

<style>
    .countdown {
        width: 6rem;
        height: 6rem;
        padding: 6px;
        margin: 6px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid green;
    }
    span {
        font-size: 3rem;
        color: green;
    }
</style>
