import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from "../views/Category.vue";
import GoodsList from '../views/GoodsList.vue'
import Cart from "../views/Cart.vue";
import Center from "../views/Center.vue";
import Layout from '../Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    // 整个app的容器
    children: [
      {
        path: '',
        redirect: "/category", //重定向
      },
      {
        path: "category",
        component: Category,
        children: [
          {
            path: 'goods-list/:id',
            component: GoodsList
          }
        ]
      },
      {
        path: "cart",
        component: Cart,
      },
      {
        path: "center",
        component: Center,
      },
    ],
  },
  // 登录
  {
    path: "/login",
  },
  // 注册
  {
    path: "regester",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
