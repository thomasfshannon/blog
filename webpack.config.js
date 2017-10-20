const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const PROD = JSON.parse(process.env.NODE_ENV || '0');

const EXTRACT_CSS = PROD ? {
    test: /.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!sass-loader",
    })
} : {};

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'blog/static/src/js/app.js'),
            path.resolve(__dirname, 'blog/static/src/style/app.scss')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'blog/static/dist/js'),
        filename: PROD ? 'blog-[hash].js' : 'blog.js',
    },
    module: {
        rules: [
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            use: [{
                loader: 'url-loader?limit=100000'
            }]
        },
        {
            test: /\.scss$/,
            use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            }, 
            {
                loader: "css-loader" // translates CSS into CommonJS
            }, 
            {
                loader: "sass-loader" // compiles Sass to CSS
            },
            ]
        },
        EXTRACT_CSS,
        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        }
        ]

    },
    plugins: PROD ? [
        new OptimizeCssAssetsPlugin(),
        new ExtractTextPlugin({
            filename: "../css/blog-[hash].css",
            disable: false,
            allChunks: true
        }),
        new UglifyJSPlugin()
    ] : []
    // devtool: 'source-map'

}