<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
    import dataSource from './chartData.ts';

    fcRoot(FusionCharts, Charts, FusionTheme);

    const chartConfigs = {
        type: 'bar3d',
        width: '1119',
        height: '2400',
        dataFormat: 'json',
        minPlotHeightForValue: '50',
        dataSource,
    };
</script>

<div class="container">
    <SvelteFC {...chartConfigs}/>
</div>
