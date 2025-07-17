<template>
  <div class="bg-[#f7fafc] p-4 min-h-screen mt-[350px] ml-[100px]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

      <!-- General Report Section -->
      <div class="md:col-span-2 bg-white rounded-lg shadow p-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">General Report</h2>
          <div class="flex gap-2 items-center">
            <input type="date" class="border rounded px-2 py-1" />
            <input type="date" class="border rounded px-2 py-1" />
            <button class="text-blue-600 underline">Show full report</button>
          </div>
        </div>

        <!-- Chart -->
        <canvas id="admissionChart" height="140"></canvas>
      </div>

      <!-- Patient Overview -->
      <div class="bg-white rounded-lg shadow p-4">
        <h2 class="text-lg font-semibold">Patient Overview</h2>
        <p class="text-2xl font-bold mt-2">24,782 <span class="text-sm font-normal text-gray-500">Total Patients</span></p>
        <select class="mt-2 border rounded px-2 py-1">
          <option>Daily</option>
        </select>

        <p class="mt-4 text-sm text-gray-600">Medical condition distribution</p>
        <div class="h-2 w-full bg-gray-200 rounded overflow-hidden my-2 flex">
          <div class="h-full bg-cyan-500 w-[80%]"></div>
          <div class="h-full bg-blue-400 w-[10%]"></div>
          <div class="h-full bg-orange-400 w-[5%]"></div>
          <div class="h-full bg-gray-400 w-[5%]"></div>
        </div>

        <div class="mt-4 space-y-2 text-sm">
          <div class="flex justify-between">
            <span>Heart Disease</span>
            <span>2,974 <span class="text-green-600">11% ↑</span></span>
          </div>
          <div class="flex justify-between">
            <span>Respiratory Issues</span>
            <span>2,556 <span class="text-green-600">11% ↑</span></span>
          </div>
          <div class="flex justify-between">
            <span>Diabetes</span>
            <span>1,696 <span class="text-green-600">2% ↑</span></span>
          </div>
          <div class="flex justify-between">
            <span>Other</span>
            <span>1,278 <span class="text-green-600">2% ↑</span></span>
          </div>
        </div>

        <button class="mt-4 text-blue-600 underline">See Full Report</button>
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
