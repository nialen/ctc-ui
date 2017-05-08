import Vue from 'vue'
import Router from 'vue-router'
import UserHome from '@/components/UserHome'
import UserList from '@/components/userList/'
import UserDetail from '@/components/userDetail/'
// import AdminHome from '@/components/AdminHome'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/user' },
    {
      path: '/user',
      component: UserHome,
      redirect: '/user/list',
      children: [
        { path: '/user/list', component: UserList },
        { path: '/user/detail', component: UserDetail }
      ]
    },
    // {
    //   path: '/admin',
    //   component: AdminHome,
    //   children: [
    //     { path: '/admin/list', component: AdminList },
    //     { path: '/admin/detail', component: AdminDetail }
    //   ]
    // },
    // {
    //   path: '/center',
    //   component: CenterHome,
    //   children: [
    //     { path: '/center/column', component: Column }
    //   ]
    // }
  ]
})
