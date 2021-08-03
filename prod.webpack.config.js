const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')

module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
		    inject: 'body'
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/index/]),
    ],
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'src-tauri/dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
}