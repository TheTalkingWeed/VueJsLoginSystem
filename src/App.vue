<template>
  <div class= "main-cont d-flex-row w-100  ">
      <LoginCont v-if="loginshow" class="login-container shadow-lg"  @show-signup="showSignUp" @show-forgotpass="showForgot" @handle-login="handleUserLogin" ></LoginCont>
      <SignUpCont v-if="signupshow" class="signup-container mt-5 shadow-lg"  @show-login="showLogIn" @handle-signup="handleUserSignUp"></SignUpCont>
      <ForgotPassword v-if ="forgotshow" class="forgotpass-container shadow-lg" @show-login="showLogIn" @show-signup="showSignUp" @handle-forgotpass="handlePassChange"></ForgotPassword>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SignUpCont from './components/SignUpCont.vue'
import LoginCont from './components/LoginCont.vue'
import ForgotPassword from './components/ForgotPassword.vue'


import Swal from 'sweetalert2'


export default {
  name: 'App',
  data(){
    return{
      users:[],
      loginshow:true,
      signupshow:false,
      forgotshow:false,
    }
  },
  components: {
    LoginCont,
    SignUpCont,
    ForgotPassword
},

  methods:{
    showSignUp(){
      this.signupshow=true
      this.loginshow=false
      this.forgotshow=false

    },
    showLogIn(){
      this.signupshow=false
      this.loginshow=true
      this.forgotshow=false
    },
    showForgot(){
      this.signupshow=false
      this.loginshow=false
      this.forgotshow=true
    },

    handlePassChange(data){
      const foundUser = this.users.find(item => data === item.email);

      console.log(foundUser)

      typeof foundUser === 'undefined'?
             Swal.fire({
             icon: 'error',
             title: 'Wrong email',
             text: 'This email is not registered',
             showConfirmButton: false,
             timer: 1000
           })
           :
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Email was sent to you',
            showConfirmButton: false,
            timer: 1000
          })

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
      this.showLogIn()
      return data
    },


    handleUserLogin(userinput){


      const foundUser = this.users.find(item => userinput.email === item.email && userinput.password === item.password);


      typeof foundUser === 'undefined'?
             Swal.fire({
             icon: 'error',
             title: 'Login error',
             text: 'Try again',
             showConfirmButton: false,
             timer: 1000
           })
           :
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Log in was successful',
            showConfirmButton: false,
            timer: 1000
          })

    },

    handleUserSignUp(userinput){
      const haveNull = Object.values(userinput.userData).some(x => x === null || x === '')

      const foundUser = this.users.find(item => userinput.userData.email === item.email);

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
          }): userinput.userData.password !== userinput.passwordagain ?
          Swal.fire({
            icon: 'error',
            title: 'Sign up error',
            text: 'Passwords doesn\'t match',
            showConfirmButton: false,
             timer: 1500
          }) : !this.isValidEmail(userinput.userData.email) ?
          Swal.fire({
            icon: 'error',
            title: 'Sign up error',
            text: 'Invalid email format',
            showConfirmButton: false,
             timer: 1500
          }): userinput.checked === false ?
          Swal.fire({
            icon: 'error',
            title: 'Sign up error',
            text: 'Please accept the agrement',
            showConfirmButton: false,
             timer: 1500
          }) : this.saveUser(userinput.userData)

    },

    isValidEmail(email){
      const re =   /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    }

  },

  async created(){
    this.users = await this.getUsers()

  }
}
</script>

<style scoped>

  .login-container{
    display: flex;
    flex-direction: column;
    margin:auto;
    margin-top:50px;
    width:400px;
    animation-name: login-anim;
    animation-duration: 1s;
  }

  .forgotpass-container{
     display: flex;
    flex-direction: column;
    margin:auto;
    margin-top:50px;
    width:400px;
    animation-name: forgot-pass-anim;
    animation-duration: 1s;
  }


  .signup-container{
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-top:50px;
    width:400px;
    animation-name: signup-anim;
    animation-duration: 1s;

  }

  @keyframes login-anim{
    0%{
      opacity: 0;
      margin-left: 0%;
      transform: translateX(0%);
    }

    100%{
      opacity: 1;
      margin-left: 50%;
      transform: translateX(-50%);
    }


  }


  @keyframes signup-anim{
     0%{
      opacity: 0;
      margin-left: 100%;
      transform: translateX(0%);
    }

    100%{
      opacity: 1;
      margin-left: 50%;
      transform: translateX(-50%);
    }


  }
  @keyframes forgot-pass-anim{
     0%{
      opacity: 0;
      margin-top: 0%;
    }

    100%{
      opacity: 1;
      margin-top: 50px;
      /* transform: translateY(50%); */
    }


  }
</style>
