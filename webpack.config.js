const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

const CompressionPlugin = require("compression-webpack-plugin");

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
        // { 
        //     test: /\.(woff|woff2|eot|ttf)$/, 
        //     use: [{
        //         loader: 'url-loader?limit=100000name=fonts/[name].[ext]'
        //     }]
        // },

        {
            // Capture eot, ttf, woff, and woff2
            test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            // include,
            // exclude,

            use: {
                loader: 'file-loader',
                options: {
                    name: '/fonts/[name].[ext]',
                },
            },
        },
        {
        test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        EXTRACT_CSS,
        {
            test: /\.js$/,
            exclude: /node_modules/,
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
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: '"production"'
              }
        })
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
    ],
    resolve: {
      alias: {
        vue: PROD ? 'vue/dist/vue.min' : 'vue/dist/vue.js'
      }
    }
    // devtool: 'source-map'

}