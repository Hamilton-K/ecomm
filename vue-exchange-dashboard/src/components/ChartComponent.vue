<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps(['labels', 'data']);
const canvas = ref(null);
let chart;

const renderChart = () => {
  if (chart) chart.destroy();
  chart = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels: props.labels,
      datasets: [
        {
          label: 'Exchange Rate',
          data: props.data,
          backgroundColor: 'rgba(59, 130, 246, 0.6)',
        },
      ],
    },
  });
};

onMounted(renderChart);
watch(() => [props.labels, props.data], renderChart);
</script>
