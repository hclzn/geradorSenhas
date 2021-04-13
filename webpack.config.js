const path = require('path'); //Node utiliza Common JS
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development', //gera arquivo
    entry: ['./src/main.js'],
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
    devtool: 'source-map'
};