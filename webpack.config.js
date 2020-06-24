const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// entrada del archivo js
	entry: './src/index.js',

	// salida de ese archivo, donde saldra la compilacion
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},

	// extensiones que utilizara el proyecto
	resolve: {
		extensions: ['.js'],
	},

	// reglas
	module: {
		rules: [
			{
				//estructura de babel
				test: /\.js?$/,
				exclude: /node_modues/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	// plugins que se va a utilizar
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html',
		}),
	],
}
