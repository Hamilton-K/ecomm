<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Exchange Rates Dashboard</h1>
    <select v-model="baseCurrency" class="p-2 border rounded mb-4">
      <option v-for="c in currencies" :key="c" :value="c">{{ c }}</option>
    </select>
    <ChartComponent :labels="labels" :data="values" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { getExchangeRates } from '../services/api';
import ChartComponent from './ChartComponent.vue';

const baseCurrency = ref('USD');
const currencies = ['USD', 'EUR', 'GBP', 'ZAR', 'JPY', 'AUD'];
const labels = ref([]);
const values = ref([]);

const fetchData = async () => {
  const result = await getExchangeRates(baseCurrency.value);
  labels.value = Object.keys(result.rates);
  values.value = Object.values(result.rates);
};

onMounted(fetchData);
watch(baseCurrency, fetchData);
</script>
