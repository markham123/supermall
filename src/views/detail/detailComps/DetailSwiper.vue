<template>
    <swiper class="detail-swiper">
        <swiper-item  v-for="(item, index) in topImages" :key="index">
            <img :src="item" alt="" class="detail-swiper-img">
        </swiper-item>
    </swiper>
    
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name:"DetailSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            topImages:{
                type:Array,
                default(){
                    return[]
                }
            }
        }
    }
</script>

<style scoped>
.detail-swiper{
    height: 300px;
}
.detail-swiper-img{
    width: 100%;
    height: 100%;
}
</style>