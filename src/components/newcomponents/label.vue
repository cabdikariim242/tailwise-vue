<template>
    <label v-if="label">
    <slot></slot>
</label>
</template>

<script>
export default {
    props:{
        label:{
            type:Boolean,
            default:false
        }
    }
}
</script>