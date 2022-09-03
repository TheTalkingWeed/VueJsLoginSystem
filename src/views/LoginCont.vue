<template>
  <div class="login-cont container rounded p-4 bg-white">
    <label class="h1 mb-3">Log in</label>
    <InputField text="Email" type="text" class="w-100 mb-3" parentType="log_in" @input-sent="setEmail"  :needDelete="deleteinput"></InputField>
    <InputField text="Password" type="password" class="w-100 mb-3" parentType="log_in" @input-sent="setPassword"  :needDelete="deleteinput"></InputField>
    <Chekbox text="Remember me" class="mb-3" parentType="log_in" @check-box="setCheckBox" :setFalse="checkBoxToFalse"></Chekbox>
    <Button text="Log in" class="login-button btn-primary" @btn-clicked="handleUserLogin" ></Button>
    <h6 @click="passFrogot">Forgot password?</h6> 
    </div>
</template>

<script>



import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'
import Chekbox from '../components/Chekbox.vue'


import Swal from 'sweetalert2'


export default {

    data(){
        return{
            users:[],
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

        

        setCheckBox(){
            console.log('valami')
        },

        async getUsers(){
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data
        },

        handleUserLogin(){

       
        
        const foundUser = this.users.find(item => this.userinput.email === item.email && this.userinput.password === item.password);


        typeof foundUser === 'undefined'?
                Swal.fire({
                icon: 'error',
                title: 'Login error',
                text: 'Try again',
                showConfirmButton: false,
                timer: 1000
            })
            :
                (
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Log in was successful',
                        showConfirmButton: false,
                        timer: 1000
                    }),
                    
                    this.deleteinput = !this.deleteinput,
                    this.checkBoxToFalse = !this.checkBoxToFalse,
                    this.$router.push({name: 'Home'})
                )

                
        },

        passFrogot(){
            this.$router.push({name: 'Forgot_password'})
        }
    
    

        
    },
    async created(){
    this.users = await this.getUsers()
    },
}
</script>

<style scoped>
    .login-cont{
        display:flex;
        flex-direction: column;
        width:30%;
        position: absolute;
        top:15%;
        left:50%;
        transform: translate(-50%, 0%);
    }

    .login-cont h6{
        cursor:pointer;
        margin:auto;
        margin-top: 10px;
        color:#0d6ffc;
    }
    

    .login-button{
        width:25%;
        margin:auto;
    }

    

    label{
        margin:auto;
    }

    .path-link{
        margin: auto;
        margin-right: auto;
        text-decoration: none;
        cursor:pointer;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
    }
    .path-link:hover{
        background-size: 100% 1px;
    }

</style>
