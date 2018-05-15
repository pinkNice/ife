const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpck.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
 		compress: true,
 		port: 8000
 	},
 	// plugins: [
 	// 	new UglifyJSPlugin()
 	// ]
	plugins: [
    new UglifyJSPlugin({
    	sourceMap: true
    }),
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
	
});

// module.exports = merge(common, {
// 	devtool: 'inline-source-map'
// });