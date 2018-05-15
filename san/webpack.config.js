const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//加载html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理问价
 module.exports = {
 	entry: './src/index.js',
 	output: {
 		filename: 'index.bunle.js',
 		path: path.resolve(__dirname,'./dist')
 	},
 	devtool: 'inline-source-map',
 	devServer: {
 		contentBase: './dist',
 		compress: true,
 		port: 8000
 	},
 	module: {
 		rules: [
 			{
 				test: /\.css$/,
 				use: [
 					'style-loader',
 					'css-loader'
 				]
 			},
 			{
 				test: /\.(png|svg|jpg|gif)$/,
 				use: [
 					'file-loader'
 				]
 			}
 		]
 	},
 	plugins: [
 		new HtmlWebpackPlugin({
 			title: 'san+webpack demo'
 		})
 	]
 };