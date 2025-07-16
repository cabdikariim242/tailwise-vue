<template>
  <div class="z-10 relative">
   <div
     @mouseenter="hover = true"
     @mouseleave="hover = false"
      :class="[
     toggle || hover ? 'w-[300px]' : 'w-[80px]',
     'phone:hidden flex flex-col bg-[#f3f5f8] group fixed bottom-3 top-0 left-3 transition-all duration-300 mr-10 mt-5 rounded-lg'
        ]"
      style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6)"
     >
      <!-- all icons are here -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <i 
            class="fa-brands fa-stackpath text-[35px] pl-6 pr-3 pt-3 text-5 transition-transform duration-50 rounded-full group-hover:rotate-[360deg]"
          ></i>
          <p
            v-if="!toggle"
            class="mt-5 group-hover:flex hidden text-[#465569] font-[500]"
          >
            ECHO
          </p>
          <p v-if="toggle" class="mt-5 text-[#465569] font-[500]">ECHO</p>
        </div>
        <div class="mr-2">
          <i
            @click="togglesidebar"
            class="fa-solid fa-arrow-right transition-transform duration-5 group-hover:rotate-[180deg] text-[#f3f5f8] group-hover:text-[gray]"
          ></i>
        </div>
      </div>

      <div class="ml-8">
        <p
          v-if="!toggle"
          class="mt-5 group-hover:flex hidden text-[#c6d0e0] text-[15px] font-[500]"
        >
          DASHBOARD
        </p>
        <p
          v-if="!toggle"
          class="mt-5 group-hover:hidden flex text-[#8d98aa] font-[500]"
        >
          ...
        </p>
        <p v-if="toggle" class="mt-5 text-[#c6d0e0] text-[15px] font-[500]">
          DASHBOARD
        </p>
      </div>

      <!-- content -->
      <router-link
        to="/"
        class="mx-2 rounded-lg mt-10 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center ">
          <i class="fa-solid fa-gauge-high text-[20px] text-[#4b93b1]"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500]"
          >
            E-ECOMERCE
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500]">
            E-ECOMERCE
          </p>
        </div>
      </router-link>

      <router-link
        to="/about"
      
        class="mx-2 rounded-lg mt-10 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-duotone fa-solid fa-chart-line text-[20px] text-[#4b93b1]"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500]"
          >
           CRM
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500]">
           CRM
          </p>
        </div>
      </router-link>

      <router-link
        :to="{name:'hospital'}"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-book-bookmark text-[20px] text-[#4b93b1]"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500]"
          >
           Hospital
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500]">
           Hospital
          </p>
        </div>
      </router-link>

      <router-link
        :to="{name:'factory'}"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-file  text-[20px] text-[#4b93b1]"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500]"
          >
            Factory
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500]">
            Factory
          </p>
        </div>
      </router-link>


      <router-link
        :to="{ name: 'banking' }"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-hard-drive text-[#4b93b1]"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500]"
          >
           Banking
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500]">
           Banking
          </p>
        </div>
      </router-link>
     </div>

   <div 
    v-if="isopen"
      class="w-[300px]
     flex lg:hidden md:hidden  flex-col bg-[#f3f5f8] group fixed bottom-0 top-0 left-0 transition-all duration-300 
        "
      style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6)"
     >
      <!-- all icons are here -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <i 
            class="fa-brands fa-stackpath text-[35px] pl-6 pr-3 pt-3 text-5  rounded-full "
          ></i>
          <p
            
            class="mt-5  text-[#465569] font-[500]"
          >
            ECHO
          </p>
        </div>
        <div class="mr-2">
         <i
          @click="$emit('toggle-this', !isopen)"
          class="fa-solid fa-xmark text-[20px] text-[#4b93b1] pr-4 mt-2 p-1 flex lg:hidden md:hidden"
        ></i>
        </div>
      </div>

      <div class="ml-8">
        <p
         
          class="mt-5  text-[#c6d0e0] text-[15px] font-[500]"
        >
          DASHBOARD
        </p>
      </div>

      <!-- content -->
      <router-link
        to="/"
        class="mx-2 rounded-lg mt-10 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center ">
          <i class="fa-solid fa-gauge-high text-[20px]  text-[#4b93b1]"></i>
          <p
        
            class=" text-[15px]  text-[#465569] font-[500]"
          >
            E-ECOMERCE
          </p>
          
        </div>
      </router-link>

      <router-link
        to="/about"
      
        class="mx-2 rounded-lg mt-10 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-duotone fa-solid fa-chart-line text-[20px] text-[#4b93b1]"></i>
          <p
        
            class=" text-[15px] 
             text-[#465569] font-[500]"
          >
           CRM
          </p>
          
        </div>
      </router-link>

      <router-link
        :to="{name:'hospital'}"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-book-bookmark text-[20px] text-[#4b93b1]"></i>
          <p
        
            class=" text-[15px]  text-[#465569] font-[500]"
          >
           Hospital
          </p>
          
        </div>
      </router-link>

      <router-link
        :to="{name:'factory'}"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-file text-[20px] text-[#4b93b1]"></i>
          <p
        
            class=" text-[15px]  text-[#465569] font-[500]"
          >
            Factory
          </p>
          
        </div>
      </router-link>


      <router-link
        :to="{ name: 'banking' }"
        class="mx-2 rounded-lg mt-10  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        <div class="ml-6 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-solid fa-hard-drive text-[#4b93b1]"></i>
          <p
            class=" text-[15px]  text-[#465569] font-[500]"
          >
           Banking
          </p>
        
        </div>
      </router-link>
     </div>

     
      
  </div>
</template>

<script>
export default {
  props: ["isopen"],

  data() {
    return {
      toggle: false,
      hover: false
    };
  },

  methods:{
    togglesidebar(){
      this.toggle = !this.toggle
    }
  }
};
</script>

<style scoped>
.router-link-exact-active {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6)

}
</style>
