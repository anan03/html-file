<template>
	<div class="outline_home">
		<router-link class="outline_item" v-for="(item,index) in courseData" :to="item.url" :key="item.courseName"
			tag="div">
			<img :src="item.icon" />
			<div class="item_bottom">
				<p class="title">{{item.courseName}}</p>
				<p class="info">{{item.info}}</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				courseData: [{
						courseName: 'HTML总结',
						icon: require('../images/html.jpeg'),
						info: 'Androi知识点总结',
						url: '/html'
					}, {
						courseName: 'Android',
						info: 'Androi知识点总结',
						icon: require('../images/Android.jpeg'),
						url: '/html'
					},
					{
						courseName: 'ios',
						icon: require('../images/ios.jpeg'),
						info: 'ios课程总结',
						url: '/html',
					},
					{
						courseName: '微信小程序',
						icon: require('../images/Android.jpeg'),
						info: '微信小程序总结',
						url: '/wxin',
					},
					{
						courseName: 'JS总结',
						icon: require('../images/Android.jpeg'),
						info: 'Androi知识点总结',
						url: '/html',
					},
					{
						courseName: 'Flutter',
						icon: require('../images/Android.jpeg'),
						info: 'Flutter知识点总结',
						url: '/flutter',
					}
				]
			}
		},
		methods: {}
	}
</script>

<style lang='scss' scoped>
	.outline_item {
		height: 5rem;
		width: 100%;
		position: relative;

		img {
			width: 100%;
			object-fit: cover
		}

		.item_bottom {
			position: absolute;
			max-height: 2.5rem;
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
