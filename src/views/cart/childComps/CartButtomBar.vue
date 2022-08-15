<template>
    <div class="buttom-bar">
        <div class="buttom">
            <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
            <span>全选</span>
        </div>
        <div class="price">
            合计：{{totalPrice}}
        </div>
        <div class="calculate" @click="calcClick">
            去计算：{{CheckLength}}
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name:"CartButtomBar",
        components:{
            CheckButton
        },
        computed:{
            totalPrice(){
                return '￥'+ this.$store.getters.cartList.filter(item=>{
                    return item.checked
                }).reduce((preValue,item)=>{
                    return preValue + item.price * item.count
                },0)
            },
            CheckLength(){
                return this.$store.state.cartList.filter(item=>item.checked).length
            },
            isSelectAll(){
                return !(this.$store.state.cartList.filter(item=>!item.checked).length)
            }
        },
        methods: {
            checkClick(){
                if(this.isSelectAll){
                    this.$store.state.cartList.forEach(item=>item.checked =false)
                }else{
                    this.$store.state.cartList.forEach(item=>item.checked =true)
                }
            },
            calcClick(){
                if(!this.isSelectAll){
                    console.log(this.$toast)
                    this.$toast.show('请选择购买的商品',1500)
                }
                
            }
        },
    }
</script>

<style scoped>
.buttom-bar{
    height: 40px;
    background-color: #fff;
    position: relative;
    display: flex;
    /* bottom: 40px; */
    line-height: 40px;
}
.buttom{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.check-button{
    width:20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
    width: 20px;
}
.price{
    margin-left: 30px;
    flex:1
}
.calculate{
    width: 100px;
    background-color: crimson;
    color: #fff;
}
</style>