<template>
	<div class="login_bg">
		<h3>用户登录</h3>
		<img class="icon" :src="icon" />
		<div class="input_view" v-for="(item,index) in inputLoginData" :key="item.icon">
			<img :src="item.icon" />
			<input type="text" name="icon.name" id="" value="" />
			<img v-if="item.isCodeImage" class="code" :src="item.codeImage" />
		</div>
		<router-link :to="homeUrl">
			<a>登录</a>
		</router-link>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				icon: require('../images/user_head_login.png'),
				homeUrl:'/outlineHome',
				inputLoginData: [{
						icon: require('../images/login_user.png'),
						hind: '账号',
						name: '',
						isCodeImage: false,
					},
					{
						icon: require('../images/login_password.png'),
						hind: '密码',
						name: '',
						isCodeImage: false,
					},
					{
						icon: require('../images/image_code.png'),
						hind: '验证码',
						name: '',
						isCodeImage: true,
						codeImage: require('../images/code.jpg'),
					}
				]
			}
		},
		methods: {},
	}
</script>

<style lang='scss' scoped>
	.login_bg {
		background: linear-gradient(135deg, #0065AD 0%, #00319E 100%);
		height: 100%;
		width: 100%;
		position: relative;

		h3 {
			margin: 0;
			height: 1.173333rem;
			font-size: 0.48rem;
			line-height: 1.173333rem;
			text-align: center;
			color: white;
			font-weight: 400;
		}

		img.icon {
			width: 4rem;
			display: block;
			margin: 0 auto;
		}

		.input_view {
			margin-left: 1.066666rem;
			margin-top: 0.333333rem;
			margin-right: 1.066666rem;
			height: 0.933333rem;
			border-bottom: 0.013333rem solid rgba(255, 255, 255, 0.8);
			display: flex;
			align-items: center;

			img {
				width: 0.6rem;
				height: 0.6rem;
			}

			input {
				box-sizing: border-box;
				background-color: yellow;
				margin-left: 0.133333rem;
				background-color: rgba(255, 255, 255, 0);
				border: 0px solid rgba(255, 255, 255, 0);
				font-size: 0.426666rem;
				color: white;
				height: 0.933333rem;
				width: 100%;
			}

			img.code {
				height: 0.933333rem;
				width: 2.4rem;
			}
		}

		a {
			background: linear-gradient(135deg, #00D188 0%, #00B089 100%);
			font-size: 0.426666rem;
			display: block;
			margin-left: 0.986666rem;
			margin-right: 0.986666rem;
			margin-top: 0.666666rem;
			height: 0.933333rem;
			text-align: center;
			color: white;
			line-height: 0.933333rem;
			border-radius: 0.466666rem;

		}

	}
</style>
