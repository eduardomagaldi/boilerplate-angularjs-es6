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
			},
			// {
			// 	test: /\.styl$/,
			// 	loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
			// },
			// {
			// 	test: /\.styl$/i,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'stylus-loader'
			// 	]
			// },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },

			// { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
			// { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
			// { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
			// { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
			// { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }

			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

            // { test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},

	devServer: {
		contentBase: "public"
	}
};

module.exports = config;