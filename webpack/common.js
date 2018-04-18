const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
import CopyWebpackPlugin from 'copy-webpack-plugin';

const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
    entry: './client/index.tsx',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','autoprefixer-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: './client/index.html',
            inject: "body"
        }),
        new CopyWebpackPlugin([
            {from: './client/resources', to: 'resources'}
        ])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};