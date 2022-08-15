import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/home'
    },{
        path:'/home',
        component:()=>import('../views/home/Home')
    },{
        path:'/cart',
        component:()=>import('../views/cart/Cart')
    },{
        path:'/category',
        component:()=>import('../views/category/Category')
    },{
        path:'/profile',
        component:()=>import('../views/profile/Profile')
    },{
        path:'/detail/:iid',
        component:()=>import('../views/detail/Detail')
    }

]
const router =new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  next()
})

export default router