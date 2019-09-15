const
    path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hotOnly: true,
        clientLogLevel: 'warning',
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
