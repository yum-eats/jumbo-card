const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ^ this is for the html Creator from webpack, very cool because it can include the configured jsx
// to js to that html template

var SRC_DIR = path.join(__dirname,'client/src');
var DIST_DIR = path.join(__dirname,'client/dist');

module.exports = {
	mode: 'development',
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR
	},
	module: {
		rules: [
			{
				test:/\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env','@babel/preset-react']
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath : DIST_DIR
				})
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i, //this is related to file-loader
				use: 'file-loader?name=[name].[ext]&outputPath=images/' // this will allow to have our image folder generated into the dis folder so our src and dist can continue to be sync
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ //this HtmlWebpackPlugin generates a html file for us
		hash : true, // This will add a dinamic
		template: `${SRC_DIR}/index.html` //this is the original path that will generate the index.html in the dist folder there is no need to add any script tags
		//this plugin/webpack injects it in for you;
	}),
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: false,
			allChunks: true,
		})
	],
};