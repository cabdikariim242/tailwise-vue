<template>


<!-- TEXT AREA -->

  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] "
      
      >
      <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >Production Insights
</h2>


      <div  
      class=" relative flex mr-[250px] "
      
      
      >
       <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >Production Insights
</h2>
  </div>


  </div>


<!-- CHART ONE -->
    <div class="w-[750px] z-0 bg-white shadow-lg rounded-2xl p-6 absolute  top-0 left-0 right-0 mt-[200px]  ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[420px] md:mr-[450px] mr-[10px]">
    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="text-sm text-gray-500">Total Production Units</p>
        <h2 class="text-xl font-bold text-gray-800">
          24,176,221 <span class="text-green-500 text-sm font-semibold">11% <i class="fas fa-arrow-up"></i></span>
        </h2>
      </div>
      <div class="text-sm text-gray-600 border rounded px-3 py-1 bg-gray-100">
        19 Jul, 2025 - 19 Aug, 2025
      </div>
    </div>

    <!-- Chart -->
    <div class="">
          <!-- <canvas ref="areaChart"></canvas> -->

      <canvas id="chartSold"></canvas>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center mt-4 text-sm text-gray-500">
      <div class="flex gap-4">
        <div class="flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-indigo-600"></span> Machine Performance
        </div>
        <div class="flex items-center gap-1">
          <span class="w-2 h-2 rounded-full border border-indigo-400"></span> Defect Rate
        </div>
      </div>
      <a href="#" class="text-blue-500 hover:underline">
        <i class="fa-solid fa-up-right-from-square mr-1"></i> Show full report
      </a>
    </div>
  </div>


  <!-- CHART TWO -->

    <div class="w-[400px] bg-white shadow-lg rounded-2xl p-6 absolute lg:top-0 md:top-0 top-[250px] left-0 right-0  mt-[370px] lg:mt-[200px] md:mt-[200px] ml-[10px] lg:ml-[900px] md:ml-[700px] mr-[10px]   z-0">
    <!-- Header -->
     
    <div class="flex justify-between items-start mb-4">
      
      <div>
        <p class="text-sm text-gray-500">Raw Materials
</p>
        <h2 class="text-xl font-bold text-gray-800">
          3,700,121 <span class="text-red-500 text-sm font-semibold">4% <i class="fas fa-arrow-down"></i></span>
        </h2>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>

      </div>
    </div>

    <!-- Chart -->
    <div class="">
          <!-- <canvas ref="areaChart"></canvas> -->

      <canvas id="chartReturns"></canvas>
    </div>

  
  </div>


   <div class="w-[400px] bg-white shadow-lg rounded-2xl p-6 absolute lg:top-0 md:top-0 top-[250px] left-0 right-0  mt-[370px] lg:mt-[480px] md:mt-[200px] ml-[10px] lg:ml-[900px] md:ml-[700px] mr-[10px]   z-0">
    <!-- Header -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="text-sm text-gray-500">Product Stock

</p>
        <h2 class="text-xl font-bold text-gray-800">
          1,246,221 <span class="text-green-500 text-sm font-semibold">8% <i class="fas fa-arrow-down"></i></span>
        </h2>
      </div>
      <div class="ml-auto">
        <i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>

      </div>
    </div>

    <!-- Chart -->
    <div class="">
          <!-- <canvas ref="areaChart"></canvas> -->

      <canvas id="chartRevenue"></canvas>
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
  ArcElement,
  DoughnutController
} from 'chart.js';




Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  ArcElement,
  DoughnutController 
);

export default {
  name: 'HomeView',
  name: 'MultiSeriesAreaChart',
  

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

    // ✅ Line chart configs
    const chartConfigs = [
      {
        id: "chartSold",
        label1: "Products Sold",
        data1: [-100, 2000, -3900, -9400, 9500, -7600, 9700],
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
            legend: { display: false }
          },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      });
    });

  
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
            legend: { display: false }
          }
        }
      });
    }
  }
};
</script>

<style>

</style>