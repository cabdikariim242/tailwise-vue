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
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'HomeView',
  setup() {
    onMounted(() => {
      const ctx = document.getElementById('admissionChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
          datasets: [
            {
              label: 'Patient Admissions Over Time',
              data: [370, 580, 950, 1000, 800, 670, 100, 230, 910, 880, 980, 300, 740, 930, 680],
              backgroundColor: '#63b3ed',
            },
            {
              label: 'Bed Occupancy Rate Over Time',
              data: [310, 260, 140, 120, 630, 700, 220, 240, 480, 430, 890, 420, 130, 940, 530],
              backgroundColor: '#81e6d9',
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 1000,
              ticks: {
                stepSize: 200,
              }
            }
          }
        }
      });
    });
  }
}
</script>

<style scoped>
/* Optional custom styles */
</style>
