const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {webpack.Configuration}
 */
const config = {
    entry: './src/index.ts',
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.vue', '.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.vue/, loader: 'vue-loader', options: { loaders: { ts: 'babel-loader' } } },
            { test: /\.ts/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

module.exports = config;