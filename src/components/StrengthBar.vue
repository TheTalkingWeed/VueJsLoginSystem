<template>
    <div class="str-percent">
        <div class="str-bar"><span class="" id="str-bar-span"></span></div>
        <span class="str-label " id="str-label">Strength</span>
    </div>
</template>

<script>

    export default{
        props:{
            stren:String
        },

        watch:{
            stren:function(){
                const bar = document.getElementById('str-bar-span')
                const barlabel = document.getElementById('str-label')

                var strlvl = ['strength','weak','medium','good','strong']
                strlvl.forEach(element => {
                    bar.classList.remove(element)
                });
                bar.classList.add(this.stren)
                barlabel.innerHTML = this.stren.charAt(0).toUpperCase() + this.stren.slice(1)
            }
        }
    }
</script>

<style scoped>

.str-percent{
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
}


.str-label{
    font: 12px;
    margin-left: 15px;
}

.str-bar{
  flex: 1;
  height: 5px;
  border-radius: 10px;
  display: block;
  background: #eee;
}

.str-bar span{
    display: block;
    height: 100%;
    transition: all .4s;
    border-radius: 10px;
}

.strength{
    background:#eee;
    width:0%;

}

.weak{
    background:#fc0303;
    width:25%;
}
.medium{
    background:#fc6b03;
    width:50%;
}
.good{
    background:#04c537;
    width:75%;
}
.strong{
    background:#027521;
    width:100%;
}



</style>