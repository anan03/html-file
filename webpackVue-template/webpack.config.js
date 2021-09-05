const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	//编译的文件位置
	entry: path.join(__dirname, './src/main.js'),
	//输出的位置
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		open: true, //自动打开浏览器
		port: 3000,
		// contentBase: 'src',
		hot: true,
	},
	plugins: [ //配置插件的节点
		new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，这是启动热更新
		new htmlWebpackPlugin({
			template:  path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module:{//用于配置所有第三方模块 加载器
		rules:[
			{test: /\.css$/,use:['style-loader','css-loader']},
			{test: /\.less$/,use:['style-loader','css-loader','less-loader']},
			{test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
			//做处理，大图片不用base64处理  图片大于等于94465时，不用base64 单位字节： kb*1024
			//name：之前叫什么名字现在还叫什么名，前面放一个8位的hash值
			{test: /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=94464&name=[hash:8]-[name].[ext]&esModule=false'},
			//处理字体
			{test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			// 配置 Babel 来转换高级的ES语法
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, 
			{ test: /\.vue$/, use: 'vue-loader' } 
		]
	},
	resolve:{
		// alias:{//设置被倒入时候包的路径
		//    // 'vue$':'vue/dist/vue.js'	
		// }
	}
}
