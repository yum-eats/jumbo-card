const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
	plugins: [new HtmlWebpackPlugin()],
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
			}
		]
	}
};