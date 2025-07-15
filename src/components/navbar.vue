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
    class="text-center fixed top-5 left-[130px]  right-5 rounded-lg h-[60px]  font-bold  text-white text-[20px]">
        <p>this is a test</p>
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