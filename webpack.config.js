const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

// module.exports = {
//     entry: "./source/main.js",
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: "[name].min.js"
//     },
//     module: {
//         loaders: [
// 			// {
// 			// 	test: /\.js$/,
// 			// 	loader: 'babel-loader',
// 			// 	exclude: /node_modules/
// 			// },
//         	{
//             	test: /\.styl$/,
//             	loader: stylusLoader
//         	}
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin("[name].css")
//     ]
// };

module.exports = {
    entry: [
        './source/main.js',
        './source/main.styl'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: "[name].min.js"
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: stylusLoader
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};





// const config = {
// 	context: path.join(__dirname),

// 	entry: [
// 		'./source/main.js',
// 	],

// 	output: {
// 		path: path.join(__dirname, 'public', 'js'),
// 		filename: 'main.min.js',
// 		// publicPath: '/js',
// 	},

// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js$/,
// 				loader: 'babel-loader',
// 				exclude: /node_modules/
// 			},
// 			// {
// 			// 	test: /\.styl$/,
// 			// 	loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
// 			// },
// 			// {
// 			// 	test: /\.styl$/i,
// 			// 	use: [
// 			// 		'style-loader',
// 			// 		'css-loader',
// 			// 		'stylus-loader'
// 			// 	]
// 			// },






// 			// { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
// 			{ test: /\.styl$/, loader: stylusLoader },













// 			// { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
// 			// { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
// 			// { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
// 			// { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
// 			// { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }

// 			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

//             // { test: /\.css$/, loader: "style-loader!css-loader" }
// 		]
// 	},

// 	plugins: [
// 		new ExtractTextPlugin("[name].css")
// 	],

// 	devServer: {
// 		contentBase: "public"
// 	}
// };

// module.exports = config;