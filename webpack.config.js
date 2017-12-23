const path = require('path');

const config = {
	context: path.join(__dirname),

	entry: [
		'./source/main.js',
	],

	output: {
		path: path.join(__dirname, 'public', 'js'),
		filename: 'main.min.js',
		publicPath: '/js',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},

	devServer: {
		contentBase: "public"
	}
};

module.exports = config;