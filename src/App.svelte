<script lang="ts">
    import FooterShape from './footer/FooterShape.svelte';
    import Header from './component/Header.svelte';
    import Components from './component/List.svelte';
    import Navigation from './navigation/Navigation.svelte';
    import Package from './package/PackageChart.svelte';
    import { currentTab } from './service/store';
import Footer from './footer/Footer.svelte';

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
        <Package />
    {/if}
</main>

<Footer/>
