<template>
    <div class="flex bg-[#f1f4f8]">
      <navbar :isopen="isopen" @toggle-this="toggle" />
     <sidebar :isopen="isopen" @toggle-this="toggle" />
    
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'


export default {
  components:
   {sidebar, navbar},
   data(){
    return{
      isopen:false
    }
   },

    methods: {
  toggle(value) {
    this.isopen = value
  }
}

};


</script>



<style>
body{
  height: 8400px;
}
</style>
