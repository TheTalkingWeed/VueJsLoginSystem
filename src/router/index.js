import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginCont from '../views/LoginCont.vue'
import SignUpCont from '../views/SignUpCont.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
      
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginCont,
      
  },
  {
    path: '/signup',
    name: 'Sign_up',
    component: SignUpCont,
      
  },
  {
    path: '/forgotpassword',
    name: 'Forgot_password',
    component: ForgotPassword,
      
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
