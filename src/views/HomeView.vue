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
         <span class="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
    <i class="fa-solid fa-calendar-days text-white "></i>
  </span>
         <select v-model="dateFilter" class="bg-[#223b60] text-white px-4 py-2 pr-12 pl-8 rounded-lg shadow focus:outline-none lg:w-auto md:w-auto w-full">
        <option value="custom">Custom Date</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      
  </div>


  </div>


  <!-- boxes -->


    <div  
    class=" mt-10">
      

    <div   :class="[
          'transition-colors duration-300',
          isScrollingUp ? 'top-0' : 'top-[-20px]',
        ]"
    class="top-0 left-0 right-0 h-[280px] mt-[200px] mb-[50px] ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[600px] md:mr-[450px] mr-[10px] bg-gradient-to-b from-[#1e3a8a] to-[#312e81] text-white rounded-xl shadow-lg p-6 absolute overflow-hidden border-4 border-white">
      
      <div class="flex items-center gap-2 mb-4">    <span class="w-3 h-3 rounded-full bg-gray-300"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
    </div>

    <div >

      <h2 class="text-2xl font-semibold">New feature<br>unlocked!</h2>
      <p class="text-sm text-white/80 mt-2">Boost your performance!</p>
    </div>


    <a href="#" class="mt-6 inline-block text-sm font-medium text-white hover:underline">
      Upgrade now →
    </a>

    <div class="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
  </div>



    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="lg:top-0 md:top-0 top-[250px] left-0 right-0 h-[280px] mt-[260px] lg:mt-[200px] md:mt-[200px] ml-[10px] lg:ml-[760px] md:ml-[500px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
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

    <!-- Chart Placeholder -->
    <div class="w-full h-[100px]">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartSold"></canvas>
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



  <!-- duplicate -->


    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="top-0 left-0 right-0 h-[280px] lg:mt-[550px] md:mt-[550px] mt-[820px] mb-[50px] ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[600px] md:mr-[450px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
  >
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
        <i class="fa-solid fa-copy text-gray-400"></i>
      </div>
      <div>
        <h2 class="text-lg font-semibold">36k Products Shipped</h2>
        <p class="text-sm text-gray-500">Across 14 warehouses</p>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>

      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="w-full h-[100px]">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartShipped"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#1e3a8a]"></span>
        <span>Total Shipped</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#cbd5e1]"></span>
        <span>Warehouses</span>
      </div>
    </div>
  </div>


  <!-- duplicate 2 -->
    <div
    :class="[
      'transition-colors duration-300',
      isScrollingUp ? 'lg:top-0' : 'lg:top-[-20px]',
    ]"
    class="lg:top-0 md:top-0 top-[250px] left-0 right-0 h-[280px] mt-[880px] lg:mt-[550px] md:mt-[550px] ml-[10px] lg:ml-[760px] md:ml-[500px] mr-[10px] bg-white text-gray-800 rounded-xl shadow-lg p-6 absolute overflow-hidden border"
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
    <div class="w-full h-[100px]">
      <!-- Replace this with your actual chart component (e.g., Chart.js, ApexCharts, etc) -->
      <canvas id="chartOrdersProcessed"></canvas>
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



</template>

<script>
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  ArcElement
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  ArcElement
);


Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);


export default {
  name: 'HomeView',
  components: {
    
  },


  data(){
    return{
      dateFilter: 'custom',
      isScrollingUp: true,
      lastScrollY: window.scrollY,
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

  const chartConfigs = [
    {
      id: "chartSold",
      label1: "Products Sold",
      data1: [-100, 3000, -3800, -9400, 9500, -7600, 9700],
      color1: "#1e3a8a",
      label2: "Store Locations",
      data2: [10, 20, 30, 25, 40, 35, 50],
      color2: "#cbd5e1"
    },
    {
      id: "chartShipped",
      label1: "Total Shipped",
      data1: [-500, 3900, -9400, 9600, -5700, 580, -900],
      color1: "#2dd4bf",
      label2: "Warehouses",
      data2: [8, 15, 20, 18, 25, 30, 35],
      color2: "#cbd5e1"
    },
    {
      id: "chartRevenue",
      label1: "Revenue",
      data1: [150, 250, 400, 550, 700, 900, 1000],
      color1: "#16a34a",
      label2: "Expenses",
      data2: [50, 100, 200, 300, 400, 500, 600],
      color2: "#fca5a5"
    },
    {
      id: "chartReturns",
      label1: "Returns",
      data1: [10, 30, 25, 40, 50, 35, 20],
      color1: "#f59e0b",
      label2: "Complaints",
      data2: [2, 5, 3, 6, 7, 4, 1],
      color2: "#fcd34d"
    }
  ];

  chartConfigs.forEach(({ id, label1, data1, color1, label2, data2, color2 }) => {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: label1,
            data: data1,
            borderColor: color1,
            backgroundColor: color1 + "20",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            label: label2,
            data: data2,
            borderColor: color2,
            backgroundColor: color2 + "20",
            fill: true,
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  });

  // chartOrdersProcessed – Doughnut (Semi-circle)
  const doughnutCtx = document.getElementById("chartOrdersProcessed");
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Order Volume", "Coverage Area"],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ["#64748b", "#f87171"],
            borderWidth: 0
          }
        ]
      },
      options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}

  
}
</script>

