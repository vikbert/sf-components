<script lang="ts">
    import Header from './component/Header.svelte';
    import Navigation from './navigation/Navigation.svelte';
    import Footer from './footer/Footer.svelte';
    import SymfonyComponents from './component/List.svelte';
    import SymfonyFlows from './flows/List.svelte';
    import SymfonyPackages from './package/ChartContainer.svelte';
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
        <SymfonyFlows />
    {:else if 'packages' === tab}
        <SymfonyPackages />
    {:else}
        <SymfonyComponents />
    {/if}
</main>

<Footer />
