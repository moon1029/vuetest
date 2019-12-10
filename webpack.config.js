const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'HelloWorld',
            
        }),
        new webpack.optimize.CommonsChunkPlugin({   //多个，就分开写，但顺序要注意
            name:''
        })
    ],
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    }

}