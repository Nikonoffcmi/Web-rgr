<template>
    <div class="box">
        <h2 class="title is-5">График данных</h2>
        <example-line-chart></example-line-chart>
    </div>
</template>

<script>
import ExampleLineChart  from './components/ExampleLineChart.vue';

export default {
    name: 'app',
    components: {
        ExampleLineChart 
    }
}
</script>
