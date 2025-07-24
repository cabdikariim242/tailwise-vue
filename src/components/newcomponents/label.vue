<template>
    <label v-if="label">
        <span v-if="required">**</span>
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