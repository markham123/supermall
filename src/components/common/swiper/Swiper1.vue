<template>
    <div id="hy-swiper">
        <div class="mxy">
            <img :src="slideCount[currentIndex]" alt=""> 
        </div>
        <ul class="mxybutton">
            <li v-for="(data,index) in slideCount" @click="setclick(index)" :key="index"></li>
        </ul>
        
        <!-- <div class="swiper">
            <slot></slot>
        </div>
        <slot name="indicator"></slot>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index ===currentIndex-1}" :key="index"></div>
            </slot>
        </div> -->
    </div>
</template>

<script>
    export default {
        name:"Swiper",
        props:{
            interval:{
                type:Number,
                default:3000
            }
        },
        data() {
            return {
                slideCount:[
                    require('../../../assets/img/img3.jpg'),
                    require('../../../assets/img/img1.jpg'),
                    require('../../../assets/img/img3.jpg'),
                    require('../../../assets/img/img1.jpg')],
                currentIndex:0,
            }
        },
        components:{

        },
        methods: {
            setclick(index){
                this.currentIndex=index;
            },
        },
        computed:{
            nextIndex(){
                if(this.currentIndex==this.slideCount.length - 1){
                    return 0
                }else{
                    return this.currentIndex + 1
                }
               
            }
            
        },
        mounted() {
            setInterval( () => {
                this.setclick(this.nextIndex)
            },3000)
        },
        
    }
</script>

<style scoped>
    .mxy{
        width: 100%;
        height: 211px;
        margin:0 calc((100% - 211px)/2);
    }
    #hy-swiper{
        position: relative;
    }
    img{
        width:211px;
        height:211px;
    }
    .mxybutton{
        display: flex;
        list-style-type: none;  
        position:absolute;
        bottom: 0;
        left: 50%;
        transform:translateX(-50%);
        padding-inline-start: 0px;

    }
    li{
        width: 10px;
        height: 10px;
        margin: 3px;
        background-color: aqua;
        border-radius: 50%;
        justify-content: center;
    }
</style>