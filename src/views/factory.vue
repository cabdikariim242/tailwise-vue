<template>


<!-- TEXT AREA -->

  <div
    class="flex flex-col justify-between lg:flex-row md:flex-row  absolute lg:top-[150px] md:top-[150px] top-[110px] left-0 right-0   lg:ml-[125px] md:ml-[125px] ml-4 mr-[20px] "
      
      >
      <h2 
      class="text-white text-lg mb-2 bg font-semibold"
      
      >Production Insights
</h2>


     


  </div>


<!-- CHART ONE -->
    <div class=" z-0 bg-white shadow-lg rounded-2xl p-6 absolute  top-0 left-0 right-0 mt-[200px]  ml-[10px] lg:ml-[116px] md:ml-[130px]  lg:mr-[475px] md:mr-[450px] mr-[10px]">
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
  </div>


  <!-- CHART TWO -->

    <div class=" bg-red-300 shadow-lg rounded-2xl p-6 absolute lg:top-0 md:top-0 top-[220px] left-0 right-0  mt-[340px] lg:mt-[200px] md:mt-[200px] ml-[10px] lg:ml-[900px] md:ml-[700px] mr-[10px]   z-0">
    <!-- Header -->
      <h2 
      class="text-black lg:text-white md:text-white  mt-[-70px] mb-[80px] capitalize text-lg  bg font-semibold "
      
      >Production Efficiency</h2>
    <div class="flex justify-between items-start mb-4">
      
      <div>
        <p class="text-sm text-blue-800 font-[500]">Raw Materials
</p>
        <h2 class="text-xl font-bold text-gray-800">
          3,700,121 <span class="text-red-500 text-sm font-semibold">4% <i class="fas fa-arrow-down"></i></span>
        </h2>
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