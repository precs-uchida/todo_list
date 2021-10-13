const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
        open: true,
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "index.min.js",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
};