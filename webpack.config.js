const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

const PROD = JSON.parse(process.env.NODE_ENV || '0');

// currently building css if prod or not due to dealing with live changes across servers
// ie (webpack-dev-server, python server)
const EXTRACT_CSS = {
    test: /.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!sass-loader",
    })
};

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'project/static/src/js/app.js'),
            path.resolve(__dirname, 'project/static/src/style/app.scss')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'project/static/dist/'),
        filename: PROD ? 'project-[hash].js' : 'project.js',
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
            filename: 'project-[hash].css',
            disable: false,
            allChunks: true
        }),
        new UglifyJSPlugin(),
        new BundleTracker({filename: './webpack-stats.json'})
    ] : [
        // the css is generated to avoid having some browser sync thing set up
        new ExtractTextPlugin({
            filename: 'project.css',
            disable: false,
            allChunks: true
        }),
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
    ]
    // devtool: 'source-map'

}