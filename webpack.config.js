module.exports = {
    entry: {
        typescript: './src/app/main.ts',
        html: "./src/index.html"
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders:['ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
}