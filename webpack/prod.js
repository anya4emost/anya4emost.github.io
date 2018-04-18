import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './common.js';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {screw_ie8: true},
            compress: {screw_ie8: true, warnings: false},
            comments: false,
            screw_ie8: true
        })
    ]
});