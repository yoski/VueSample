// webpack.config.js
const env = process.env.NODE_ENV;
console.log("Node Environment: " + env);

var webpack = require('webpack');

module.exports = {
    entry: './src/ts/app.ts',
    output: {
        filename: './public/js/build/app.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.vue', '.less', '.sass'],
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: env === 'production' ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],
    devtool: 'source-map'
};

