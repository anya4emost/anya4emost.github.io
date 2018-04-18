import commonConfig from './common.js';
import webpackMerge from 'webpack-merge';

module.exports = webpackMerge(commonConfig, {
    output: {
        filename: "[name].js"
    },
    devtool: "cheap-module-source-map",
    devServer: {
        stats: 'minimal',
        port: 7373,
        inline: true,
        historyApiFallback: true,
    }
});