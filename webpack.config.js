var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: path.join(__dirname,'src'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    mode: 'production',
    devtool: 'source-map',
    devServer:{
      contentBase: './dist',
      compress: true,
      port: 9000,
      open: true,
      hot: true,
    }
}
module.exports = config;