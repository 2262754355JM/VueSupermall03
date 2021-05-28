import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../pages/home/Home')
const Cart = () => import('../pages/cart/Cart')
const CateGory = () => import('../pages/category/CateGory')
const Profile = () => import('../pages/profile/Profile')
const detail =() => import('pages/detail/detail')
const CateGoryRight = () => import('../pages/category/CateGoryRight')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    redirect:'/categoryright',
   component:CateGory,
   children:[
     {
       path:'/categoryright',
       component:CateGoryRight
     }
   ]
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
