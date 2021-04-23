<script lang="ts">
    import ListItem from './ListItem.svelte';
    import { components,  filter as filterState} from '../service/store';
    import ListFilter from './ListFilter.svelte';
    import ListHeader from './ListHeader.svelte';
    import type Component from '../type/Component';
    import type Filter from '../type/Filter';

    let items: Component[] = [],
        filter: Filter;

    components.subscribe((value: Component[]) => {
        items = value;
    });

    filterState.subscribe((value) => {
        filter = value;
    });

    $: {
        if (!filter.search || !filter.tag) {
            components.recovery();
        }

        if (filter.search && filter.search.length !== 0) {
            components.search(filter.search);
        }
    }
</script>

<div class="container text-centered">
    <ListFilter />
    <div class="grid-row">
        {#each items as item}
            <ListItem tooltip={item.desc} {item} />
        {/each}
    </div>
</div>

<div class="container">
    <ListHeader count={items.length} />
</div>

<svelte:head>
    <style>
        .grid-row {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            max-width: 99rem;
            margin: 0 auto;
        }
    </style>
</svelte:head>
