"use strict"
{
    let path = require('path');

    const CleanWebpackPlugin = require('clean-webpack-plugin');

    const bundleFolder = "wwwroot/ExcelAddIn/bundle/";
    const clientConfig = {
        entry: "./wwwroot/ExcelAddIn/Home",
        output: {
            filename: 'Home.js',
            path: path.resolve(__dirname, bundleFolder)
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
            ]
        },
        node: {
            fs: 'empty',
        },
        mode: 'development',
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        plugins: [
            new CleanWebpackPlugin([bundleFolder])
        ],
        devtool: "inline-source-map"
    }

    //const serverConfig = {
    //    entry: "./wwwroot/ExcelAddIn/FileHandler",
    //    output: {
    //        filename: 'FileHandler.js',
    //        path: path.resolve(__dirname, bundleFolder)
    //    },
    //    module: {
    //        rules: [
    //            {
    //                test: /\.tsx?$/,
    //                loader: "ts-loader",
    //                exclude: /node_modules/,
    //            },
    //        ]
    //    },
    //    target:'node',
    //    mode: 'development',
    //    resolve: {
    //        extensions: [".tsx", ".ts", ".js"]
    //    },
    //    plugins: [
    //        new CleanWebpackPlugin([bundleFolder])
    //    ],
    //    devtool: "inline-source-map"
    //}

    module.exports = [clientConfig];
}