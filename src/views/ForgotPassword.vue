<template>
    <div class="forgot-cont container rounded p-4 bg-white">
        <label class="h4 mb-3 mx-auto">Please enter you'r email</label> 
        <InputField text="Email" type="text" class="w-100 mb-3" parentType="forgot_pass" @input-sent="setChangeEmail"  :needDelete="deleteinput"></InputField>
        <Button text="Send email" class="send-button btn-primary m-auto" @btn-clicked="handlePassChange" ></Button>

    </div>
</template>

<script>

import InputField from '../components/InputField.vue';
import Button from '../components/Button.vue';
import Swal from 'sweetalert2'


export default {

    data(){
        return{
            users:[],
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
        async getUsers(){
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data
        },

        setChangeEmail(data){
            this.userEmail = data
        },
        
        handlePassChange(){
            const foundUser = this.users.find(item => this.userEmail === item.email);


            typeof foundUser === 'undefined'?
                    Swal.fire({
                    icon: 'error',
                    title: 'Wrong email',
                    text: 'This email is not registered',
                    showConfirmButton: false,
                    timer: 1000
                })
                :(

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Email was sent to you',
                        showConfirmButton: false,
                        timer: 1000
                    }),
                    this.deleteinput = !this.deleteinput

                )

            }, 

    },

    async created(){
    this.users = await this.getUsers()
    },
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