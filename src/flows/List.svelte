<script lang="ts">
    import type { Flow } from '../type/Flow';
    import { Grid } from '@pixss/svelte';
    import Item from './Item.svelte';
    const items: Flow[] = [
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
