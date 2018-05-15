const merge = require('webpack-merge');
const common = require('./webpck.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
});