<template>
    <div class="cart-list">
        <scroll class="content"
                ref="scroll" 
                :probe-type="3"
                :pull-up-load="true">
            <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
    export default {
        name:"CartList",
        components:{
            Scroll,
            CartListItem
        },
        computed:{
            ...mapGetters(['cartList'])
        },
        activated() {

        },
    }
</script>

<style  scoped>
.cart-list{
    
    height:100%;
}
.content{
    height: calc(100vh - 133px) ;
    overflow: hidden;
}
</style>