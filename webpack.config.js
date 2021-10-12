const path = require('path');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, "src"),
    entry: "./index.tsx",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    }
                ]
            },
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
};