/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
    entry: {
        hypothesizer: path.join(__dirname, 'src/hypothesizer.tsx'),
        content: path.join(__dirname, 'src/Extention/content.ts'),
        background: path.join(__dirname, 'src/Extention/background.ts'),
    },
    mode: 'development',

    output: { path: path.join(__dirname, 'dist'), filename: '[name].js' },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public', to: '.' }],
        }),
    ],
}

module.exports = config
