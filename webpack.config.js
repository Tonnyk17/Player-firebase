
const path = require ("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/[name].[contenthash].js",
        publicPath: "/",
        
    },
    resolve : {
        extensions : [ ".js", ".jsx"],
        },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|jpeg|mp4|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                            fallback: "file-loader",
                            name: "images/[name].[hash].[ext]",
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css",

        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        open: true,
        historyApiFallback:true,
        port:9000,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin(),
        ]
    }
     
}