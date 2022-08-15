<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
        <scroll class="content"
                ref="scroll" 
                :probe-type="3" 
                :pull-up-load="true"
                @scroll="contentScroll">
            <!-- <ul>
                <li v-for="(item,index) in $store.state.cartList" :key="index">{{item}}</li>
            </ul> -->
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailinfo="detailInfo1" @ImageLoad="ImageLoad"></detail-goods-info>
            <detail-goods-params ref="params" :param-info="paramInfo"></detail-goods-params>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
            <goods-list ref="recommend" :goods="recommends"></goods-list>
        </scroll>
        <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
        <toast :message="message" :show="show"/>
    </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar.vue'
import DetailSwiper from './detailComps/DetailSwiper.vue'
import DetailBaseInfo from './detailComps/DetailBaseInfo.vue'
import DetailShopInfo from './detailComps/DetailShopInfo.vue'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo.vue'
import DetailGoodsParams from './detailComps/DetailGoodsParams.vue'
import DetailCommentInfo from './detailComps/DetailCommentInfo.vue'
import DetailBottomBar from './detailComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import Toast from 'components/common/toast/Toast.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {backTopMixin} from 'common/mixin'
import {getDetail,Goods,Shop,GoodsParam,DetailGoods,DetailComment,getRecommend} from 'network/detail.js'
import {debounce} from 'common/utils.js'
    export default {
        name:"Detail",
        components:{
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailGoodsParams,
            DetailCommentInfo,
            GoodsList,
            DetailBottomBar,
            Toast
        },
        mixins:[backTopMixin],
        data() {
            return {
                iid:null,
                topImages:[],
                goods:{},
                shop:{},
                detailInfo1:{},
                paramInfo:{},
                commentInfo:{},
                recommends:[],
                getThemeTopY:null,
                i:0,
                message:'',
                show:false
            }
        },
        created() {
            this.iid=this.$route.params.iid
            getDetail(this.iid).then(res=>{
                const data =res.result
                this.topImages=res.result.itemInfo.topImages 
                this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                this.shop=new Shop(data.shopInfo)
                // this.detailInfo=data.detailInfo
                this.detailInfo1=new DetailGoods(data.detailInfo)
                this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
                if(data.rate.cRate !==0){
                    // this.commentInfo=data.rate.list[0]
                    // console.log(this.commentInfo)
                    this.commentInfo=new DetailComment(data.rate.list[0])
                }
            })
            getRecommend().then(res=>{
                this.recommends = res.data.list
            })

            this.getThemeTopY=debounce(()=>{
                this.themeTopYs=[]
                this.themeTopYs.push(0);
                this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            },200)
        },
        methods: {
            ImageLoad(){
                // this.$refs.scroll.refresh()
                this.getThemeTopY()
            },
            titleClick(index){
                this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
            },
            contentScroll(position){
                const positionY= -position.y
                if(0 <= positionY && positionY< this.$refs.params.$el.offsetTop){
                    this.i=0
                }else if(this.$refs.params.$el.offsetTop <= positionY && positionY < this.$refs.comment.$el.offsetTop){
                    this.i=1
                }else if(this.$refs.comment.$el.offsetTop <= positionY && positionY < this.$refs.recommend.$el.offsetTop){
                    this.i=2
                }else{
                    this.i=3
                }
                this.$refs.nav.currentIndex =this.i
                this.listenShowBackTop(position )
                return this.i
            },
            addToCart(){
                const product = {}
                product.image =this.topImages[0]
                product.title=this.goods.title
                product.desc=this.goods.desc
                product.price=this.goods.realPrice
                product.iid=this.iid
                this.$store.dispatch('addCart',product).then(res=>{
                  this.$toast.show(res,1500)
                })
            }
        },
    }
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
        overflow: hidden;
    }
    .detail-nav{
        position: relative;
        z-index: 333;
        background-color: #fff;
    }
    .content{
        background-color: white;
        height: calc(100% - 102px);
    }
</style>