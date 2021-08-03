const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	target: 'web',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    devServer: {
		open: true
	},
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}