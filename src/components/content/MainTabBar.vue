<template>
    <div id="MainTabBar">
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="~assets/img/img3.jpg" alt="">
                <img slot="item-icon-active" src="~assets/img/img2.jpg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <img slot="item-icon" src="~assets/img/img3.jpg" alt="">
                <img slot="item-icon-active" src="~assets/img/img2.jpg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <img slot="item-icon" src="~assets/img/img3.jpg" alt="">
                <img slot="item-icon-active" src="~assets/img/img2.jpg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="item-icon" src="~assets/img/img3.jpg" alt="">
                <img slot="item-icon-active" src="~assets/img/img2.jpg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>



<script>
    import TabBar from '../common/tabbar/TabBar';
    import TabBarItem from '../common/tabbar/TabBarItem';
    export default {
        name:'MainTabBar',
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style  scoped>
    #MainTabBar{
        color:crimson;
        height:49px; 
    }

</style>