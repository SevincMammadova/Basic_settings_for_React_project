const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './build'),
        hot: true,
    },
    watch: false,
    output: {
        filename: 'bundle.js', // динамичное и уникальное имя файла
        path: path.resolve(__dirname, 'build'),
        clean: true, // для очистки папки build при новом билде
    },
    module: {
        rules: [
            /** Babel **/
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
              },
            /** CSS */
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // npm i style-loader css-loader -D
            },
            /** SCSS/SAAS */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                // npm i style-loader css-loader sass sass-loader -D
            },
            /** Картинки */
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            /** Шрифты */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            /** Файлы CSV */
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
                // npm i csv-loader -D
            },
            /** Файлы XML */
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
                // npm i xml-loader -D 
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Basic settings for React project',
            template:  './src/index.html'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
         }),
    ],
};