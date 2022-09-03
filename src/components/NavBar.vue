<template>
    <nav class="main-cont">
        <h1 class="h2">Valami</h1>
        <div class="list-items">
            <ul class="list-inline h4">
                <li class="list-inline-item">Valami</li>
                <li class="list-inline-item">Valami</li>
                <li class="list-inline-item"><div class="prof-drop">
                    <h4 class="dropdown">Profile</h4>
                    <div class="dropdown-content">
                        <label class="name-label">Signed in as <span class="name">{{userName}}</span></label>
                        <hr class="line">
                        <a href="#">Your profile</a>
                        <a href="#">Profile settings</a>
                        <a href="#">Log out</a>
                         
                    </div>
                </div></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
    props:{
        userName:String
    }
}
</script>

<style scoped>
    .main-cont{
        display: flex;
        position: absolute;
        width:100%;
        padding: 10px;
        justify-content: space-between;
        align-content: center;
        background-color: #fff;
    }

    .list-items{
        display: flex;
        align-items: center;
        margin-right: 25px;
    }

    ul{
        margin:0;
    }

    ul li {
        margin-left:10px;
        cursor:pointer;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
    }

    ul li:hover{
        background-size: 100% 2px;
    }


    
    .prof-drop {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        border-radius: 5px;
        border:1px solid #ddd;
        display: none;
        position: absolute;
        left:-80%;
        background-color: #fff;
        width:130px;
        z-index: 1;
        font-size: 15px;
    }

    .dropdown-content a {
        color: black;
        padding-bottom: 5px;
        margin:0 auto 10px 7px;
        text-decoration: none;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
        display: block;
    }

    .dropdown-content a:hover {
        background-size: 100% 2px;

    }

    .prof-drop:hover .dropdown-content {
        display: flex;
        flex-direction: column;

    }

    .name-label{
        display:flex;
        flex-direction: column;
        margin:10px auto 0 7px;
    }
    
    .name{
        padding-top: 5px;
        font-weight: bold;
    }

    .line{
        margin:10px 0 10px 0;
        color:black;
    }

        
</style>