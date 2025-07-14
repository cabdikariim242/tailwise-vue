<template>
  <div class="navbar">
    <div class="absolute top-0 left-0 right-0 h-[300px]"
      :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'bg-[#1b4b76]' : 'bg-white',
      ]"
    >
     <div
        :class="[
        'transition-colors duration-300',
        isScrollingUp ? 'bg-[#1b4b76]' : 'bg-[#051662]',
      ]"
    class=" flex justify-between   fixed top-5 left-[130px]  right-5 rounded-lg h-[60px]">
    
    <div class="container-1 ml-3">
      <router-link to="/" class="mr-1 text-[#eff1f1] font-light">
        App  <i class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1]"></i>
      </router-link>
      <router-link to="/" class="mr-1 text-[#eff1f1] font-light">
        Dashboards  <i class="fa-solid fa-greater-than text-[8px] ml-1 text-[#6387a1]"></i>
      </router-link>
      <router-link to="/" class="mr-1 text-[#6387a1] font-light">
        Analytics  
      </router-link>
      
      
     
    </div>

     <div class="container-1">
            <!-- <i class="fa-regular fa-magnifying-glass absolute"></i> -->

        
    </div>

     <div class="container-1">
      <h3>hello</h3>
    </div>

    </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>


<style>

</style>