import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import BlogDetail from '../views/blogDetail.vue'
import PostBlog from '../views/postBlog.vue'
import Regist from '../views/regist.vue'
import Home from '../views/home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blog_id',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/post',
    name: 'PostBlog',
    component: PostBlog
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
]

const router = new VueRouter({
  routes
})

export default router
