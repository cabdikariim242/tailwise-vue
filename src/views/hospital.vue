<template>


  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] "
      
      >
      <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >General Report</h2>


      <div  :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'flex' : 'hidden',
      ]"
      class=" relative flex gap-6 "
      
      >

       <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >General Report</h2>
        
      
  </div>


  </div>


    <div class=" z-0 bg-white shadow-lg rounded-2xl p-6 w-[800px] ml-[100px] mt-[200px]">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div class="flex gap-2 mb-2 md:mb-0">
        <button class="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700">Custom Date</button>
        <button class="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700">19 Jul, 2025 - 19 Aug, 2025</button>
      </div>
      <div class="flex gap-3 text-sm text-blue-600 font-medium">
        <button class="hover:underline">Export to PDF</button>
        <button class="hover:underline">Show full report</button>
      </div>
    </div>

<canvas ref="chartCanvas" class="w-full h-96"></canvas>
  </div>


   <div class="bg-white shadow-lg rounded-2xl p-6 w-[350px] ml-[30px] mt-[200px] h-[350px]  z-0">
    <!-- Header -->
    <div class="flex items-center justify-between mb-3">
      <div>
        <p class="text-2xl font-semibold text-gray-900">24,782</p>
        <p class="text-sm text-gray-500">Total Patients</p>
      </div>
      <div>
        <button class="flex items-center gap-1 text-sm border border-gray-300 px-2 py-1 rounded">
          Daily
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Condition Distribution Bar -->
    <div class="w-full h-2 rounded-full overflow-hidden flex mb-5">
      <div class="bg-violet-500 w-[30%]"></div>
      <div class="bg-blue-500 w-[25%]"></div>
      <div class="bg-orange-400 w-[10%]"></div>
      <div class="bg-teal-400 w-[35%]"></div>
    </div>

    <!-- Categories -->
    <div class="grid grid-cols-2 gap-y-4 text-sm text-gray-700 mb-4">
      <div>
        <p class="font-medium">Heart Disease</p>
        <p class="text-lg font-semibold text-gray-900">2,974 <span class="text-green-600 text-sm">11% ↑</span></p>
      </div>
      <div>
        <p class="font-medium truncate">Respiratory Issues</p>
        <p class="text-lg font-semibold text-gray-900">2,556 <span class="text-green-600 text-sm">11% ↑</span></p>
      </div>
      <div>
        <p class="font-medium">Diabetes</p>
        <p class="text-lg font-semibold text-gray-900">1,696 <span class="text-green-600 text-sm">2% ↑</span></p>
      </div>
      <div>
        <p class="font-medium">Other</p>
        <p class="text-lg font-semibold text-gray-900">1,278 <span class="text-green-600 text-sm">2% ↑</span></p>
      </div>
    </div>

    <!-- Footer Button -->
    <button class="w-full mt-2 border border-gray-300 text-gray-700 text-sm py-2 rounded-md flex items-center justify-center gap-1 hover:bg-gray-50">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M8 16l4-4 4 4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      See Full Report
    </button>
  </div>

  
</template>

 <script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

const chartCanvas = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
      datasets: [
        {
          label: 'Patient Admissions Over Time',
          data: [950, 230, 680, 750, 980, 870, 920, 980, 720, 680, 630, 550, 330, 980, 400],
          backgroundColor: 'rgba(56, 189, 248, 0.7)', // sky-400
        },
        {
          label: 'Bed Occupancy Rate Over Time',
          data: [880, 150, 590, 690, 800, 730, 810, 910, 680, 600, 420, 410, 260, 930, 530],
          backgroundColor: 'rgba(167, 139, 250, 0.7)', // violet-400
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        },
        title: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  })


})
</script>


<style>

</style>