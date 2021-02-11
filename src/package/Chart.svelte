<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';

    export let data = [];

    fcRoot(FusionCharts, Charts, FusionTheme);

    const chartConfigs = {
        type: 'bar3d',
        width: '1119',
        height: '2400',
        dataFormat: 'json',
        minPlotHeightForValue: '50',
        chart: {
            bgColor: '#f7fafc',
            caption: 'The Download-Ranking of the Symfony Packages',
            subCaption: 'the ranking in 2020',
            xAxisName: 'Packages',
            yAxisName: 'Downloads',
            numberSuffix: ' times',
            theme: 'fusion',
        },
        data,
    };
</script>

<SvelteFC {...chartConfigs}/>
