<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" :id="givenId" @change="sendData">
        <label class="form-check-label" for="formCheckDefault" @click="checkBoxLabelClick">{{text}}</label>
    </div>
</template>

<script>
export default {
    name:'check-box',
    props:{
        text:String,
        parentType:String,
        setFalse:Boolean
    },

    data(){
        return{
            givenId:this.text.toLocaleLowerCase().replace(' ','_') +'_'+ this.parentType
        }
    },

    watch:{
        setFalse: function(){
           document.getElementById(this.givenId).checked=false
        }
    },

    methods: {
        sendData(){
            const checkbox = document.getElementById(this.givenId)
            this.$emit('check-box',checkbox.checked);
        },

        checkBoxLabelClick(){
            const checkbox = document.getElementById(this.givenId)
            checkbox.checked = !checkbox.checked
            this.sendData()
        }
    }
}
</script>

<style scoped>

</style>