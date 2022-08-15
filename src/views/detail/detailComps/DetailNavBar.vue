<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
               <img src="~assets/img/img1.jpg" alt="">
            </div>
            <div slot="center" class="title">
                <div    v-for="(item,index) in titles" 
                        :key="index" 
                        class="title-item" 
                        @click="titleClick(index)"
                        :class="{active: index===currentIndex}">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
    export default {
        name:"DetailNavBar",
        components:{
            NavBar
        },
        data() {
            return {
                titles:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods: {
            titleClick(index){
                this.currentIndex=index;
                this.$emit('titleClick',index)
            },
            backClick(){
                this.$router.back()
            }
        },
    }
</script>

<style  scoped>
.title{
    display: flex;
    font-size: 12px;
}
.title-item{
    flex: 1;
}
.back{
    position: relative;
    height: 44px;
}
.back img{
    height: 30px;
    position: absolute;
    top:50%;
    transform:translateY(-50%);
}
.active{
    color: crimson;
}
</style>