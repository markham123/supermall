<template>
    <div class="bottom-bar">
         <div class="bottom-bar">
        <div class=" bar-item bottom-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon collect"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div> 
    </div>
    </div>
</template>

<script>
    export default {
        name:"DetailBottomBar",
         methods: {
            addToCart(){
                this.$emit('addCart');
        }
    },
    }
</script>

<style scoped>
.bottom-bar {
    height: 58px;
    width: 100%;
    position: relative;
    bottom: 0px;
    display: flex;
    text-align: center;
    background:#fff;
}
.bar-item {
    flex: 1;
    display: flex;
}
.bar-item>div {
    flex: 1;
    text-align: center;
}
.bar-item .text {
    font-size: 13px;
}
.bar-item .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url(~@/assets/img/img1.jpg) 0 0/100%;
}

.bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
}
.bar-right .cart {
    background: #ffe817;
    color: #333;
}
.bar-right .buy {
    background: #f69;
}

</style>