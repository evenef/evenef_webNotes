import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Info from '@/components/Info/Info'
import AboutCSS from '@/components/Info/AboutCSS/AboutCSS'

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
    	},
      ]
    }
  ]
})
