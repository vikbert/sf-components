<script lang="ts">
    import type { Flow } from '../type/Flow';
    import { Grid } from '@pixss/svelte';
    import Item from './Item.svelte';
    const items: Flow[] = [
        {
            name: 'Symfony Event Cycle',
            description:
                'During the handling of an HTTP request, the Symfony framework (or any application using the HttpKernel component) dispatches some events which you can use to modify how the request is handled, these events e.g. kernel.request, kernel.controller, kernel.response ...',
            file: 'symfony_event_cycle',
            duration: 21,
        },
        {
            name: 'Symfony Messenger',
            description:
                'The Messenger component helps applications send and receive messages to/from other applications or via message queues.',
            file: 'symfony_messenger',
            duration: 15,
        },
        {
            name: 'Symfony Event Cycle',
            description:
                'Simulate the flow of symfony build-in kern events from request to response',
            file: 'symfony_event_cycle',
            duration: 21,
        },
        {
            name: 'Symfony Event Cycle',
            description:
                'Simulate the flow of symfony build-in kern events from request to response',
            file: 'symfony_event_cycle',
            duration: 21,
        },
        {
            name: 'Symfony Event Cycle',
            description:
                'Simulate the flow of symfony build-in kern events from request to response',
            file: 'symfony_event_cycle',
            duration: 21,
        },
    ];
</script>

<Grid>
    {#each items as item}
        <Item {item} />
    {/each}
</Grid>
