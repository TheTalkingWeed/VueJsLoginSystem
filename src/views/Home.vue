<template>
    <div class="main-cont">
        <h1>Valaki</h1>
    </div>
</template>

<script>


export default {
    name: 'home-page',

    components:{
    },

    props:{
        username:String
    }
    
}
</script>

<style scoped>
   .main-cont{
    display:flex;
        flex-direction: column;
        width:35%;
        position: absolute;
        top:15%;
        left:50%;
        transform: translate(-50%, 0%);
    }

    
</style>

