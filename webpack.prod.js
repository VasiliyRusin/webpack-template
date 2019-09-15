const
    merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    TerserPlugin = require('terser-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                sortClassName: true,
                sortAttributes: true,
                removeComments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            }
        })
    ]
});
