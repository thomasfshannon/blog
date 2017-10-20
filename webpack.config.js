var path = require('path');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'blog/static/src/js/app.js'),
            path.resolve(__dirname, 'blog/static/src/style/app.scss')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'blog/static/js'),
        filename: 'blog.js',
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
        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        }
        ],

    },
    // devtool: 'source-map'

}