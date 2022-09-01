<template>
    <div class="container  rounded p-4 pb-2 bg-white">
        <label class="h1 mb-3">Sign up</label>
        <InputField text="Fist name" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setFname" :needDelete="deleteinput"></InputField>
        <InputField text="Last name" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setLname" :needDelete="deleteinput"></InputField>
        <InputField text="Email" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setEmail" :needDelete="deleteinput"></InputField>
        <InputField text="Password" type="password" parentType="sign_up" class="w-100 mb-1" @input-sent="setPassword" :needDelete="deleteinput"></InputField>
        <StrengthBar class="mb-2" :stren="passStrength"></StrengthBar>
        <InputField text="Password again" type="password" parentType="sign_up" class="w-100 mb-3" @input-sent="setPasswordAgain" :needDelete="deleteinput"></InputField>
        <Chekbox text="Accept everything" class="mb-3" parentType="sign_up" @check-box="setCheckBox" :setFalse="checkBoxToFalse"></Chekbox>
        <Button text="Sign up" class="signup-button btn-primary"  @btn-clicked="handleSignUp"></Button>
        <a class="text-decoration-none mx-auto mt-3 " @click="showLogin">I already have an account</a>
        </div>
</template>

<script>
import Chekbox from './Chekbox.vue';
import InputField from './InputField.vue';
import Button from './Button.vue';
import StrengthBar from './StrengthBar.vue';


export default {
    
    data(){
        return{
            usersuinput:{
                userData:{
                    first_name:'',
                    last_name:'',
                    email:'',
                    password:'',
                },

                passwordagain:'',
                checked:false,


            },
            deleteinput:false,
            checkBoxToFalse:false,
            passStrength:''
        }
    },
    
    components: {
        InputField,
        Button,
        Chekbox,
        StrengthBar
    },


    props:{
        containertype:String,
    },

   

    methods:{
        setFname(data){
            this.usersuinput.userData.first_name = data
        },
        setLname(data){
            this.usersuinput.userData.last_name = data
        },
        setEmail(data){
            this.usersuinput.userData.email = data
        },
        setPassword(data){
            this.usersuinput.userData.password = data
            this.setStrength(this.usersuinput.userData.password)
            
            
        },
        setPasswordAgain(data){
            this.usersuinput.passwordagain = data
        },
        setCheckBox(data){
            this.usersuinput.checked = data
        },


        handleSignUp(){
             this.checkBoxToFalse = !this.checkBoxToFalse
             this.$emit('handle-signup',this.usersuinput)
        },


        showLogin(){
            this.$emit('show-login')
        },

        setStrength(pass){
            
                var str = 0;
                var output = 'none';
                var lowerCaseLetters = /[a-z]/g;
                if (pass.match(lowerCaseLetters)) {
                    str++;
                }
                var upperCaseLetters = /[A-Z]/g;
                if (pass.match(upperCaseLetters)) {
                    str++;
                } 
                var numbers = /[0-9]/g;
                if (pass.match(numbers)) {
                    str++;
                }
                if (pass.length >= 8) {
                    str++   ;
                }
                if (pass.length === 0){
                    output = 'none'
                }
                     
                output = str === 1 ? 'weak' :
                         str === 2 ? 'medium':
                         str === 3 ? 'good':
                         str === 4 ? 'strong' : 'strength'
                
                this.passStrength = output
        }
    }

}
</script>

<style scoped>
    .signup-button{
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