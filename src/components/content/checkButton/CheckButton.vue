<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="~assets/img/img1.jpg" alt="" v-show="isChecked">
    </div>
</template>

<script>
    export default {
        name:"CheckButton",
        props:{
            isChecked:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
.check-button{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border:2px solid #aaa
}
.check{
    border-color: crimson;
}
img{
    width: 20px;
    height: 20px;
}
</style>