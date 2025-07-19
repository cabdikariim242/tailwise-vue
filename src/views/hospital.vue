<template>
  <div
    class="absolute top-[300px] right-[60px] w-[300px] h-[280px] rounded-xl shadow-lg border border-gray-200 bg-white p-4 overflow-hidden"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-2">
      <div>
        <p class="text-xs text-gray-500">Total Patients</p>
        <p class="text-xl font-bold text-gray-900">24,782</p>
      </div>
      <div>
        <select class="text-xs text-gray-500 bg-gray-100 rounded p-1">
          <option>Daily</option>
          <option>Weekly</option>
        </select>
      </div>
    </div>

    <!-- Chart canvas -->
    <div class="w-full h-[60px] mb-4">
      <canvas id="patientChart"></canvas>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div>
        <p class="text-xs">Heart Disease</p>
        <p class="font-semibold">2,974 <span class="text-green-500 text-xs">11% ↑</span></p>
      </div>
      <div>
        <p class="text-xs">Respiratory Issues</p>
        <p class="font-semibold">2,556 <span class="text-green-500 text-xs">11% ↑</span></p>
      </div>
      <div>
        <p class="text-xs">Diabetes</p>
        <p class="font-semibold">1,696 <span class="text-green-500 text-xs">2% ↑</span></p>
      </div>
      <div>
        <p class="text-xs">Other</p>
        <p class="font-semibold">1,278 <span class="text-green-500 text-xs">2% ↑</span></p>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-4 text-center">
      <button class="text-sm text-blue-600 hover:underline">See Full Report</button>
    </div>

     <!-- duplicate 2 -->
    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="lg:top-0 md:top-0 top-[250px] left-0 right-0 h-[280px] mt-[880px] lg:mt-[200px] md:mt-[200px] ml-[10px] lg:ml-[760px] md:ml-[500px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
       <i class="fa-solid fa-bolt"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">3.7k Orders Processed</h2>
        <p class="text-sm text-gray-500">Across 9 regions</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="w-full h-full pb-20">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartShipped"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Order Volume</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cf0707]"></span>
        <span>Coverage Area</span>
      </div>
    </div>
    </div>
  </div>


    <!-- duplicate 2 -->
    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="lg:top-0 md:top-0 top-[250px] left-0 right-0 h-[280px] mt-[880px] lg:mt-[200px] md:mt-[200px]  mr-[600px] ml-[100px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
       <i class="fa-solid fa-bolt"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">3.7k Orders Processed</h2>
        <p class="text-sm text-gray-500">Across 9 regions</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="w-full h-full pb-20">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
   
<canvas id="patientChart"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Order Volume</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cf0707]"></span>
        <span>Coverage Area</span>
      </div>
    </div>

    <!-- duplicate 3  -->
   <!-- Total Patients & Dropdown -->
    <div class="flex justify-between items-center mb-2">
      <div>
        <h2 class="text-2xl font-semibold text-gray-800">24,782</h2>
        <p class="text-sm text-gray-500">Total Patients</p>
      </div>
      <select v-model="selectedOption" class="text-sm border border-gray-300 rounded px-2 py-1">
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 my-4"></div>

    <!-- Progress Bar -->
    <p class="text-sm text-gray-500 mb-1">Medical condition distribution</p>
    <div class="h-2 w-full rounded-full bg-gray-200 overflow-hidden mb-4 flex">
      <div class="bg-sky-400" :style="{ width: heartDiseasePercent + '%' }"></div>
      <div class="bg-blue-300" :style="{ width: respiratoryPercent + '%' }"></div>
      <div class="bg-orange-300" :style="{ width: diabetesPercent + '%' }"></div>
      <div class="bg-emerald-400" :style="{ width: otherPercent + '%' }"></div>
    </div>

    <!-- Condition List -->
    <div class="grid grid-cols-2 text-sm text-gray-700 gap-y-4">
      <div>
        <p class="font-medium">Heart Disease</p>
        <p class="text-lg font-semibold">2,974 <span class="text-green-500 text-sm font-normal">11% ↑</span></p>
      </div>
      <div>
        <p class="font-medium">Respiratory Is...</p>
        <p class="text-lg font-semibold">2,556 <span class="text-green-500 text-sm font-normal">11% ↑</span></p>
      </div>
      <div>
        <p class="font-medium">Diabetes</p>
        <p class="text-lg font-semibold">1,696 <span class="text-green-500 text-sm font-normal">2% ↑</span></p>
      </div>
      <div>
        <p class="font-medium">Other</p>
        <p class="text-lg font-semibold">1,278 <span class="text-green-500 text-sm font-normal">2% ↑</span></p>
      </div>
    </div>

    <!-- Footer Button -->
    <button class="mt-6 w-full border border-dashed border-gray-300 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50">
      See Full Report
    </button>
  </div>
  
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

// Register Chart.js components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

onMounted(() => {
  nextTick(() => {
    const ctx = document.getElementById("patientChart");
    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Heart", "Respiratory", "Diabetes", "Other"],
          datasets: [
            {
              label: "Conditions",
              data: [2974, 2556, 1696, 1278],
              backgroundColor: ["#60a5fa", "#4ade80", "#facc15", "#f87171"],
              borderRadius: 4,
              barThickness: 14
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.parsed.y} patients`;
                }
              }
            }
          },
          scales: {
            x: {
              display: false
            },
            y: {
              display: false
            }
          }
        }
      });
    }
  });
});
</script>




<!-- 
 <script>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  Title,
  Filler,
  ArcElement
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  Title,
  Filler,
  ArcElement
);

export default {
  name: 'HomeView',
  data() {
    return {
      dateFilter: 'custom',
      isScrollingUp: true,
      lastScrollY: window.scrollY,
      options: ['Daily', 'Monthly', 'Yearly'],
      selected: 'Daily',
    };
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingUp = currentScrollY < this.lastScrollY;
      this.lastScrollY = currentScrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    const ctx = document.getElementById("patientChart");
    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Heart", "Respiratory", "Diabetes", "Other"],
          datasets: [
            {
              label: "Conditions",
              data: [2974, 2556, 1696, 1278],
              backgroundColor: ["#60a5fa", "#4ade80", "#facc15", "#f87171"],
              borderRadius: 4,
              barThickness: 14
            },
            {
              type: 'line',
              label: "Condition Trend",
              data: [2700, 2500, 1600, 1300],
              borderColor: "#1e3a8a",
              backgroundColor: "#1e3a8a20",
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom"
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.parsed.y} patients`;
                }
              }
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Condition Types"
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Count"
              }
            }
          }
        }
      });
    }
  }
};
</script> -->