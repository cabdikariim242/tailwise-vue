<template>
    <div class="flex bg-[#f1f4f8]">
    <sidebar/>
    <navbar/>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'


export default {
  components:
   {sidebar, navbar},

};


</script>



<style>
body{
  height: 8400px;
}
</style>
