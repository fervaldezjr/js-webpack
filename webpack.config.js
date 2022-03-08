const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + 'dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
            ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'./src/second.css'
        })
    ]
};