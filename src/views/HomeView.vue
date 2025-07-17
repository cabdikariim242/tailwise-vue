<template>
   <div  
    class="absolute top-[-230px] left-[100px] right-20 bottom-20
      flex justify-between items-center mb-6"
      
      >
      <h2 
      class="text-white text-lg  font-semibold ml-10 w-full"
      
      >General Report</h2>

      <div 
      class=" relative flex gap-6  "
      
      >
         <span class="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
    <i class="fa-solid fa-calendar-days text-white"></i>
  </span>
         <select v-model="dateFilter" class="bg-[#223b60] text-white px-4 py-2 pr-12 pl-8 rounded-lg shadow focus:outline-none">
        <option value="custom">Custom Date</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      
  </div>


  </div>


  <div  
   class="flex justify-between items-center gap-28">
    
  

  <div  
  class="top-[200px] left-[120px] bg-gradient-to-b from-[#1e3a8a] to-[#312e81] text-white rounded-xl shadow-lg p-6 w-[900px] max-w-md relative overflow-hidden border-4 border-white">
    
    <div class="flex items-center gap-2 mb-4">8    <span class="w-3 h-3 rounded-full bg-gray-300"></span>
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


  

  </div>



  
  




  
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },


  data(){
    return{
      dateFilter: 'custom',
    };
  },
  
}
</script>

