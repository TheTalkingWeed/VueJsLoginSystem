<template>
  <div class="container rounded p-4 bg-white">
    <label class="h1 mb-3">Log in</label>
    <InputField text="Email" type="text" class="w-100 mb-3" parentType="log_in" @input-sent="setEmail"  :needDelete="deleteinput"></InputField>
    <InputField text="Password" type="password" class="w-100 mb-3" parentType="log_in" @input-sent="setPassword"  :needDelete="deleteinput"></InputField>
    <Chekbox text="Remember me" class="mb-3" parentType="log_in" @check-box="setCheckBox" :setFalse="checkBoxToFalse"></Chekbox>
    <Button text="Log in" class="login-button btn-primary" @btn-clicked="handleLogIn" ></Button>
    <a class="text-decoration-none mx-auto mt-3 " @click="showForgotPass">Forgot password?</a>
    <a class="text-decoration-none mx-auto " @click="showSignUp">Dont have an account?</a>
  </div>
</template>

<script>



import InputField from './InputField.vue'
import Button from './Button.vue'
import Chekbox from './Chekbox.vue'

export default {

    data(){
        return{
            needInput:false,
            userinput:{
                    email: "",
                    password:""
                },
                deleteinput:false,
                checkBoxToFalse:false
        }
    },
    components: {
        InputField,
        Button,
        Chekbox,
    },
    props:{
        containertype:String
    },

    methods:{
        
       setEmail(data){
        this.userinput.email = data
       },
       setPassword(data){
        this.userinput.password = data
       },

        handleLogIn(){
            this.deleteinput = !this.deleteinput
            this.checkBoxToFalse = !this.checkBoxToFalse
            this.$emit('handle-login',this.userinput)
        },

        setCheckBox(){
            console.log('valami')
        },
        showForgotPass(){
            this.$emit('show-forgotpass') 
        },
        showSignUp(){
            this.$emit('show-signup') 
        }

        
    }
}
</script>

<style scoped>

    .login-button{
        width:25%;
        margin:auto;
    }

    

    label{
        margin:auto;
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
