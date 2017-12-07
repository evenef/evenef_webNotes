import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Info from '@/components/Info/Info'
import AboutCSS from '@/components/Info/AboutCSS/AboutCSS'
import Edit from '@/components/Info/Edit/Edit'
import ArticleDetails from '@/components/Info/ArticleDetails/ArticleDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children: [
      	{
          path: '/',
          name: 'AboutCSS',
          component: AboutCSS
      },{
          path: '/info/edit',
          name: 'Edit',
          component: Edit
      },{
          path: '/info/articledetails',
          name: 'ArticleDetails',
          component: ArticleDetails
      }
      ]
    }
  ]
})
