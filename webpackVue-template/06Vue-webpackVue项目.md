一、webpack中Vue搭建；
   步骤1、安装vue
   npm i vue -S
   
   步骤2、设置被倒入时候包的路径：在webpack.config.js中
   module.exports = {
   resolve:{
   	alias:{//设置被倒入时候包的路径
   	   'vue$':'vue/dist/vue.js'	
   	}
   }
   
   步骤3、在main.js中倒入
   import Vue from 'vue'
   var vm = new Vue({
   	el: '#app',
   	data: {
   		msg: '111'
   	},
    })
   
   注意：
   倒入Vue :在node-modules中找出vue用Vue接收
   import Vue from 'vue'
   注意：这种方式倒入的包不完整
   包的查找规则：
   1、项目根目录中有没有node_modules的文件夹
   2、在node_modules中根据包名，找对应的vue文件夹
   3、在vue文件夹中找一个叫做packge.json的包配置文件
   4、在package.json文件中查找一个main属性：指定了包加载的时候的入口文件
   问题：
   vue指定的是这个文件 vue.runtime.common.js,这个是阉割版的，缺少文件
   解决方法：
   必须在webpack.config.js中配置一下
   
二、vue文件使用：.vue文件的倒入
    问题：默认webpack无法倒入.vue文件
	步骤1、:安装Vue插件
	cnpm i vue-loader vue-template-compiler -D
	
	vue-loader15.x之后重要：
	Make sure to include VueLoaderPlugin问题解决:
	. 在webpack.config.js中加入
	const VueLoaderPlugin = require('vue-loader/lib/plugin');
	module.exports = {
	    plugins: [
	        // make sure to include the plugin for the magic
	        new VueLoaderPlugin()
	    ],
	    module : {
	    ...
	    }
	}
	
	步骤2、配置
	// 处理 .vue 文件的 loader
	{ test: /\.vue$/, use: 'vue-loader' } 
	
	
	步骤3、创建login.vue文件,并编写
	<template>
	<div>
		<h3>我是Vue组件的</h3>
	</div>
    </template>
	
	步骤4、在main.js中倒入使用
	在webpack中，如果想要通过vue文件，把组件放到页面中去，使用render;
	import Vue from 'vue'
    import login from 'login.vue'
	var vm = new Vue({
	el: '#app',
	data: {
		msg: '111'
	},
	render: c => c(login);
    })
    index.html中调用： 
	 <div id="app">
	 	{{msg}}
	 </div>
	 
三、 Vue文件中的
    1、定义对象：
    <script>
    	export default {
    		data() {
    			return {}
    		}
    		methods: {},
    	}
    </script>
	
	在node.js中
	倒入、引用
	var 名称=require('模块标识符')
	暴露：
	module.exports 和exports来暴露成员
	
	
	ES6中：
	倒入
	import 模块名称 from ‘包名’
	暴露成员
	中通过export default 和export向外暴露成员
	注意：
	1、在一个模块中只能有一个export default进行暴露
	2、在一个模块中，可以同时使用export和export default向外暴露成员
	
	通过暴露成员变量export default{}
	引入：import login from ‘../login.js’
	
	通过暴露成员变量export var title='星星'
	引入：import {title} from '../login.js'
	或者 import {title as title123} from '../login.js'
	
	组合引入
	import login ,{title} from '../js'
	
三、路由安装
    步骤1、安装
    cnpm i vue-router -S
	
	步骤2、倒入
	import VueRouter from 'vue-router' 
	//初始化
	Vue.use(VueRouter)
	
	步骤3、创建路由对象
	var router =new VueRouter({
		router:[{
				path: '/register',
				component: register
			}]
	})
	
	var vm = new Vue({
		el: '#app',
		render: c => c(app),
		router: routerObj
	})
	
四、样式：
   1、设置样式只在自组件中生效
      <style scoped></style>
   2、普通的标签只支持css ，如果要启用其他语言,需要设置
      <style scoped lang="scss">
	
五、抽离路由：
   
   
   
	
   
	
   
   
   