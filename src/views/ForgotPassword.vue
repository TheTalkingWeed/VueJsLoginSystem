<template>
    <div class="forgot-cont container rounded p-4 bg-white">
        <label class="h4 mb-3 mx-auto">Please enter you'r email</label> 
        <InputField text="Email" type="text" class="w-100 mb-3" parentType="forgot_pass" @input-sent="setChangeEmail"  :needDelete="deleteinput"></InputField>
        <Button text="Send email" class="send-button btn-primary m-auto" @btn-clicked="emitEmail" ></Button>

    </div>
</template>

<script>

import InputField from '../components/InputField.vue';
import Button from '../components/Button.vue';

export default {

    data(){
        return{
            userEmail:'',
            deleteinput:false
        }
    },

    components:{
        InputField,
        Button
    },
    props:{
        containerType:String
    },
    
    methods:{

        setChangeEmail(data){
            this.userEmail = data
        },
        emitEmail(){
            this.deleteinput = !this.deleteinput
            this.$emit('handle-forgotpass',this.userEmail)
            
        },
        showLogin(){
            this.$emit('show-login')
        },
        showSignUp(){
            this.$emit('show-signup') 
        }

    }
}
</script>

<style scoped>

    .forgot-cont{
        display:flex;
        flex-direction: column;
        width:30%;
        position: absolute;
        top:15%;
        left:50%;
        transform: translate(-50%, 0%);
    }

    a{
        cursor:pointer;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
    }
    a:hover{
        background-size: 100% 1px;
    }

    
</style>