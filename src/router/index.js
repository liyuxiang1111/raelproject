import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import Person from '@/views/Person.vue'
import Project from '@/views/Project.vue'
import Type from '@/views/Type.vue'
import Privacy from '@/components/Person/Content/Privacy.vue'
import Information from '@/components/Person/Content/Information.vue'
import Manage from '@/components/Person/Content/Manage.vue'
import Create from '@/components/Person/Content/Create.vue'
import Search from '@/components/Search/Search.vue'
import Member from '@/components/Member/Member.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/search', component: Search },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home },
    { path: '/member/:memberid', component: Member },
    { path: '/project/:projectid', component: Project },
    { path: '/type/:recommendid', component: Type },
    {
      path: '/person',
      component: Person,
      children: [
        { path: 'privacy', component: Privacy },
        { path: 'information', component: Information },
        { path: 'manage', component: Manage },
        { path: '', component: Manage },
        { path: 'create', component: Create }
      ]
    }
  ]
})

/* router.beforeEach(function(to, from, next) {
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
}) */

export default router
