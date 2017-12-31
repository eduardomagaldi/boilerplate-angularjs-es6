/* eslint-env node */

const path = require('path'),
	webpack = require('webpack'),
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
	// entry: [
	// 	'./components/main/main.js',
	// 	// './components/main/main.styl',

	// 	'./components/main/tests.js',
	// ],

	entry: {
		main: './components/main/main.js',
		tests: './components/main/tests.js',
		styles: './components/main/main.styl'
	},

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'js/[name].min.js',
		// publicPath: 'http://localhost:8080/public/',
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
			{ //all other css required with javascript and lazy loaded
				test: /\.styl$/,
				loader: lazyCSSLoader,
				exclude: mainStyleRegEx
			},

			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader'
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].min.css'),
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'],
			// Dropdown: 'exports-loader?Dropdown!bootstrap/js/dropdown',
		})
	],
	devServer: {
		contentBase: __dirname + '/public/',
		// publicPath: __dirname + '/public/',
		watchContentBase: true,
		before(app) {
			app.get('*/css/main.min.css', function(req, res) {
				res.set('Content-Type', 'text/css');
				res.send('//overwritten in dev mode to work with HMR\n//this same file is required via javascript in main.js');
			});
		}
	}
};
