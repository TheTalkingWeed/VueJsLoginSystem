<template>
    <div class="signup-cont container  rounded p-4 pb-2 bg-white">
        <label class="h1 mb-3">Sign up</label>
        <InputField text="Fist name" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setFname" :needDelete="deleteinput"></InputField>
        <InputField text="Last name" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setLname" :needDelete="deleteinput"></InputField>
        <InputField text="Email" type="text" parentType="sign_up" class="w-100 mb-3" @input-sent="setEmail" :needDelete="deleteinput"></InputField>
        <InputField text="Password" type="password" parentType="sign_up" class="w-100 mb-1" @input-sent="setPassword" :needDelete="deleteinput"></InputField>
        <StrengthBar class="mb-2" :stren="passStrength"></StrengthBar>
        <InputField text="Password again" type="password" parentType="sign_up" class="w-100 mb-3" @input-sent="setPasswordAgain" :needDelete="deleteinput"></InputField>
        <Chekbox text="Accept everything" class="mb-3" parentType="sign_up" @check-box="setCheckBox" :setFalse="checkBoxToFalse"></Chekbox>
        <Button text="Sign up" class="signup-button btn-primary"  @btn-clicked="handleUserSignUp"></Button>
        </div>
</template>

<script>
import Chekbox from '../components/Chekbox.vue';
import InputField from '../components/InputField.vue';
import Button from '../components/Button.vue';
import StrengthBar from '../components/StrengthBar.vue';

import Swal from 'sweetalert2'


export default {
    
    data(){
        return{
            userinput:{
                userData:{
                    first_name:'',
                    last_name:'',
                    email:'',
                    password:'',
                },
                passwordagain:'',
                checked:false,
            },
            users:[],
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
            this.userinput.userData.first_name = data
        },
        setLname(data){
            this.userinput.userData.last_name = data
        },
        setEmail(data){
            this.userinput.userData.email = data
        },
        setPassword(data){
            this.userinput.userData.password = data
            this.setStrength(this.userinput.userData.password)
        },
        setPasswordAgain(data){
            this.userinput.passwordagain = data
        },
        setCheckBox(data){
            this.userinput.checked = data
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
        },

        async getUsers(){
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data
        },

        async saveUser(user){
            const res = await fetch("http://localhost:5000/users",{
                method: 'POST',
                headers:{
                'Content-type': 'application/json',
                },
                body:JSON.stringify(user)
            });
            const data = await res.json();

            this.users.push(data)

            Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign up was successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.checkBoxToFalse = !this.checkBoxToFalse
                this.deleteinput = !this.deleteinput
                this.$router.push({name: 'Login'});
            return data
            },

        handleUserSignUp(){
            const haveNull = Object.values(this.userinput.userData).some(x => x === null || x === '')

            const foundUser = this.users.find(item => this.userinput.userData.email === item.email);

                haveNull === true ?
                Swal.fire({
                    icon: 'error',
                    title: 'Sign up error',
                    text: 'Please fill all fields',
                    showConfirmButton: false,
                    timer: 1500
                }): typeof foundUser !== 'undefined' ?
                Swal.fire({
                    icon: 'error',
                    title: 'Sign up error',
                    text: 'Email already exists',
                    showConfirmButton: false,
                    timer: 1500
                }): !this.isValidEmail(this.userinput.userData.email) ?
                Swal.fire({
                    icon: 'error',
                    title: 'Sign up error',
                    text: 'Invalid email format',
                    showConfirmButton: false,
                    timer: 1500
                }): this.userinput.userData.password !== this.userinput.passwordagain ?
                Swal.fire({
                    icon: 'error',
                    title: 'Sign up error',
                    text: 'Passwords doesn\'t match',
                    showConfirmButton: false,
                    timer: 1500
                }) : this.userinput.checked === false ?
                Swal.fire({
                    icon: 'error',
                    title: 'Sign up error',
                    text: 'Please accept the agrement',
                    showConfirmButton: false,
                    timer: 1500
                }) : this.saveUser(this.userinput.userData)

        },

        isValidEmail(email){
            const re =   /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
        }
    },

    async created(){
        this.users = await this.getUsers()
    },

}
</script>

<style scoped>
    .signup-cont{
        display:flex;
        flex-direction: column;
        width:30%;
        position: absolute;
        top:13%;
        left:50%;
        transform: translate(-50%, 0%);
    }

    .signup-button{
        width:25%;
        margin:auto;
    }

    label{
        margin:auto;
    }

   
</style>