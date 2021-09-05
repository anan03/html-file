//倒入Vue :在node-modules中找出vue用Vue接收
//引入vue
import Vue from 'vue'

//引入路由
import router from './router.js';
import './css/base.css';

//引入vat
import {
	Button
} from 'vant';
Vue.use(Button);

//页面
import app from './app.vue';

var vm = new Vue({
	el: '#app',
	router,
	render: c => c(app)
})
