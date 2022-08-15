<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-buttom-bar></cart-buttom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList.vue'
import CartButtomBar from './childComps/CartButtomBar.vue'

import {mapGetters} from 'vuex'
    export default {
        name:"Cart",
        components:{
            NavBar,
            CartButtomBar,
            CartList
        },
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters({
                length:'cartLength',
                list:'cartList'
            })
        },
    }
</script>

<style scoped>
    .nav-bar{
        background-color: crimson;
        color:white;
    }
</style>