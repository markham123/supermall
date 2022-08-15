<template>
    <div class="goods-info">
        <div class="info-desc">
            <div class="desc">{{detailinfo.desc}}</div>
        </div>
        <div class="info-key">{{detailinfo.keyword}}</div>
        <div class="info-list">
            <img 
               v-for="(item, index) in detailinfo.imageList" 
               :key="index" 
               :src="item" 
               alt="goods-img" 
               @load="goodsInfoImgLoad">
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    data() {
        return {
            info:0,
            imgLength:0,
            ImgagesLength:0
        }
    },
    props: {
        detailinfo:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    methods: {
        goodsInfoImgLoad(){
            this.imgLength ++ ;
            if( this.imgLength === this.detailinfo.imageList.length ){
                this.$emit("ImageLoad");
            }
        },
    },
}
</script>
<style scoped>
.goods-info {
    padding: 30px 8px 0px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-desc {
    padding: 0px 8px 0px;
    font-size: 14px;
}
.info-desc .desc {
    text-indent: 2em;
}
.info-key {
    padding: 8px;
}
.info-list img{
    width: 100%;
}
</style>