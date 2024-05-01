<template>
    <div>
        <div class="field is-grouped">
        <div class="control">
            <label class="checkbox">
            <input type="checkbox" :value="2023" v-model="selectedYears">
            Продажи за 2023
            </label>
        </div>
        <div class="control">
            <label class="checkbox">
            <input type="checkbox" :value="2022" v-model="selectedYears">
            Продажи за 2022
            </label>
        </div>
        </div>

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
        label: 'Продажи за 2023',
        borderColor: 'rgba(50, 115, 220, 0.5)',
        backgroundColor: 'rgba(50, 115, 220, 0.1)',
        data: [300, 700, 450, 750, 450]
    },
    2022: {
        label: 'Продажи за 2022',
        borderColor: 'rgba(255, 56, 96, 0.5)',
        backgroundColor: 'rgba(255, 56, 96, 0.1)',
        data: [600, 550, 750, 250, 700]
    },
};

const options = {
    scales: {
        yAxes: [{
        ticks: {
            beginAtZero: true,
            callback: value => numeral(value).format('0,0')
        }
        }]
    },
    tooltips: {
        mode: 'index',
        callbacks: {
        label(tooltipItem, data) {
            const label = data.datasets[tooltipItem.datasetIndex].label;
            const value = numeral(tooltipItem.yLabel).format('0,0.0');

            return `${label}: ${value}`;
        }
        }    
    },
};

export default {
    name: 'monthly-sales-chart',
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
