<template>


<!-- TEXT AREA -->

  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] "
      
      >
      <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >General Report</h2>


      <div  
      class=" relative flex mr-[250px] "
      
      >
  </div>


  </div>

<!-- CHART ONE -->
    <div class=" z-0 bg-white shadow-lg rounded-2xl p-6 absolute  top-0 left-0 right-0 mt-[200px]  ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[420px] md:mr-[450px] mr-[10px]">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div class="flex gap-2 mb-2 md:mb-0">
        <div class="relative flex gap-6 ">
         <span class="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
    <i class="fa-solid fa-calendar-days text-white "></i>
  </span>
        <select v-model="dateCustom" class="bg-[#223b60] text-white px-4 py-2 pr-12 pl-8 rounded-lg shadow focus:outline-none lg:w-auto md:w-auto w-full">
        <option value="custom">Custom Date</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      </div>
        <button class="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700">19 Jul, 2025 - 19 Aug, 2025</button>
      </div>
      
    </div>

<canvas ref="chartCanvas" class="w-full h-96"></canvas>
  </div>

  <!-- CHART TWO -->


    
     <div class="bg-white shadow-lg rounded-2xl p-6 absolute lg:top-0 md:top-0 top-[250px] left-0 right-0  mt-[370px] lg:mt-[200px] md:mt-[200px] ml-[10px] lg:ml-[960px] md:ml-[700px] mr-[10px]   z-0">
      <!-- Header -->
      <h2 
      class="text-black lg:text-white md:text-white  mt-[-70px] mb-[40px] capitalize text-lg  bg font-semibold "
      
      >patient overview </h2>
      <div class="flex items-center justify-between mb-3">
        <div>
          <p class="text-2xl font-semibold text-gray-900">24,782</p>
          <p class="text-sm text-gray-500">Total Patients</p>
        </div>
        <div class="relative flex gap-6 ">
           <span class="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
      <i class="fa-solid fa-calendar-days text-white "></i>
       </span>
          <select v-model="dateFilter" class="bg-[#223b60] text-white px-4 py-2 pr-12 pl-8 rounded-lg shadow focus:outline-none lg:w-auto md:w-auto w-full">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        </div>
      </div>
     
     
     
      

      <!-- second one -->

      
   </div>
       <div class="bg-white shadow-lg rounded-2xl p-6 absolute lg:top-0 md:top-0 top-[350px] left-0 right-0  mt-[470px] lg:mt-[600px] md:mt-[200px] ml-[10px] lg:ml-[960px] md:ml-[700px] mr-[10px]   z-0">
        <!-- Header -->
        <h2 
        class="text-black lg:text-black md:text-white  mt-[-70px] mb-[40px] capitalize text-lg  bg font-semibold "
        
        >patient overview </h2>
      
          
        
        <!-- Categories -->
        <div class="grid grid-cols-2 gap-y-4 text-sm text-gray-700 mb-4">
          
        <!-- Footer Button -->
        
        
  
        
     </div>
  </div>

  
</template>

 <script >
export default {
  data (){
    return{
      dateFilter : 'daily',
      dateCustom : 'custom',
    }
  }
}

</script>


<style>

</style>