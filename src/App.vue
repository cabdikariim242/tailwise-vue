<template>
<<<<<<< HEAD
    <div class="flex bg-[#f1f4f8]">
      <navbar :isopen="isopen" @toggle-this="toggle" />
     <sidebar :isopen="isopen" @toggle-this="toggle" />
    
=======
    <div class="flex ">
 <sidebar/>
    <navbar/> 
  
>>>>>>> 4ac39b52c528b8a6045c3b84910d8c0ec41756d7
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
