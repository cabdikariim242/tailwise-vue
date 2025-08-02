<template>
    <div :class="customClass">

    </div>
    <slot></slot>
</template>

<script>

export default {
props:{
    customClass:{
        type:String,
        default: ''
    }
}
}
</script>

<style>

</style>