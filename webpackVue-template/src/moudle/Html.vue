<template>
	<div class="html_home">
		<div class="html_title" v-on:click="back">
			HTML总结
		</div>
		<div class="html_item" v-for="(item,index) in htmlData" :key="item.courseName">
			<a :href="item.url">
				<img :src="item.icon" />
				<div class="item_bottom">
					<p class="title">{{item.courseName}}</p>
					<p class="info">{{item.info}}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				htmlData: [{
						courseName: 'HTML、CSS基础学习（上）',
						icon: require('../images/html.jpeg'),
						info: 'CSS初识、 内部样式表、内联样式、外链式、选择器、CSS字体样式属性、CSS外观属性、复合选择器',
						url: 'https://www.cnblogs.com/huihuizhang/p/15122637.html'
					}, {
						courseName: 'HTML、CSS基础学习（中）',
						icon: require('../images/html.jpeg'),
						info: '标签显示模式（display）、CSS 三大特性、背景(background)、盒子模型定位、CSS高级技巧',
						url: 'https://www.cnblogs.com/huihuizhang/p/15123930.html'
					}, {
						courseName: 'HTML5、CSS3基础学习（下）',
						icon: require('../images/html.jpeg'),
						info: '属性选择器、结构伪类选择器、nth-child、伪元素选择器、 box-sizing: border-box、图片变模糊（滤镜）、动态计算盒子宽度、过渡、动画、转换：移动、Flex:弹性布局',
						url: 'https://www.cnblogs.com/huihuizhang/p/15124159.html'
					}, {
						courseName: '移动端适配-媒体查询、less、rem',
						icon: require('../images/html.jpeg'),
						info: 'rem、媒体查询、移动端适配搭建、响应式布局：bootstrap前端开发框架',
						url: 'https://www.cnblogs.com/huihuizhang/p/15124220.html'
					}, {
						courseName: 'Vue基础学习（一）',
						icon: require('../images/html.jpeg'),
						info: 'v-cloak、v-text、v-html、v-bind、v-on、v-model、v-for、v-if v-show、过滤器、vue中样式Class、按键修饰符，自定义修饰符、自定义指令、Vue生命周期、冒泡事件阻止、阻止默认行为',
						url: 'https://www.cnblogs.com/huihuizhang/p/15125214.html'
					}, {
						courseName: 'Vue基础学习组件化、Vuex（二）',
						icon: require('../images/html.jpeg'),
						info: '动画、组件化创建、通过属性绑定的方式传值、子组件获取父组件的方法、子组件通过事件调用向父组件传递方法、获取DOM元素和组件引用：refs、VueX、VueX getters',
						url: 'https://www.cnblogs.com/huihuizhang/p/15125366.html'
					}, {
						courseName: 'Vue基础学习路由、watch、computed（三）',
						icon: require('../images/html.jpeg'),
						info: '路由安装、路由重定向redirect、watch监听文本框变化、computed',
						url: 'https://www.cnblogs.com/huihuizhang/p/15125581.html'
					}, {
						courseName: 'webPack',
						icon: require('../images/html.jpeg'),
						info: 'ES6模块化、webPack初始化项目、webpack基本使用',
						url: 'https://www.cnblogs.com/huihuizhang/p/15125681.html'
					}
				]
			}
		},
		methods: {
			back() {
				this.$router.go(-1); //返回上一层
			},
		}
	}
</script>

<style lang='scss' scoped>
	.html_title {
		font-size: 0.4rem;
		height: 1.066666rem;
		line-height: 1.066666rem;
		background: linear-gradient(135deg, #0065AD 0%, #00319E 100%);
		text-align: center;
		color: white;
	}

	.html_item {
		height: 5rem;
		width: 100%;
		position: relative;

		img {
			width: 100%;
			object-fit: cover
		}

		.item_bottom {
			position: absolute;
			max-height: 3rem;
			background-color: red;
			width: 100%;
			padding: 0.133333rem;
			box-sizing: border-box;
			background-color: rgba(0, 0, 0, 0.7);
			bottom: 0rem;

			p {
				color: white;
				margin: 0;
			}

			.title {
				font-size: 0.48rem;
			}

			.info {
				font-size: 0.373333rem;
			}
		}
	}
</style>
