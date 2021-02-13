<script lang="ts">
    import Header from './component/Header.svelte';
    import Components from './component/List.svelte';
    import Flows from './flows/List.svelte';
    import Footer from './footer/Footer.svelte';
    import Navigation from './navigation/Navigation.svelte';
    import ChartContainer from './package/ChartContainer.svelte';

    import { currentTab } from './service/store';

    let tab: string;
    currentTab.subscribe((value) => {
        tab = value;
    });
</script>

<header class="header">
    <Header />
</header>

<main class="main">
    <Navigation />
    {#if 'flows' === tab}
        <Flows />
    {:else if 'packages' === tab}
        <ChartContainer />
    {:else}
        <Components />
    {/if}
</main>

<Footer />
