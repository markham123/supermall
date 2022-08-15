<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" 
            :key="index" 
            class="tab-control-item"
            :class="{active:index === currentIndex}"
            @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods: {
            tabClick(index){
                this.currentIndex=index;
                this.$emit('tabClick',index)
            }
        },
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
        font-size: 16px;
        text-align: center;
        z-index: 9;
        background-color: white;
    }
    .tab-control-item{
        flex:1;
        height: 40px;
        line-height: 40px;
    }
    .active{
        color: crimson;
    }
    span{
        padding: 5px;
    }
    .active span{
        border-bottom: crimson 3px solid;
    }
</style>