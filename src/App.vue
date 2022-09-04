<template>
  <div class= "main-cont d-flex-row w-100  ">
      <nav class="nav-cont">
        <router-link class="path-link h4" to="/home">Home</router-link>
        <div class="list-items">
            <ul class="list-inline h4">
                <li class="list-inline-item"><router-link class="path-link" to="/signup">Sign up</router-link></li>
                <li class="list-inline-item"><router-link class="path-link" to="/login">Login</router-link></li>
            </ul>
        </div>
    </nav>
    <router-view/>
    </div>
  </template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',

}
</script>

<style scoped>

  .nav-cont{
    display: flex;
    position: absolute;
    width:100%;
    padding: 10px;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
    margin-bottom:50px;
  }

  .list-items{
    display: flex;
    align-items: center;
    margin-right: 25px;
  }

  ul{
    margin:0;
  }

  ul li{
    margin-left:25px;
    background-image: linear-gradient(#0d6ffc, #0d6ffc);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
  }

  ul li:hover{
      background-size: 100% 1px;
  }

  .path-link {
    color:rgb(29, 29, 29);
    text-decoration: none;
    margin-bottom: 0;
    background-image: linear-gradient(rgb(29, 29, 29), rgb(29, 29, 29));
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
  }

  .path-link:hover {
    opacity: .9;
    background-size: 100% 2px;
  }
   
</style>
