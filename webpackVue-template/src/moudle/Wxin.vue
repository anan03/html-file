<template>
	<div class="html_home">
		<div class="html_title" v-on:click="back">
			微信小程序总结
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
						courseName: '微信小程序进阶',
						icon: require('../images/html.jpeg'),
						info: '自定义组件、wxs、父组件和子组件通讯',
						url: 'https://www.cnblogs.com/huihuizhang/p/15733078.html'
					},
					{
						courseName: '微信小程序分包',
						icon: require('../images/html.jpeg'),
						info: '分包',
						url: 'https://www.cnblogs.com/huihuizhang/p/15734736.html'
					},
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
