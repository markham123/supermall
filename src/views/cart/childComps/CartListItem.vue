<template>
     <div class="cart-list-item">
        <check-button :is-checked="itemInfo.checked" @click.native="checkClick(itemInfo)" />
        <div class="goods-img">
            <img :src="itemInfo.image" alt="goods_img">
        </div>
        <div class="goods-info">
            <div class="title">{{itemInfo.title}}</div>
            <div class="desc">{{itemInfo.desc}}</div>
            <div class="price_num">
                <div class="price">{{itemInfo.price}}</div>
                <div class="num">X{{itemInfo.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
    export default {
        name:"CartListItem",
        components:{
            CheckButton
        },
        props:{
            itemInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            checkClick(itemInfo){
                itemInfo.checked=!this.itemInfo.checked
            }
        },
    }
</script>

<style  scoped>
.cart-list-item {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(100, 100, 100, .2);
}
.goods-img {
    padding: 5px;
}
.goods-img img {
    width: 80px;
    height: 110px;
    border-radius: 5px;
}
.goods-info {
    width: 65%;
    padding: 5px 10px;
    overflow: hidden;
    font-size: 17px;
    color: #333;
}
.goods-info .title, .goods-info .desc {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods-info .desc {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
}
.goods-info .price_num {
    padding: 8px  5px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.goods-info .price_num .price {
    color: var(--color-high-text);
    /* font-size: 20px; */
    font-weight: bold;
}
</style>