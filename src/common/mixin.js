import BackTop from 'components/common/backTop/BackTop.vue'
export const backTopMixin ={
    components:{
        BackTop
    },
    data(){
        return{
            isShowBackTop:false
        }
    },
    methods: {
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        listenShowBackTop(position){
            this.isShowBackTop= -position.y > 1000
        }
    },
}