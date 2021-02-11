<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, {fcRoot} from 'svelte-fusioncharts';

    export let data = [];
    const count = data.length;
    const chartConfigs = {
        type: 'bar3d',
        width: '1119',
        height: '2400',
        dataFormat: 'json',
        minPlotHeightForValue: '50',
        dataSource: {
            chart: {
                bgColor: '#f7fafc',
                caption: 'The Download-Ranking of the Symfony Packages',
                subCaption: 'total downloads in 2020 for the ' + count + ' packages',
                xAxisName: 'Packages',
                yAxisName: 'Downloads',
                numberSuffix: ' times',
                theme: 'fusion',
            },
            data,
        },
    };

    fcRoot(FusionCharts, Charts, FusionTheme);
</script>

<SvelteFC {...chartConfigs}/>
