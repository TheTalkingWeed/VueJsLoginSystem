<template>
    <div class="form-floating  w-25 input-field" >
        <input :type="type" class="form-control" :id="givenId" @keyup="sendInput" :placeholder="text">
        <i v-if="show" class="open_eye" :id="iconId" @click="changeType"></i>
        <label :for="givenId">{{text}}</label> 
    </div>  
</template>

<script>


export default {
    name:'input-field',
    

    props:{
        text:String,
        type:String,
        parentType:String,
        needDelete:Boolean
    },

    data(){
        return{
            givenId:this.text.toLocaleLowerCase().replace(' ','_') +'_'+ this.parentType,
            iconId:this.text.toLocaleLowerCase().replace(' ','_') + '_' + 'eye',
            show:false
        }
    },

    methods:{
       sendInput(){
        const data = document.getElementById(this.givenId)
        this.$emit('input-sent' ,data.value)
       },

       changeType(){
        const typeinput = document.getElementById(this.givenId)
        const eye = document.getElementById(this.iconId)
        typeinput.type = typeinput.type === 'password' ? 'text' : 'password'
        eye.classList.toggle("closed_eye")

        }


    },

    watch:{
        needDelete:function(){
            const input = document.getElementById(this.givenId)
            input.value = ''
            this.$emit('input-sent',input.value)
        }
    },
    
    mounted(){
        this.type === 'password' ? this.show = true : null
    }
 
}
</script>

<style scoped>

    .open_eye{
        content: url('../assets/icons/eye_open.png');
        position: absolute;
        top: 30%;
        left:90%;
        width:24px;
        height:24px;
        cursor: pointer;
        opacity: .5;
        
    }

    .closed_eye{
        content: url('../assets/icons/eye_closed.png');
        position: absolute;
        top: 30%;
        left:90%;
        width:24px;
        height:24px;
        cursor: pointer;
        opacity: .5;
        
        
    }


</style>