<template>
  <div class="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-3xl mx-auto mt-10 relative border">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#e6f4f1] flex items-center justify-center">
        <i class="fa-solid fa-file text-[#2dd4bf]"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">36k Products Shipped</h2>
        <p class="text-sm text-gray-500">Across 14 warehouses</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
      </div>
    </div>

    <!-- Chart -->
    <div class="w-full h-[100px]">
      <Line :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#2dd4bf]"></span>
        <span>Total Shipped</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cbd5e1]"></span>
        <span>Warehouses</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)

export default {
  name: 'ShippedChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Total Shipped',
            data: [10, 22, 35, 40, 38, 43, 45],
            backgroundColor: 'rgba(45, 212, 191, 0.2)',
            borderColor: '#2dd4bf',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
          },
          {
            label: 'Warehouses',
            data: [15, 20, 25, 30, 28, 34, 32],
            backgroundColor: 'rgba(203, 213, 225, 0.2)',
            borderColor: '#cbd5e1',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            borderDash: [4, 4],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      },
    }
  },
}
</script>
