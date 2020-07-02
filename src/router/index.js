import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail/:id',
        component:()=>import('views/detail/Detail')
    }
]
const router = new VueRouter({
    routes,
    
})
export default router