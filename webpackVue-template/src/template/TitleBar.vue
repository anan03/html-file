<template>
	<div class="title_bar">
		<a>
			<img src="../images/mobile／icon／tittleBar／backBtnWhite.png" />
		</a>
		<span>{{title}}</span>
		
		<a>
			<span></span>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '标题'
			}
		},
		methods: {}
	}
</script>

<style lang='scss' scoped>
	div.title_bar {
		height: 1.173333rem;
		background-color: black;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.48rem;

		a {
			width: 1.2rem;
			img{
				height: 1.6rem;
			}
		}
	}
</style>
