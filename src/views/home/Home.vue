<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control    :titles="['流行','新款','精选']" 
                        @tabClick="tabClick"
                        class="tab-control" 
                        ref="tabControl1"
                        v-show="isTabFixed"></tab-control>
        <scroll class="content" 
                ref="scroll" 
                :probe-type="3" 
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore">
                <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
                <recommend-view :recommends="recommends"></recommend-view>
                <feature-view></feature-view>
                <tab-control    :titles="['流行','新款','精选']" 
                                @tabClick="tabClick"
                                ref="tabControl2"></tab-control>
                <goods-list :goods="goods[currentType].list"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

import HomeSwiper from 'views/home/childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getHomeMultidata,getHomeGoods} from "network/home"
import {backTopMixin} from 'common/mixin'

    export default {
        name:"Home",
        components:{
            HomeSwiper,
            RecommendView,
            FeatureView,
            
            TabControl,
            NavBar,
            GoodsList,
            Scroll,
        },
        mixins:[backTopMixin],
        data() {
            return {
              banners:[],
              recommends:[] ,
              goods:{
                  'pop':{page:0,list:[]},
                  'new':{page:0,list:[]},
                  'sell':{page:0,list:[]},
              },
              currentType:'pop',
              tabOffsetTop:0,
              isTabFixed:false,
              saveY:0
            }
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        activated() {
            this.$refs.scroll.scrollTo(0,this.saveY,0)
            // console.log("1")
        },
        deactivated() {
            this.saveY= this.$refs.scroll.scroll.y
            // console.log(this.saveY)
            // console.log("2")
        },
        methods: {
            // 事件监听相关方法
            tabClick(index){
                switch(index){
                    case 0:
                        this.currentType='pop'
                        break
                    case 1:
                        this.currentType='new'
                        break
                    case 2:
                        this.currentType='sell'
                        break
                }
                this.$refs.tabControl1.currentIndex=index;
                this.$refs.tabControl2.currentIndex=index;
            },
            loadMore(){
                this.getHomeGoods(this.currentType)
            },
            
            contentScroll(position){
                this.listenShowBackTop(position)
                this.isTabFixed=(-position.y)>this.tabOffsetTop
            },
            // 网络请求相关方法
            getHomeMultidata(){
                getHomeMultidata().then(res => {
                    console.log(res.data.banner);
                    this.banners=res.data.banner.list;
                    this.recommends=res.data.recommend.list;
            })
            },
            getHomeGoods(type){
                const page=this.goods[type].page + 1
                getHomeGoods(type,page).then(res=>{
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scroll.finishPullUp()
                })
            },
            swiperImageLoad(){
                this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
               
            },
        },
        
    }
</script>

<style  scoped>
#home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
}
.home-nav{
    background-color: rgb(226, 102, 154);
    color: white;
    margin-bottom: -1px;
}

.tab-control{
    position: relative; 
    height: 40;
    z-index: 99;
}
.content{
    height: calc(100% - 93px);
    overflow: hidden;
    position: absolute; 
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>