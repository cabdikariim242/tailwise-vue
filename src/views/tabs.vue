<template>
  <Label label="title" :labelClass="'text-red-600'" id="text" required="true"></Label>
</template>

<script>
import Label from '../components/newcomponents/Label.vue'
export default {
  components:[Label]
,

data(){
  return{
    label:'',
    labelClass:'',
    id:'',
    required:true
  }
}
}
</script>
