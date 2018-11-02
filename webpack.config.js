var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/')
    },

    devServer: {
        hot: true,
        // lazy: true,
        // inline: false
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}