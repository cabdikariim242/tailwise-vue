<template>
  <button  :disabled="disabled" :class="customClass" @click="$emit('clickme') ">
    <slot></slot>
  </button>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    } ,
    disabled:{
      type: Boolean,
      default: false,
    },
    isClicked:{
      type: Boolean,
      default: false,
    },
      customClass: {
      type: String,
      default: ''
      }
    
  }

}
</script>