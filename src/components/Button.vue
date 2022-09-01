<template>
    <button  class="btn" @click="$emit('btn-clicked')">{{text}}</button>
</template>

<script>
    export default{
        name: 'btn-component',
        props:{
            text:String
        },
        
    }
</script>

<style scoped>

</style>