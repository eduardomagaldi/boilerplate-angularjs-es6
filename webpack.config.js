const path = require('path'),
	// webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	cliArg = process.argv,
	prod = cliArg.indexOf('-p') > -1 || cliArg.indexOf('--production') > -1,
	mainStyleRegEx = /main\.styl$/,
	lazyCSSLoader = 'style-loader!css-loader!stylus-loader',
	bundleCSSLoader = ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'stylus-loader']
	});

module.exports = {
	entry: [
		'./components/main/main.js',
		'./components/main/main.styl'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: "js/[name].min.js"
	},

	// entry: {
	// 	'js/main.min.js': './components/main.js',
	// 	// 'js/vendor.js': ['react', 'react-dom'],
	// 	'css/main.min.css': './components/maincss.styl',
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

			{ //main.css required with javascript in dev and bundled (unobtrusive css) in prod
				test: mainStyleRegEx,
				loader: prod ? bundleCSSLoader : lazyCSSLoader
			},
			{
				test: /\.styl$/,
				loader: lazyCSSLoader,
				exclude: mainStyleRegEx
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

//                                 './components/main.js',

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