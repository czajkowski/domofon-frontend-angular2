const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders:['ts-loader'],
            exclude: /node_modules|typings/
        }, {
            test: /\.css$/,
            loader: 'raw-loader'
        },{
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        /*
         * Plugin: CommonsChunkPlugin
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),

        /*
         * Plugin: HtmlWebpackPlugin
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ]
}