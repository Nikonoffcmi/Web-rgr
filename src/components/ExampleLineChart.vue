<template>
    <div>
        <line-chart
        :width="500"
        :height="300"
        :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
        :datasets="displayedDatasets"
        :options="$options.options"
        ></line-chart>
    </div>
</template>

<script>
import numeral from 'numeral';
import LineChart from './LineChart';

const datasets = {
    2023: {
        label: 'Данные 1',
        borderColor: 'rgba(50, 115, 220, 0.5)',
        backgroundColor: 'rgba(50, 115, 220, 0.1)',
        data: [300, 700, 450, 750, 450]
    },
    2022: {
        label: 'Данные 2',
        borderColor: 'rgba(255, 56, 96, 0.5)',
        backgroundColor: 'rgba(255, 56, 96, 0.1)',
        data: [600, 550, 750, 250, 700]
    },
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: value => numeral(value).format('0,0')
            }
        }
    },
    plugins: {
        tooltip: {
            mode: 'index',
            callbacks: {
                label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat().format(context.parsed.y);
                        }
                        return label;
                    }
            }
    }    
    },
};

export default {
    name: 'line_chart',
    datasets,
    options,
    components: {
        LineChart
    },
    data() {
        return {
        selectedYears: [2023, 2022]
        };
    },
    computed: {
        displayedDatasets() {
        return this.selectedYears.map(year => datasets[year]);
        }
    }
}
</script>
