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
        console.log('###');

        if (countdown === 0) {
           clearTimer();
        }
    }
</script>

<div>
    {#if countdown}
        <div class="countdown"><span>{countdown}</span></div>
    {:else}
        Animation is now repeated.
    {/if}
</div>

<style>
    .countdown {
        width: 4rem;
        height: 4rem;
        padding: 4px;
        margin: 4px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid green;
    }
    span {
        font-size: 2rem;
        font-weight: bolder;
        color: green;
    }
</style>
