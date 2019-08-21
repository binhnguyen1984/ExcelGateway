"use strict"
{
    let path = require('path');

    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    const bundleFolder = "wwwroot/ExcelAddIn/bundle/";
    const clientConfig = {
        externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            "jquery": "jQuery",
            "jquery-ui": "jquery-ui"
        },
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
            new CleanWebpackPlugin()
        ],
        devtool: "inline-source-map"
    }
    module.exports = [clientConfig];
}