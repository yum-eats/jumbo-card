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
				use: ['style-loader', 'css-loader', 'sass-loader']

			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i, //this is related to file-loader
				use: 'file-loader?name=[name].[ext]&outputPath=images/' // this will allow to have our image folder generated into the dis folder so our src and dist can continue to be sync
			}
		]
	},
	plugins: [],
};