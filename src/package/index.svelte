<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
    import dataSource from './packages.ts';

    fcRoot(FusionCharts, Charts, FusionTheme);

    const chartConfigs = {
        type: 'column2d',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource,
    };
</script>

<div id="container">
    <SvelteFC {...chartConfigs}/>
</div>
