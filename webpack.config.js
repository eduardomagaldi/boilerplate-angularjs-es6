const path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./source/main.js',
		'./source/main.styl'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: "js/[name].min.js"
	},

	// entry: {
	// 	'js/main.min.js': './source/main.js',
	// 	// 'js/vendor.js': ['react', 'react-dom'],
	// 	'css/main.min.css': './source/maincss.styl',
	// },
	// output: {
	// 	path: path.join(__dirname, 'public'),
	// 	filename: '[name]',
	// },

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ //main.css bundle (unobtrusive css)
				test: /main\.styl$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'stylus-loader']
				})
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader',
				exclude: /main\.styl$/
			},

			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].min.css')
	],
	devServer: {
		contentBase: 'public'
	}
};





// const path = require('path');



// const config = {

//                 context: path.join(__dirname),

//                 entry: [

//                                 './source/main.js',

//                 ],

//                 output: {

//                                 path: path.join(__dirname, 'public2', 'js'),

//                                 filename: 'main.min.js',

//                                 publicPath: '/js',

//                 },

//                 module: {

//                                 loaders: [

//                                                 { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },

//                                                 { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }

//                                 ]

//                 },

//                 devServer: {

//                                 contentBase: "public2"

//                 }

// };



// module.exports = config;