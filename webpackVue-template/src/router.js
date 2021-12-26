import VueRouter from 'vue-router'
import Login from './moudle/login.vue'
import outlineHome from './moudle/outlineHome.vue'
import html from './moudle/Html.vue'
import flutter from './moudle/Flutter.vue'
import wxin from './moudle/Wxin.vue'
import Vue from 'vue'

Vue.use(VueRouter);


var router = new VueRouter({
	routes: [{
			path: '/',
			redirect: '/login'
		}, //首页模版列表
		{
			path: '/login',
			component: Login
		}, //首页模版列表
		{
			path: '/outlineHome',
			component: outlineHome
		},
		{
			path: '/html',
			component: html
		},
		{
			path: '/flutter',
			component: flutter
		},
		{
			path: '/wxin',
			component: wxin
		},
		
		
	]
})
export default router
