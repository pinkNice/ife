const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//加载html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理问价

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'san + webpack demo'
		})
	],
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
 			},
 			{
        test: /\.js$/,
        loader: 'babel-loader',
        //打包除这个文件之外的文件
        exclude: path.resolve(__dirname,"./node_modules"),
        //打包包括的文件
        include: path.resolve(__dirname, "./src"),
        options: {
          'presets': ['latest']
        }
      }
 		]
	}
};