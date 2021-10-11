var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, "src"),
    entry: "./index.jsx",
    module: {
        rules: [{
        test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
        open: true,
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "index.min.js",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};