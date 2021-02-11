<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
    import dataSource from './packages.ts';

    fcRoot(FusionCharts, Charts, FusionTheme);

    const chartConfigs = {
        type: 'bar2d',
        width: '1900',
        height: '1400',
        dataFormat: 'json',
        minPlotHeightForValue: '15',
        dataSource,
    };
</script>

<div id="container">
    <SvelteFC {...chartConfigs}/>
</div>
