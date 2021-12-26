<template>
	<div class="html_home">
		<div class="html_title" v-on:click="back">
			Flutter总结
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
						courseName: 'Flutter基础组件（一）',
						icon: require('../images/html.jpeg'),
						info: 'Text组件、Container组件、Image组件、RaisedButton按钮',
						url: 'https://www.cnblogs.com/huihuizhang/p/15697374.html'
					}, {
						courseName: 'Flutter基础组件（二）',
						icon: require('../images/html.jpeg'),
						info: 'ListView、GridView、Card卡片组件',
						url: 'https://www.cnblogs.com/huihuizhang/p/15700462.html'
					}, {
						courseName: 'Flutter基础组件（三）',
						icon: require('../images/html.jpeg'),
						info: 'Paddiing组件、Row水平布局组件、Column垂直布局组件、Expanded类似Web中的Flex布局、SizedBox(width: 10):常用于做分割线、Wrap 组件',
						url: 'https://www.cnblogs.com/huihuizhang/p/15704146.html'
					},
					{
						courseName: 'Flutter基础组件（四）',
						icon: require('../images/html.jpeg'),
						info: 'StatelessWidget 是无状态组件、StatefulWidget 是有状态组件',
						url: 'https://www.cnblogs.com/huihuizhang/p/15706238.html'
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
