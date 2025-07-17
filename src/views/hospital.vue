<template>
  <div class="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-3xl mx-auto mt-[300px] relative border">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
        <i class="fa-solid fa-database text-[#1e3a8a]"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">41k Products Sold</h2>
        <p class="text-sm text-gray-500">Across 21 stores</p>
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
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Products Sold</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cbd5e1]"></span>
        <span>Store Locations</span>
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
  name: 'HomeView',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Products Sold',
            data: [10, 20, 18, 30, 28, 40, 41],
            backgroundColor: 'rgba(30, 58, 138, 0.2)',
            borderColor: '#1e3a8a',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
          },
          {
            label: 'Store Locations',
            data: [-12, 22, 15, 27, 25, 35, 30],
            backgroundColor: 'rgba(203, 213, 225, 0.2)',
            borderColor: '#cbd5e1',
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            borderDash: [5, 5],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
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
