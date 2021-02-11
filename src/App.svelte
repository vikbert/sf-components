<script lang="ts">
    import Header from './component/Header.svelte';
    import Components from './component/List.svelte';
    import Navigation from './navigation/Navigation.svelte';
    import PackageChart from './package/PackageChart.svelte';
    import { currentTab } from './service/store';
    import Footer from './footer/Footer.svelte';
    import { QueryClientProvider } from '@sveltestack/svelte-query';

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

    {#if 'components' === tab}
        <Components />
    {:else}
        <QueryClientProvider>
            <PackageChart />
        </QueryClientProvider>
    {/if}
</main>

<Footer />
