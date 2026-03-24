const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        port: 3001,
    },
    output: {
        publicPath: "auto",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "electronics",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
            shared: {
                react: { singleton: true },
                "react-dom": { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};